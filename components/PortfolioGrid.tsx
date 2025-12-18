'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PortfolioGridProps {
    images: string[];
}

const PortfolioGrid = ({ images }: PortfolioGridProps) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    if (images.length === 0) {
        return (
            <div className="text-center py-20 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="bg-gray-100 p-4 rounded-full inline-block mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </div>
                <p className="text-gray-900 font-medium text-lg">Coming Soon</p>
                <p className="text-gray-500 text-sm mt-1">Our latest projects are being curated.</p>
            </div>
        );
    }

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {images.map((src, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 cursor-pointer shadow-md hover:shadow-xl hover:shadow-primary-900/10 transition-all duration-300"
                        onClick={() => setSelectedImage(src)}
                    >
                        <Image
                            src={src}
                            alt={`Portfolio Item ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                            <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">Project Name</span>
                            <span className="text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">View Details</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/95 backdrop-blur-sm p-4"
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Portfolio Fullscreen"
                                fill
                                className="object-contain"
                            />
                            <button
                                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors focus:outline-none bg-black/20 hover:bg-black/40 rounded-full p-2"
                                onClick={() => setSelectedImage(null)}
                            >
                                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default PortfolioGrid;
