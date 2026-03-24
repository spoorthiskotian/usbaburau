// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { FiPhone, FiPrinter, FiMail, FiGlobe, FiMapPin, FiSend } from 'react-icons/fi';
// import { FaWhatsapp } from 'react-icons/fa';
// import AnimatedSection from '../components/AnimatedSection';
// import { IoMdPhonePortrait } from "react-icons/io";
// import './Contact.css';

// export default function Contact() {
//   const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
//   const [sent, setSent] = useState(false);

//   const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Build mailto link
//     const body = `Name: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
//     window.location.href = `mailto:spoorthisk24@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${body}`;
//     setSent(true);
//   };

//   // WhatsApp redirect — opens WhatsApp chat with business number
//   const whatsappClick = () => {
//     const phone = '+91 96861 41856'; // international format without +
//     const message = encodeURIComponent('Hello! I would like to enquire about your products.');
//     window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
//   };

//   return (
//     <main className="contact-page">
//       <section className="page-hero contact-hero">
//         <div className="page-hero-overlay" />
//         <AnimatedSection className="page-hero-content">
//           <span className="section-tag light">Reach Out</span>
//           <h1>Contact Us</h1>
//           <p>We'd love to hear from you. Visit us, call us, or send a message.</p>
//         </AnimatedSection>
//       </section>

//       {/* Quick Actions */}
//       <section className="quick-actions">
//         <AnimatedSection className="qa-inner">
//           <a href="tel:+91 96861 41856" className="qa-card">
//             <FiPhone size={28} color="var(--orange)" />
//             <div>
//               <span>Call Us</span>
//               <strong>+91 96861 41856</strong>
//             </div>
//           </a>
//           <a href="mailto:spoorthisk24@gmail.com" className="qa-card">
//             <FiMail size={28} color="var(--orange)" />
//             <div>
//               <span>Email Us</span>
//               <strong>Usbinfo@usbaburau.com</strong>
//             </div>
//           </a>
//           {/* WhatsApp Button */}
//           <button className="qa-card whatsapp-card" onClick={whatsappClick}>
//             <FaWhatsapp size={30} color="#25D366" />
//             <div>
//               <span>WhatsApp Us</span>
//               <strong>+91 96861 41856</strong>
//             </div>
//           </button>
//           <a href="https://www.usbaburau.com" target="_blank" rel="noreferrer" className="qa-card">
//             <FiGlobe size={28} color="var(--orange)" />
//             <div>
//               <span>Website</span>
//               <strong>www.usbaburau.com</strong>
//             </div>
//           </a>
//         </AnimatedSection>
//       </section>

//       {/* Form + Info */}
//       <section className="contact-main">
//         <AnimatedSection direction="left" className="contact-form-wrap">
//           <h2>Send an Enquiry</h2>
//           <p>Fill the form below and we'll get back to you shortly.</p>
//           {sent ? (
//             <motion.div className="success-msg" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
//               ✅ Your enquiry has been sent! We'll contact you soon.
//             </motion.div>
//           ) : (
//             <form className="contact-form" onSubmit={handleSubmit}>
//               <div className="form-row">
//                 <div className="form-group">
//                   <label>Your Name *</label>
//                   <input name="name" value={form.name} onChange={handle} required placeholder="name" />
//                 </div>
//                 <div className="form-group">
//                   <label>Email Address *</label>
//                   <input name="email" type="email" value={form.email} onChange={handle} required placeholder="eg@gmail.com" />
//                 </div>
//               </div>
//               <div className="form-row">
//                 <div className="form-group">
//                   <label>Phone Number</label>
//                   <input name="phone" value={form.phone} onChange={handle} placeholder="+91 xxxxx xxxxx" />
//                 </div>
//                 <div className="form-group">
//                   <label>Subject *</label>
//                   <input name="subject" value={form.subject} onChange={handle} required placeholder="Product Enquiry" />
//                 </div>
//               </div>
//               <div className="form-group">
//                 <label>Message *</label>
//                 <textarea name="message" value={form.message} onChange={handle} required rows={5} placeholder="Tell us what you need..." />
//               </div>
//               <button type="submit" className="submit-btn">
//                 <FiSend size={16} /> Send Enquiry
//               </button>
//             </form>
//           )}
//         </AnimatedSection>

//         <AnimatedSection direction="right" delay={0.2} className="contact-info-wrap">
//           {/* <div className="info-card">
//             <h3>Head Office</h3>
//             <p><FiMapPin size={14} style={{ color: 'var(--orange)', marginRight: 6 }} />
//               #13/7/858/1, Felix Pai Bazaar, Next to Janatha Bazaar,<br />
//               G.H.S Road, Mangalore – 575 001
//             </p>
//             <p><FiPhone size={14} style={{ color: 'var(--orange)', marginRight: 6 }} />
//               +91 824 2420949, 2424249
//             </p>
//             <p><FiPrinter size={14} style={{ color: 'var(--orange)', marginRight: 6 }} />
//             +91 824 4279949
//             </p>

//             <p> <IoMdPhonePortrait size={14} style={{ color: 'var(--orange)', marginRight: 6 }}/>Mobile: +91 9448144949</p>
//           </div>

//           <div className="info-card">
//             <h3>Branches</h3>
//             <p><strong>Udupi | Manipal</strong></p>
//             <p><FiPhone size={14} style={{ color: 'var(--orange)', marginRight: 6 }} />
//               0820 2529649
//             </p>
//             <p><IoMdPhonePortrait size={14} style={{ color: 'var(--orange)', marginRight: 6 }}/>Mobile: +91 99643 80653</p>
//           </div> */}

