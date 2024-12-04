// src/app/component/contact.tsx
'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const serviceID = 'service_6y685fl';
    const templateID = 'template_zidxxx3';
    const userID = 'oL_ob_Zzb6cvpfTJ8';

    emailjs.send(serviceID, templateID, formData, userID)
      .then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
          setIsLoading(false);
        },
        (err) => {
          console.error('FAILED...', err);
          setStatus('Failed to send message. Please try again.');
          setIsLoading(false);
        }
      );
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] p-6 flex items-center justify-center">
      {/* Form Card */}
      <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center text-[#1A202C] mb-6">Get in touch</h2>
        <p className="text-center text-[#4A5568] mb-8">Have an exciting project in mind, an internship opportunity, or just want to say hi? I'd love to hear from you! Drop me a message here!</p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid gap-6">
          {/* Name and Email in a row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-transparent border-b-2 border-[#18191a] focus:outline-none text-[#2D3748] text-sm"
                placeholder="Your Name"
                required
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-transparent border-b-2 border-[#18191a] focus:outline-none text-[#2D3748] text-sm"
                placeholder="Your Email"
                required
              />
            </div>
          </div>

          {/* Message Input */}
          <div className="relative">
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 bg-transparent border-b-2 border-[#18191a] focus:outline-none text-[#2D3748] text-sm"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-[#18191a] text-white text-sm font-bold rounded-lg shadow hover:bg-[#2b6cb0] focus:outline-none transition-colors duration-300"
          >
            {isLoading ? 'Sending...' : 'Submit'}
          </button>

          {/* Status Message */}
          {status && (
            <p
              className={`text-center mt-4 text-sm ${
                status.includes('successfully') ? 'text-green-500' : 'text-red-500'
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
