import React from 'react';

export default function ProfileSection() {
    return (
        <section id="realtor-profile" className="container mx-auto py-16 px-4 flex flex-col md:flex-row items-center gap-10">
            <img
                src="/images/realtor.webp"
                alt="Realtor's Name"
                className="w-48 h-48 rounded-full object-cover shadow-lg"
            />
            <div className="max-w-xl">
                <h2 className="text-3xl font-bold mb-2">Meet Realtor</h2>
                <p className="text-lg text-gray-600 mb-4">
                    Pono is a trusted real estate professional with a passion for helping clients find the perfect home. With a keen eye for detail and deep market knowledge, he makes every transaction smooth and stress-free.
                </p>
                <a href="#contact" className="inline-block px-6 py-3 bg-orange-500 text-white rounded hover:bg-orange-600 transition">
                    Contact Pono
                </a>
            </div>
        </section>
    );
}
