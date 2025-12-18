import type { Metadata } from 'next';
import PortfolioGrid from '@/components/PortfolioGrid';
import { getPortfolioImages } from '@/lib/portfolio';

export const metadata: Metadata = {
    title: 'Portfolio - BusinessName',
    description: 'View our latest work.',
};

export const dynamic = 'force-dynamic';

export default async function PortfolioPage() {
    const images = await getPortfolioImages();

    return (
        <div className="bg-slate-50 min-h-screen pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Our Work</h2>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight font-headings mb-6">
                        Featured Projects
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        A selection of our most impactful work across various industries.
                    </p>
                </div>

                <PortfolioGrid images={images} />
            </div>
        </div>
    );
}
