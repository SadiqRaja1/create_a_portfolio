import React from 'react'

const Contact = () => {
    return (
        <section id="contact" className="flex flex-col items-center justify-center text-white mx-48 mt-10 pt-24">
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <h4 className='text-2xl mb-8'>I'd love to hear from you!</h4>
            <form className="w-full max-w-lg bg-[#1e1e1e] p-8 rounded-2xl shadow-lg space-y-6">

                {/* Full Name */}
                <div>
                    <label htmlFor="name" className="block text-lg font-semibold mb-2">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter your full name"
                        className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-lg font-semibold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email address"
                        className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="message" className="block text-lg font-semibold mb-2">
                        Message
                    </label>
                    <textarea
                        id="message"
                        rows="5"
                        placeholder="Write your message..."
                        className="w-full p-3 rounded-lg bg-[#2a2a2a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold rounded-lg transition"
                >
                    Send Message
                </button>
            </form>
        </section>
    )
}

export default Contact