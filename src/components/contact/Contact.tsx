import React from 'react'

function Contact() {
  return (
    <div className='bg-white'>
    <div className='w-[50%] m-auto mt-20 text-center pt-5'>
        <h2 className='text-4xl font-semibold py-5 font-serif'>Let's Talk</h2>
        <p className='text-xl font-serif mb-5'>Choose Voxco for reliable, flexible and 24x7 support , where expertise meets requirements, transforming your boldest visions into groundbreaking reality.</p>

         </div>

          <div className="mt-5 flex flex-col items-center justify-center p-10 ">

          <div className="bg-gray-50 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-700 text-white p-2 rounded-md hover:bg-orange-600 transition duration-200 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact