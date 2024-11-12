import React, { useState } from "react";
import FormImage from "./FormImage.png";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could send formData to a server or API
    console.log(`Form submitted with data:\n${JSON.stringify(formData, null, 2)}`);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      country: "",
      message: "",
    });
  };

  const handleCancel = () => {
    // Reset form data
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      country: "",
      message: "",
    });
  };

  return (
    <div className="flex justify-evenly items-center h-screen bg-blue-50">
      <div>
        <img
          className="w-[400px] h-[400px] top-[150px] left-[100px] rounded-full "
          alt="Form Image"
          src={FormImage}
        />
      </div>
      <div
        className="w-full max-w-md p-8">
        <h2 className="text-blue-800 underline text-2xl font-bold mb-10">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-blue-800">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2 border-blue-800 bg-blue-50"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-blue-800">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2 border-blue-800 bg-blue-50"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-blue-800">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2 border-blue-800 bg-blue-50"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-blue-800">
              Country
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2 border-blue-800 bg-blue-50"
            >
              <option value="">Select your country</option>
              <option>Country 1</option>
              <option>Country 2</option>
              <option>Country 3</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-blue-800 ">
              Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border-b-2 border-blue-800 bg-blue-50"
              rows="1"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="px-8 py-2 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-700 focus:outline-none"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="px-8 py-2 bg-blue-500 text-white font-semibold rounded-xl hover:bg-gray-500 focus:outline-none"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
