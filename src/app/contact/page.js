'use client';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <div className="bg-black text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Get In Touch</h1>
                    <p className="text-gray-400 max-w-xl mx-auto text-lg">Have a question or just want to say hi? We'd love to hear from you.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-2xl font-bold uppercase tracking-tight mb-6">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-gray-100 rounded-full">
                                        <MapPin size={24} className="text-gray-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Headquarters</h3>
                                        <p className="text-gray-600 mt-1">123 Fashion Ave, Design District<br />New York, NY 10001</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-gray-100 rounded-full">
                                        <Mail size={24} className="text-gray-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Email Us</h3>
                                        <p className="text-gray-600 mt-1">hello@revalation.com<br />support@revalation.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-gray-100 rounded-full">
                                        <Phone size={24} className="text-gray-800" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">Call Us</h3>
                                        <p className="text-gray-600 mt-1">+1 (555) 123-4567<br />Mon-Fri, 9am - 6pm EST</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-2">Frequently Asked Questions</h3>
                            <p className="text-gray-600 text-sm mb-4">Check our FAQ section for quick answers to common questions about shipping, returns, and sizing.</p>
                            <button className="text-sm font-bold uppercase border-b border-black pb-0.5 hover:text-gray-600 hover:border-gray-600 transition-colors">
                                Visit FAQ Page
                            </button>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
                        <h2 className="text-2xl font-bold uppercase tracking-tight mb-6">Send us a message</h2>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <select
                                    id="subject"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                                >
                                    <option>General Inquiry</option>
                                    <option>Order Support</option>
                                    <option>Returns & Exchanges</option>
                                    <option>Wholesale</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all resize-none"
                                    placeholder="How can we help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-black text-white py-4 rounded-lg font-bold uppercase tracking-wide hover:bg-gray-800 transition-transform active:scale-95 shadow-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
