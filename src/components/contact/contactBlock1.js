'use client'
import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactBlock1 = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    budget: '',
    service: '',
    hearAbout: '',
    message: '',
    captcha: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const offices = [
    {
      country: 'India - Kolkata',
      flag: '🇮🇳',
      address: 'BN 4, Webol IT Park, Tower - I, Module 305, Salt lake city Sector V, Kolkata 700091, WB',
      phone: '+91 8274010916',
      email: 'info@idiosystech.com'
    },
    {
      country: 'India - Bangalore',
      flag: '🇮🇳',
      address: '3rd Floor, Plot. No # 128/p2, Epip Industrial Area Whitefield, Sonnenahalli Village, Bangalore 560066',
      phone: '+91 8274010916',
      email: 'info@idiosystech.com'
    }, 
  ];

  return (
    <div className="py-10 bg-gradient-to-br from-emerald-50/60 to-teal-50/80 p-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-emerald-600 font-medium mb-2">Contact Us</h2>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch with Us</h1>
          <p className="text-gray-600 max-w-4xl mx-auto">
            Since 2015, Idiosys Technologies has been helping over 150 clients to grow their businesses with web development and digital branding. We have a team of more than 50 technical experts who deliver quality and innovative solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-md border-gray-200 bg-transparent focus:border-emerald-500 focus:outline-none transition-colors placeholder-gray-500"
                  />
                </div>

                {/* Phone */}
                <div className="flex">
                  <div className="flex items-center px-3 border rounded-md border-gray-200">
                    <span className="text-orange-500 mr-2">🇮🇳</span>
                    <span className="text-gray-600">+91</span>
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="flex-1 px-4 py-3 border rounded-md border-gray-200 bg-transparent focus:border-emerald-500 focus:outline-none transition-colors placeholder-gray-500"
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-md border-gray-200 bg-transparent focus:border-emerald-500 focus:outline-none transition-colors placeholder-gray-500"
                  />
                </div>

                {/* Budget */}
                <div>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-md border-gray-200 bg-transparent focus:border-emerald-500 focus:outline-none transition-colors text-gray-500"
                  >
                    <option value="">Tell us about your budget</option>
                    <option value="under-10k">Under $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="over-50k">Over $50,000</option>
                  </select>
                </div>

                {/* Service */}
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-md border-gray-200 bg-transparent focus:border-emerald-500 focus:outline-none transition-colors text-gray-500"
                  >
                    <option value="">Select Services</option>
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App Development</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="branding">Branding & Design</option>
                  </select>
                </div>

                {/* How did you hear */}
                <div>
                  <select
                    name="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border rounded-md border-gray-200 bg-transparent focus:border-emerald-500 focus:outline-none transition-colors text-gray-500"
                  >
                    <option value="">How did you hear about us?</option>
                    <option value="google">Google Search</option>
                    <option value="social-media">Social Media</option>
                    <option value="referral">Referral</option>
                    <option value="advertisement">Advertisement</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mt-6">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border rounded-md border-gray-200 bg-transparent focus:border-emerald-500 focus:outline-none transition-colors placeholder-gray-500 resize-none"
                ></textarea>
              </div>

              {/* Captcha */}
              <div className="mt-6 flex items-center space-x-4">
                <div className="bg-gray-100 px-4 py-3 rounded-lg">
                  <span className="text-lg font-mono">2 + 2 = ?</span>
                </div>
                <input
                  type="text"
                  name="captcha"
                  placeholder="Answer"
                  value={formData.captcha}
                  onChange={handleInputChange}
                  className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Submit Button */}
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200"
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Office Locations */}
          <div className="space-y-6">
            {offices.map((office, index) => (
              <div key={index} className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-3">
                  <span className="text-2xl mr-3">{office.flag}</span>
                  <h3 className="font-semibold text-gray-800">{office.country}</h3>
                </div>
                
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 mt-0.5 mr-2 text-gray-400 flex-shrink-0" />
                    <p>{office.address}</p>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-2 text-gray-400" />
                    <a href={`tel:${office.phone}`} className="hover:text-emerald-600 transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-2 text-gray-400" />
                    <a href={`mailto:${office.email}`} className="hover:text-emerald-600 transition-colors">
                      {office.email}
                    </a>
                  </div>
                  
                  <button className="flex items-center text-gray-500 hover:text-emerald-600 transition-colors mt-2">
                    <MapPin className="w-4 h-4 mr-1" />
                    Get Direction
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBlock1;