//           {/* Map Embed */}
//           <div className="map-wrap" style={{marginTop:'50px'}}>
//             <iframe
//               title="U.S. Babu Rau Location"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.7647954570057!2d74.83761207936803!3d12.868011202198254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba350a13025ca43%3A0x822364f6219b6e05!2sU%20S%20Babu%20Rau!5e0!3m2!1sen!2sin!4v1773834322451!5m2!1sen!2sin"
//               width="100%"
//               height="400"
//               style={{ border: 0, borderRadius: '14px' }}
//               allowFullScreen
//               loading="lazy"

//             />
//           </div>
//         </AnimatedSection>
//       </section>
//     </main>
//   );
// }
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiPhone, FiPrinter, FiMail, FiGlobe, FiMapPin, FiSend } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import AnimatedSection from '../components/AnimatedSection';
import { IoMdPhonePortrait } from "react-icons/io";
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  // ✅ FIX 1: encodeURIComponent on body, use \n instead of %0A
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nMessage: ${form.message}`
    );
    const mailtoLink = `mailto:spoorthisk24@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${body}`;
    window.open(mailtoLink, '_blank');   // ← changed from window.location.href
    setTimeout(() => setSent(true), 500);
  };


  // ✅ FIX 3: phone number with no spaces or + sign for wa.me
  const whatsappClick = () => {
    const phone = '919686141856';
    const message = encodeURIComponent('Hello! I would like to enquire about your products.');
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  return (
    <main className="contact-page">

      {/* Hero */}
      <section className="page-hero contact-hero">
        <div className="page-hero-overlay" />
        <AnimatedSection className="page-hero-content">
          <span className="section-tag light">Reach Out</span>
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Visit us, call us, or send a message.</p>
        </AnimatedSection>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <AnimatedSection className="qa-inner">

          <a href="tel:+919686141856" className="qa-card">
            <FiPhone size={28} color="var(--orange)" />
            <div>
              <span>Call Us</span>
              <strong>+91 96861 41856</strong>
            </div>
          </a>

          <a href="mailto:spoorthisk24@gmail.com" className="qa-card">
            <FiMail size={28} color="var(--orange)" />
            <div>
              <span>Email Us</span>
              {/* ✅ FIX 4: display email matches mailto target */}
              <strong>spoorthisk24@gmail.com</strong>
            </div>
          </a>

          <button className="qa-card whatsapp-card" onClick={whatsappClick}>
            <FaWhatsapp size={30} color="#25D366" />
            <div>
              <span>WhatsApp Us</span>
              <strong>+91 96861 41856</strong>
            </div>
          </button>

          <a href="https://www.usbaburau.com" target="_blank" rel="noreferrer" className="qa-card">
            <FiGlobe size={28} color="var(--orange)" />
            <div>
              <span>Website</span>
              <strong>www.usbaburau.com</strong>
            </div>
          </a>

        </AnimatedSection>
      </section>

      {/* Form + Info */}
      <section className="contact-main">

        <AnimatedSection direction="left" className="contact-form-wrap">
          <h2>Send an Enquiry</h2>
          <p>Fill the form below and we'll get back to you shortly.</p>

          {sent ? (
            <motion.div
              className="success-msg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              ✅ Your enquiry has been sent! We'll contact you soon.
            </motion.div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>

              <div className="form-row">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handle}
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handle}
                    required
                    placeholder="eg@gmail.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handle}
                    placeholder="+91 xxxxx xxxxx"
                  />
                </div>
                <div className="form-group">
                  <label>Subject *</label>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handle}
                    required
                    placeholder="Product Enquiry"
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handle}
                  required
                  rows={5}
                  placeholder="Tell us what you need..."
                />
              </div>

              <button type="submit" className="submit-btn">
                <FiSend size={16} /> Send Enquiry
              </button>

            </form>
          )}
        </AnimatedSection>

        <AnimatedSection direction="right" delay={0.2} className="contact-info-wrap">

          <div className="info-card">
            <h3>Head Office</h3>
            <p>
              <FiMapPin size={14} style={{ color: 'var(--orange)', marginRight: 6 }} />
              #13/7/858/1, Felix Pai Bazaar, Next to Janatha Bazaar,<br />
              G.H.S Road, Mangalore – 575 001
            </p>
            <p>
              <FiPhone size={14} style={{ color: 'var(--orange)', marginRight: 6 }} />
              +91 824 2420949, 2424249
            </p>
            <p>
              <FiPrinter size={14} style={{ color: 'var(--orange)', marginRight: 6 }} />
              +91 824 4279949
            </p>
            <p>
              <IoMdPhonePortrait size={14} style={{ color: 'var(--orange)', marginRight: 6 }} />
              Mobile: +91 9448144949
            </p>
          </div>

          <div className="info-card">
            <h3>Branches</h3>
            <p><strong>Udupi | Manipal</strong></p>
            <p>
              <FiPhone size={14} style={{ color: 'var(--orange)', marginRight: 6 }} />
              0820 2529649
            </p>
            <p>
              <IoMdPhonePortrait size={14} style={{ color: 'var(--orange)', marginRight: 6 }} />
              Mobile: +91 99643 80653
            </p>
          </div>

          {/* Map Embed */}
          <div className="map-wrap" style={{ marginTop: '30px' }}>
            <iframe
              title="U.S. Babu Rau Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3270.7647954570057!2d74.83761207936803!3d12.868011202198254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba350a13025ca43%3A0x822364f6219b6e05!2sU%20S%20Babu%20Rau!5e0!3m2!1sen!2sin!4v1773834322451!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '14px' }}
              allowFullScreen
              loading="lazy"
            />
          </div>

        </AnimatedSection>
      </section>

    </main>
  );
}
