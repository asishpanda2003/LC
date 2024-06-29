import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [val, setVal] = useState({
    fullname: '',
    phone: '',
    email: '',
    msg: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const InputEvent = (event) => {
    const { name, value } = event.target;
    setVal((prevVal) => ({
      ...prevVal,
      [name]: value,
    }));
  };

  const formSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_o4hro2m', 'template_mkd5l1u', form.current, '6CSaAvNT7yCkknbrn')
      .then((result) => {
        alert(`Sucessfully Send 🎉🎉`)
        console.log(result.text);
        setSubmitted(true);
        setVal({
          fullname: '',
          phone: '',
          email: '',
          msg: '',
        });
      }, (error) => {
        console.error('Error:', error);
        alert('An error occurred while submitting the form. Please try again.');
      });
  };

  return (
    <div className="my-5">
      <h1 className="text-center text-3xl font-bold mb-5">Contact Us</h1>
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
            {submitted && (
              <div className="mb-4 text-green-500">
                Your message has been sent successfully!
              </div>
            )}
            <form
              ref={form}
              onSubmit={formSubmit}
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullname">
                  Full Name
                </label>
                <input
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="fullname"
                  name="fullname"
                  value={val.fullname}
                  onChange={InputEvent}
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="tel"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="phone"
                  name="phone"
                  value={val.phone}
                  onChange={InputEvent}
                  placeholder="Enter Your Mobile No"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  value={val.email}
                  onChange={InputEvent}
                  placeholder="Enter Your Email"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="msg">
                  Message
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="msg"
                  rows="5"
                  name="msg"
                  value={val.msg}
                  onChange={InputEvent}
                  placeholder="Enter Your Message"
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
