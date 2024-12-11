import React from 'react'
import '../styling/Contact.css';  // Importing the CSS file


function Contact() {
  return (
    <div>
      <section id="contact">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
    </div>
  )
}

export default Contact
