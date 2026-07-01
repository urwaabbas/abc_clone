const ContactForm = () => {
  return (
    
    <div id="contact" className="contact-section">
      <div className="contact-text">
        <h2>Have some questions</h2>
        <p>MESSAGE US</p>
      </div>
      <div className="contact-form">
        <form>
          <input type="text" name="name" placeholder="Name*" required />
          <input type="email" name="email" placeholder="Email*" required />
          <textarea name="message" placeholder="Message*" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
