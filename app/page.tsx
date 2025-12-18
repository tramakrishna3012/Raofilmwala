import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import PortfolioGrid from '@/components/PortfolioGrid';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Briefcase, BarChart, Settings, Layers, Shield, Lightbulb } from 'lucide-react';
import { getPortfolioImages } from '@/lib/portfolio';

// Force dynamic for portfolio images check
export const dynamic = 'force-dynamic';

export default async function Home() {
  const images = await getPortfolioImages();
  // Show only first 3 images on home page
  const featuredImages = images.slice(0, 3);

  const featuredServices = [
    {
      title: 'Glass Films',
      description: 'Premium privacy and decorative films for your windows and partitions.',
      Icon: Layers,
    },
    {
      title: 'Tafan Glass',
      description: 'Toughned glass installation for maximum safety and durability.',
      Icon: Shield,
    },
    {
      title: 'Signage Works',
      description: 'Custom light boards and branding solutions for your business.',
      Icon: Lightbulb,
    },
  ];

  return (
    <>
      <Hero />

      {/* About Section Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="relative bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-xl">
                <div className="space-y-6">
                  {['Quality Driven', 'Customer Focused', 'Innovative Solutions'].map((feature, i) => (
                    <div key={feature} className="flex items-center space-x-4">
                      <div className="flex-shrink-0 p-2 bg-primary-100 rounded-lg text-primary-600">
                        <CheckCircle size={20} />
                      </div>
                      <span className="text-lg font-bold text-slate-800">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">Who We Are</h2>
              <h3 className="text-4xl font-bold text-slate-900 font-headings mb-6">Building the Future Together</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                We are a dedicated team of professionals committed to delivering outstanding results for our clients. By combining top-tier talent with cutting-edge technology, we help businesses achieve their full potential.
              </p>
              <Link href="/about" className="text-primary-600 font-bold hover:text-primary-500 inline-flex items-center group">
                Learn more about us
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Expertise</h2>
            <h3 className="text-4xl font-bold text-slate-900 font-headings">Services We Provide</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={<service.Icon />}
                index={index}
              />
            ))}
          </div>

          <div className="text-center">
            <Link href="/services" className="inline-block border border-slate-300 px-8 py-3 rounded-full text-slate-700 font-semibold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-2">Our Work</h2>
              <h3 className="text-4xl font-bold text-slate-900 font-headings">Latest Projects</h3>
            </div>
            <Link href="/portfolio" className="hidden md:inline-flex items-center text-slate-600 font-medium hover:text-primary-600 transition-colors">
              View Full Portfolio <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>

          <PortfolioGrid images={featuredImages} />

          <div className="mt-12 text-center md:hidden">
            <Link href="/portfolio" className="inline-block border border-slate-300 px-8 py-3 rounded-full text-slate-700 font-semibold hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
