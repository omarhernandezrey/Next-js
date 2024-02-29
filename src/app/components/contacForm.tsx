import React from "react";
const ContactForm = () => {
  return (
    <form className='font-bold'>
      <div className='mb-1'>
        <input  
          type="text"
          placeholder="Your message"
          name="message"
          className="w-full"
        />
      </div>

      <div className='mb-1'>
        <input  
          type="text"
          placeholder="Your email"
          name="email"
          className="w-full"
        />
      </div>

      <div className='mb-1'>
        <input  
          type="text"
          placeholder="Your message"
          name="message"
          className="w-full"
        />
      </div>
      <button>Send message</button>
    </form>
  );
}

export default ContactForm;