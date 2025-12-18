'use client';

import Link from 'next/link';
import { ArrowRight, ChevronRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
            {/* Background Blobs */}
            <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-primary-200/50 rounded-full blur-3xl opacity-60 animate-pulse"></div>
            <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl opacity-60"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full py-2 px-4 mb-8 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                            <span className="flex h-2 w-2 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                            </span>
                            <span className="text-sm font-medium text-slate-600">Available for new projects</span>
                            <ChevronRight size={14} className="text-slate-400" />
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight font-headings leading-tight mb-8">
                            Premium Glass Films <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                                For Home & Office
                            </span>
                        </h1>

                        <p className="mt-6 text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                            Transform your space with Rao Filmwala. We specialize in glass etching, sun control films, toughned glass, and custom signage solutions in Bilaspur.
                        </p>

                        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                href="/contact"
                                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-primary-600 rounded-full hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-500/30 ring-offset-2 focus:ring-2 focus:ring-primary-600"
                            >
                                Get Started
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/portfolio"
                                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-slate-700 transition-all duration-200 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:text-slate-900 hover:border-gray-300"
                            >
                                View Portfolio
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none"></div>
        </div>
    );
};

export default Hero;
