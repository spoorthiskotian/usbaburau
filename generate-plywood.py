#!/usr/bin/env python3
"""
Plywood Data Generator
Converts JustDial Excel data into React-ready JavaScript file
"""

import pandas as pd
import re
import sys

def get_category(name):
    """Determine product category from name"""
    name_lower = name.lower()
    if 'marine' in name_lower or 'bwr' in name_lower:
        return 'Marine Plywood'
    elif 'blockboard' in name_lower or 'block board' in name_lower:
        return 'Blockboard'
    elif 'commercial' in name_lower:
        return 'Commercial Plywood'
    elif 'fire' in name_lower or 'retardant' in name_lower:
        return 'Fire Retardant'
    elif 'flexible' in name_lower or 'flexiply' in name_lower:
        return 'Flexible Plywood'
    elif 'mr' in name_lower or 'moisture' in name_lower:
        return 'MR Grade Plywood'
    elif 'bwp' in name_lower or 'boiling water' in name_lower:
        return 'BWP Grade Plywood'
    else:
        return 'General Plywood'

def get_product_details(category, thickness, brand):
    """Generate description and specifications based on category"""
    specs = {
        'StandardSize': '8x4 feet (2440x1220 mm)',
        'Thickness': thickness,
        'ManufacturerDetails': brand,
        'TaxRate': '18% GST',
        'HSN': '4412'
    }
    
    descriptions = {
        'Marine Plywood': f"Premium {brand} {thickness} Marine Grade Plywood designed for exceptional waterproofing and durability. Made with BWP Grade Phenol Formaldehyde resin, this plywood offers superior resistance to boiling water for 72+ hours. Ideal for high-moisture environments including kitchens, bathrooms, boat building, and coastal construction. Features 100% waterproof performance with lifetime warranty against delamination.",
        
        'BWP Grade Plywood': f"Superior quality {brand} {thickness} Boiling Water Proof (BWP) Plywood manufactured with Phenol Formaldehyde resin for maximum water resistance. Can withstand continuous boiling water exposure for over 72 hours without delamination. Perfect for water-intensive applications like water tanks, basements, terraces, and high-humidity environments. Exceeds IS:710 standards with exceptional durability.",
        
        'MR Grade Plywood': f"Cost-effective {brand} {thickness} Moisture Resistant (MR) Grade Plywood bonded with urea-formaldehyde resin. Designed for interior applications with moderate moisture exposure. Offers excellent resistance to humidity and occasional dampness while maintaining structural integrity. Smooth surface ideal for paints, veneers, and laminates. Perfect for dry indoor furniture, wardrobes, partitions, and general carpentry.",
        
        'Blockboard': f"Lightweight {brand} {thickness} Blockboard featuring solid softwood strips core sandwiched between hardwood veneers. 15-25% lighter than equivalent plywood thickness, making it ideal for large panels, doors, and long shelves. Excellent screw-holding capacity and stability for furniture applications. Cost-effective alternative for interior work requiring dimensional stability and ease of handling.",
        
        'Fire Retardant': f"Safety-certified {brand} {thickness} Fire Retardant Plywood chemically treated with flame-resistant solution. Delays ignition, slows lateral flame spread, and reduces smoke emission during fire. Maintains structural integrity under intense heat exposure. Ideal for commercial buildings, schools, hospitals, theaters, and any application requiring enhanced fire safety compliance. Meets Euro Class B/C fire ratings.",
        
        'Flexible Plywood': f"Innovative {brand} {thickness} Flexible Plywood designed for curved and decorative applications. Special veneer arrangement allows bending in one or both directions without cracking. Perfect for creating curved furniture, arches, columns, boat interiors, and designer interior elements. Combines flexibility with strength for creative architectural solutions.",
        
        'Commercial Plywood': f"Economical {brand} {thickness} Commercial Grade Plywood suitable for general construction and temporary applications. Offers basic strength and durability for non-structural interior work. Cost-effective solution for projects with budget constraints. Suitable for packaging, temporary partitions, formwork, and general carpentry where premium grades are not required.",
        
        'General Plywood': f"Versatile {brand} {thickness} General Purpose Plywood manufactured with quality hardwood veneers. Suitable for a wide range of interior and semi-exterior applications. Cross-laminated construction provides excellent strength-to-weight ratio and dimensional stability. Ideal for furniture making, cabinetry, wall paneling, and general woodworking projects. Smooth surface ready for finishing."
    }
    
    category_specs = {
        'Marine Plywood': {
            'Grade': 'BWP (IS:710)',
            'WaterResistant': '100% Waterproof - 72+ hours boiling resistance',
            'Adhesive': 'Phenol Formaldehyde (PF) Resin',
            'Application': 'Kitchens, Bathrooms, Marine, Outdoor Furniture, Coastal Areas',
            'Certification': 'ISI 710, E0 Emission Norms',
            'ProductWarranty': 'Lifetime Warranty',
            'BorerResistant': 'Yes - Termite & Borer Proof',
            'Strength': 'High Tensile Strength with Cross-laminated Veneers',
            'CoreMaterial': 'High-Density Tropical Hardwood'
        },
        'BWP Grade Plywood': {
            'Grade': 'BWP (Boiling Water Proof)',
            'WaterResistant': 'Excellent - Withstands 72+ hours boiling',
            'Adhesive': 'Phenol Formaldehyde (PF) Resin',
            'Application': 'Water Tanks, Bathrooms, Terraces, Basements, Wet Areas',
            'Certification': 'ISI 710 Certified',
            'ProductWarranty': '25 Year Warranty',
            'Use': 'Interior and Exterior - High Moisture Zones',
            'Strength': 'Superior Load Bearing Capacity'
        },
        'MR Grade Plywood': {
            'Grade': 'MR (Moisture Resistant)',
            'WaterResistant': 'Moderate - Interior Moisture Resistance',
            'Adhesive': 'Urea Formaldehyde Resin',
            'Application': 'Indoor Furniture, Wardrobes, Partitions, Dry Areas',
            'Certification': 'ISI 303',
            'Use': 'Interior Applications Only',
            'SurfaceQuality': 'Smooth Finish - Ready for Lamination',
            'Strength': 'Good for Interior Load-Bearing'
        },
        'Blockboard': {
            'CoreConstruction': 'Softwood Strips with Veneer Facing',
            'Weight': '15-25% lighter than equivalent plywood',
            'Application': 'Doors, Tables, Long Shelves, Partitions, Furniture',
            'ScrewHoldingStrength': 'Excellent in Face Direction',
            'Use': 'Interior Furniture and Paneling',
            'Strength': 'Good for Long Spans without Sagging',
            'Workability': 'Easy to Cut and Install'
        },
        'Fire Retardant': {
            'FireRating': 'Euro Class B/C - Flame Retardant',
            'Treatment': 'Chemical Impregnation with FR Solution',
            'SmokeEmission': 'Low Smoke and Toxic Gas Emission',
            'Application': 'Commercial Buildings, Schools, Hospitals, Public Spaces',
            'Certification': 'BS EN 636-2, CE Mark',
            'IgnitionDelay': 'Significantly Delayed Ignition Time',
            'Use': 'Structural Interior Applications',
            'Strength': 'Fire Resistance without Performance Compromise'
        },
        'Flexible Plywood': {
            'Flexibility': 'Bendable in One or Both Directions',
            'Application': 'Curved Furniture, Arches, Decorative Panels, Boat Interiors',
            'VeneerArrangement': 'Specially Oriented for Flexibility',
            'Use': 'Creative Interior Design and Custom Furniture',
            'WorkingRadius': 'Minimum bend radius based on thickness',
            'SurfaceQuality': 'Smooth Finish for Veneering/Lamination'
        },
        'Commercial Plywood': {
            'Grade': 'Commercial Grade',
            'Application': 'General Construction, Packaging, Temporary Structures',
            'Use': 'Non-structural Interior Applications',
            'Strength': 'Basic Structural Support',
            'CostEffectiveness': 'Budget-Friendly Option'
        },
        'General Plywood': {
            'Construction': 'Cross-laminated Hardwood Veneers',
            'Application': 'Furniture, Cabinetry, Paneling, General Carpentry',
            'Strength': 'Good All-Round Structural Performance',
            'Stability': 'Excellent Dimensional Stability',
            'SurfaceQuality': 'Smooth Finish - Paint/Laminate Ready',
            'Use': 'Interior and Semi-Exterior Applications'
        }
    }
    
    specs.update(category_specs.get(category, {}))
    return descriptions.get(category, descriptions['General Plywood']), specs

