import { useState } from "react";
import PageHeading from "../components/PageHeading.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

const emptyForm = { name: "", surname: "", email: "", subject: "", message: "" };

export default function Contact({ go }) {
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);

  // one handler for every input: uses the input's name attribute
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value }); // new copy, never mutate
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", form);
    setSent(true);
    setForm(emptyForm);
  };

  return (
    <>
      <PageHeading title="Contact Us" go={go}>Contact Us</PageHeading>

      <section className="section contact-page">
        <div className="container two-col">
          <div className="left-text">
            <SectionHeading small="Contact Us">Say Hello!</SectionHeading>
            <p>
              LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework.
              This template is provided by TemplateMo and it is suitable for your
              gaming shop ecommerce websites. Feel free to use this for any purpose.
              Thank you.
            </p>
            <ul className="contact-list">
              <li><h4>Address</h4><p>Sunny Isles Beach, FL 33160, United States</p></li>
              <li><h4>Phone</h4><p>+123 456 7890</p></li>
              <li><h4>Email</h4><p>hello@company.com</p></li>
            </ul>
          </div>

          <div className="right-content">
            <div className="map">
              <iframe
                title="map"
                src="https://www.google.com/maps?q=Sunny+Isles+Beach&output=embed"
                width="100%"
                height="325"
                loading="lazy"
              />
            </div>

            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="form-grid">
                <input name="name" placeholder="Your Name" required value={form.name} onChange={handleChange} />
                <input name="surname" placeholder="Your Surname" required value={form.surname} onChange={handleChange} />
                <input name="email" type="email" placeholder="Your Email" required value={form.email} onChange={handleChange} />
                <input name="subject" placeholder="Subject" value={form.subject} onChange={handleChange} />
              </div>
              <textarea name="message" placeholder="Your Message" value={form.message} onChange={handleChange} />
              <button type="submit" className="orange-button">Send Message Now</button>
              {sent && <p className="success">Thanks! Your message was sent.</p>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
