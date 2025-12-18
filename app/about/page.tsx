import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us - BusinessName',
    description: 'Learn more about our team and mission.',
};

export default function AboutPage() {
    return (
        <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
            <div className="relative max-w-xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">About Us</h2>
                    <p className="mt-4 text-lg text-gray-500">
                        Dedicated to excellence in every project we undertake.
                    </p>
                </div>

                <div className="mt-12">
                    <div className="prose prose-indigo mx-auto text-gray-500">
                        <p>
                            Established with a vision to transform the industry standard, BusinessName has grown into a leading provider of professional services. Our journey is defined by a relentless pursuit of quality and customer satisfaction.
                        </p>
                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Our Mission</h3>
                        <p>
                            To empower businesses with innovative solutions that drive growth and success. We believe in building long-lasting partnerships based on trust and integrity.
                        </p>
                        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Our Vision</h3>
                        <p>
                            To be the most trusted partner for businesses looking to scale and innovate in a rapidly changing world.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