def main():
    # Fallback images by category
    fallback_images = {
        'Marine Plywood': 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&q=80',
        'BWP Grade Plywood': 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&q=80',
        'MR Grade Plywood': 'https://images.unsplash.com/photo-1594226801341-a89c36d071d7?w=800&q=80',
        'Blockboard': 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=800&q=80',
        'Fire Retardant': 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
        'Flexible Plywood': 'https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=800&q=80',
        'Commercial Plywood': 'https://images.unsplash.com/photo-1594226801341-a89c36d071d7?w=800&q=80',
        'General Plywood': 'https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800&q=80'
    }

    try:
        # Read Excel file
        print("Reading Excel file...")
        df = pd.read_excel('justdial (2).xlsx', sheet_name=0)
        print(f"Found {len(df)} products")
        
        # Generate JavaScript file
        print("Generating plywoodData.js...")
        
        with open('plywoodData.js', 'w', encoding='utf-8') as f:
            f.write("// plywoodData.js - Complete Product Catalog\n")
            f.write("// Auto-generated from JustDial product data\n")
            f.write(f"// Total products: {len(df)}\n\n")
            f.write("export const plywoodProducts = [\n")
            
            for idx, row in df.iterrows():
                # Extract data
                product_name = row['jdproduct__title']
                brand = row['jdproduct__bname'] if pd.notna(row['jdproduct__bname']) else 'Generic'
                rating = row['font14'] if pd.notna(row['font14']) else 0.0
                rating_count = row['font14 2'] if pd.notna(row['font14 2']) else '0 Ratings'
                
                # Extract thickness from product name
                thickness_match = re.search(r'\((\d+)\s*mm\)', product_name)
                thickness = thickness_match.group(1) + 'mm' if thickness_match else 'N/A'
                
                # Get category
                category = get_category(product_name)
                
                # Get image
                image = row['jdproduct__image src'] if pd.notna(row['jdproduct__image src']) else ''
                if not image or 'data:image/gif' in image:
                    image = fallback_images.get(category, fallback_images['General Plywood'])
                
                # Get description and specs
                description, specs = get_product_details(category, thickness, brand)
                
                # Escape strings properly for JavaScript
                name_safe = product_name.replace("'", "\\'").replace('"', '\\"')
                desc_safe = description.replace("'", "\\'").replace('"', '\\"')
                
                # Write product entry
                f.write("  {\n")
                f.write(f"    id: 'ply-{idx+1:04d}',\n")
                f.write(f"    name: '{name_safe}',\n")
                f.write(f"    brand: '{brand}',\n")
                f.write(f"    category: '{category}',\n")
                f.write(f"    thickness: '{thickness}',\n")
                f.write(f"    image: '{image}',\n")
                f.write(f"    rating: {float(rating) if pd.notna(rating) else 0.0},\n")
                f.write(f"    ratingCount: '{rating_count}',\n")
                f.write(f"    description: '{desc_safe}',\n")
                f.write("    specs: {\n")
                for key, value in specs.items():
                    value_safe = str(value).replace("'", "\\'").replace('"', '\\"')
                    f.write(f"      {key}: '{value_safe}',\n")
                f.write("    }\n")
                f.write("  }" + ("," if idx < len(df) - 1 else "") + "\n")
                
                # Progress indicator
                if (idx + 1) % 500 == 0:
                    print(f"  Processed {idx + 1}/{len(df)} products...")
            
            f.write("];\n\n")
            
            # Add helper functions
            f.write("""// Get unique brands
export const getUniqueBrands = () => {
  const brands = [...new Set(plywoodProducts.map(p => p.brand))];
  return brands.sort();
};

// Get unique categories
export const getUniqueCategories = () => {
  const categories = [...new Set(plywoodProducts.map(p => p.category))];
  return categories.sort();
};

// Get unique thicknesses
export const getUniqueThicknesses = () => {
  const thicknesses = [...new Set(plywoodProducts.map(p => p.thickness))];
  return thicknesses.filter(t => t !== 'N/A').sort((a, b) => {
    const numA = parseInt(a);
    const numB = parseInt(b);
    return numA - numB;
  });
};

// Filter products
export const filterProducts = (filters) => {
  return plywoodProducts.filter(product => {
    if (filters.brand && product.brand !== filters.brand) return false;
    if (filters.category && product.category !== filters.category) return false;
    if (filters.thickness && product.thickness !== filters.thickness) return false;
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      return product.name.toLowerCase().includes(searchLower) ||
             product.brand.toLowerCase().includes(searchLower) ||
             product.category.toLowerCase().includes(searchLower);
    }
    return true;
  });
};
""")
        
        print(f"\n✓ Successfully generated plywoodData.js with {len(df)} products!")
        
        # Statistics
        category_counts = df.apply(lambda x: get_category(x['jdproduct__title']), axis=1).value_counts()
        print("\nCategory Distribution:")
        for cat, count in category_counts.items():
            print(f"  {cat}: {count}")
        
    except FileNotFoundError:
        print("ERROR: justdial (2).xlsx not found in current directory")
        sys.exit(1)
    except Exception as e:
        print(f"ERROR: {e}")
        sys.exit(1)

if __name__ == "__main__":
    main()
