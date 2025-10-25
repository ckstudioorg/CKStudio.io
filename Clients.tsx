
import React from 'react';
import Section from './Section';

const otherClients = [
    "Palik Studios", "RR Creations", "Srinidhi Real Estate",
    "MBMR Infra", "CM Productions", "Sampathnandi Teamworks",
    "Kuviyam Mediaworks"
];

const Clients: React.FC = () => {
    return (
        <Section>
            <div className="text-center">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Our <span className="text-red-600">Clients</span></h2>
                <p className="mt-4 text-lg text-gray-400">We are proud to have collaborated with a diverse range of creative partners.</p>
            </div>
            <div className="mt-12 flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
                {otherClients.map((client, index) => (
                    <span key={index} className="text-xl text-gray-400 font-medium transition-colors hover:text-white">
                        {client}
                    </span>
                ))}
                <span className="text-xl text-gray-400 font-medium">and more...</span>
            </div>
             <div className="mt-20 text-center">
                <blockquote className="text-2xl italic font-medium text-gray-200 border-l-4 border-red-600 pl-6 max-w-4xl mx-auto">
                   "The best marketing doesn't feel like marketing"
                </blockquote>
            </div>
        </Section>
    );
};

export default Clients;
