import React from 'react';

const ContactUs = () => {
    return (
        <section className="bg-white">
            <div className="container px-6 py-12 mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">
                        Contact Us
                    </h2>
                    <p className="max-w-lg mx-auto mt-4 text-gray-500">
                        Have any questions? We'd love to hear from you.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
                    {/* Contact Form */}
                    <div>
                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm text-gray-800"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-red-500 rounded-md focus:border-red-600 focus:outline-none focus:ring"
                                    placeholder=" Your name"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm text-gray-800"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-red-500 rounded-md focus:border-red-600 focus:outline-none focus:ring"
                                    placeholder="Type your email address..."
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm text-gray-800"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-red-500 rounded-md focus:border-red-600 focus:outline-none "
                                    placeholder="Type your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div >
                        <h3 className="text-lg font-medium text-gray-800">
                            Contact Information
                        </h3>
                        <p className="mt-3 text-gray-500">
                            Feel free to reach out to us through any of the following means:
                        </p>

                        <ul className="mt-2 space-y-4  p-12">
                            <li className="flex items-center justify-center">
                                <span className="inline-block text-red-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                    </svg>
                                </span>
                                <span className="ml-3 text-gray-700">
                                    +1 (555) 123-4567
                                </span>
                            </li>
                            <li className="flex items-center justify-center">
                                <span className="inline-block text-red-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
                                </span>
                                <span className="ml-3 text-gray-700">
                                    info@blooddonation.com
                                </span>
                            </li>
                            <li className="flex items-center justify-center">
                                <span className="inline-block text-red-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                    </svg>
                                </span>
                                <span className="ml-3 text-gray-700">
                                    1234 Main Street, Chottogram, Bangladesh
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
