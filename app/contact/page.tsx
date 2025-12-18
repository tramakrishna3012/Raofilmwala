import type { Metadata } from 'next';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Contact Us - BusinessName',
    description: 'Get in touch with us.',
};

export default function ContactPage() {
    return (
        <div className="bg-slate-50 min-h-screen pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Get In Touch</h2>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight font-headings mb-6">
                            Let's Talk About Your Project
                        </h1>
                        <p className="text-lg text-slate-600 mb-12 leading-relaxed">
                            We're here to help and answer any question you might have. We look forward to hearing from you.
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: Phone, title: 'Phone', content: '+91 86022 73106', sub: 'Mon-Sat 9am-7pm' },
                                { icon: Mail, title: 'Email', content: 't.rrao05@gmail.com', sub: 'Get a quote anytime' },
                                { icon: MapPin, title: 'Workshop', content: 'Tikrapara, Bilaspur\nChhattisgarh 495001', sub: null }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-primary-100 text-primary-600 shadow-sm">
                                            <item.icon size={24} />
                                        </div>
                                    </div>
                                    <div className="ml-6">
                                        <h3 className="text-lg font-bold text-slate-900 font-headings">{item.title}</h3>
                                        <p className="mt-1 text-slate-600 whitespace-pre-line">{item.content}</p>
                                        {item.sub && <p className="mt-1 text-xs text-slate-400 uppercase tracking-wider font-semibold">{item.sub}</p>}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-10 border border-slate-100">
                        <h3 className="text-2xl font-bold text-slate-900 mb-8 font-headings">Send us a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white" placeholder="john@example.com" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                                <select id="subject" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white text-slate-600">
                                    <option>General Inquiry</option>
                                    <option>Project Proposal</option>
                                    <option>Support</option>
                                    <option>Careers</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white" placeholder="Tell us about your project..."></textarea>
                            </div>

                            <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-4 border border-transparent rounded-xl shadow-lg shadow-primary-500/30 text-base font-semibold text-white bg-primary-600 hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all transform hover:-translate-y-0.5">
                                Send Message
                                <Send size={18} className="ml-2" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
}
