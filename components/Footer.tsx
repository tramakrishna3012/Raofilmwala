import Link from 'next/link';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Linkedin, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand & Bio */}
                    <div className="space-y-6">
                        <div className="text-white">
                            <Logo className="text-white [&>span]:text-white" />
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
                            Experts in glass film installation, etching, and custom signage. Enhancing privacy and aesthetics for homes and businesses.
                        </p>
                        <div className="flex space-x-5 pt-2">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <Link key={i} href="#" className="text-slate-500 hover:text-white transition-colors duration-300 transform hover:scale-110">
                                    <Icon size={20} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 font-headings">Company</h4>
                        <ul className="space-y-4 text-sm text-slate-400">
                            {['Home', 'About Us', 'Services', 'Portfolio', 'Careers'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase().replace(' ', '')}`} className="hover:text-primary-400 transition-colors flex items-center group">
                                        <ArrowRight size={14} className="mr-2 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 font-headings">Get in Touch</h4>
                        <ul className="space-y-5 text-sm text-slate-400">
                            <li className="flex items-start group">
                                <MapPin size={18} className="mr-3 mt-0.5 text-primary-500 group-hover:text-primary-400 transition-colors" />
                                <span>Tikrapara, Bilaspur<br />Chhattisgarh 495001</span>
                            </li>
                            <li className="flex items-center group">
                                <Phone size={18} className="mr-3 text-primary-500 group-hover:text-primary-400 transition-colors" />
                                <span>+91 86022 73106</span>
                            </li>
                            <li className="flex items-center group">
                                <Mail size={18} className="mr-3 text-primary-500 group-hover:text-primary-400 transition-colors" />
                                <span>t.rrao05@gmail.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6 font-headings">Newsletter</h4>
                        <p className="text-slate-400 text-sm mb-4">Subscribe to verify our latest news and updates.</p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-primary-900 focus:border-primary-500 transition-all"
                            />
                            <button className="w-full bg-slate-800 hover:bg-primary-600 text-white font-medium py-3 rounded-lg transition-colors border border-slate-700 hover:border-primary-500">
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Rao Filmwala. All rights reserved.</p>
                    <div className="flex space-x-6">
                        <Link href="#" className="hover:text-slate-300">Privacy Policy</Link>
                        <Link href="#" className="hover:text-slate-300">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
