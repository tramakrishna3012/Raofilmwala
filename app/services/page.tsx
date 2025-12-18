import type { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard';
import { Layers, Shield, Lightbulb, PenTool, Maximize, Palette } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Our Services - Rao Filmwala',
    description: 'Explore our premium glass film, etching, and signage services.',
};

export default function ServicesPage() {
    const services = [
        {
            title: 'Glass Film Works',
            description: 'High-quality decorative, matte, and sun control films for privacy and aesthetics in homes and offices.',
            Icon: Layers,
        },
        {
            title: 'Glass Etching',
            description: 'Custom glass etching and frosting services to create elegant patterns and branding on glass surfaces.',
            Icon: PenTool,
        },
        {
            title: 'Tafan Glass Installation',
            description: 'Professional installation of toughened (Tafan) glass for durability and safety in commercial and residential projects.',
            Icon: Maximize,
        },
        {
            title: 'Light Boards & Signage',
            description: 'Eye-catching light billboards and LED signage to boost your business visibility and brand presence.',
            Icon: Lightbulb,
        },
        {
            title: 'Sun Control Films',
            description: 'Reduce heat and glare while protecting interiors from UV rays with our premium sun control film solutions.',
            Icon: Shield,
        },
        {
            title: 'Custom Design',
            description: 'Tailored design solutions for glass partitions, windows, and doors to match your interior theme.',
            Icon: Palette,
        },
    ];

    return (
        <div className="bg-slate-50 min-h-screen py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Expertise</h2>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight font-headings mb-6">
                        Premium Glass Solutions
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed">
                        From privacy films to custom etching and toughned glass, we enhance the beauty and functionality of your space.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            icon={<service.Icon />}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
