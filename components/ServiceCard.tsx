'use client';
import { motion } from 'framer-motion';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    index: number;
}

const ServiceCard = ({ title, description, icon, index }: ServiceCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300 hover:-translate-y-1"
        >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-primary-300 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-colors duration-300 [&>svg]:h-7 [&>svg]:w-7 [&>svg]:text-primary-600 [&>svg]:group-hover:text-white [&>svg]:transition-colors [&>svg]:duration-300">
                {icon}
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-3 font-headings group-hover:text-primary-700 transition-colors">
                {title}
            </h3>

            <p className="text-slate-600 leading-relaxed">
                {description}
            </p>
        </motion.div>
    );
};

export default ServiceCard;
