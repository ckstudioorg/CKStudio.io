
import React from 'react';
import Section from './Section';

const WhyUs: React.FC = () => {
    const strengths = [
        "End-to-end Expertise", "Attention to detail",
        "Cutting edge technology", "Proven track record",
        "Skilled & creative team", "Collaborative approach",
        "Customized solutions", "Competitive pricing",
        "Fast turnaround times", "Global delivery"
    ];

    return (
        <Section>
             <div className="text-center mb-16">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Why <span className="text-red-600">CK Studio?</span></h2>
                 <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">Your vision deserves more than just technical execution—it deserves artistry, passion, and precision. We craft cinematic masterpieces that leave a lasting impact.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                 <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                     {strengths.map((strength, index) => (
                         <div key={index} className="flex items-center">
                             <svg className="w-6 h-6 mr-3 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                             <span className="text-lg text-gray-300">{strength}</span>
                         </div>
                     ))}
                 </div>
                 <div className="flex flex-col items-center justify-center space-y-8">
                    <div className="relative w-64 h-64">
                         <svg className="w-full h-full" viewBox="0 0 100 100">
                             <circle className="text-neutral-800" strokeWidth="10" stroke="currentColor" fill="transparent" r="45" cx="50" cy="50" />
                             <circle 
                                 className="text-red-600"
                                 strokeWidth="10"
                                 strokeDasharray="282.74"
                                 strokeDashoffset="56.54"
                                 strokeLinecap="round"
                                 stroke="currentColor" 
                                 fill="transparent" 
                                 r="45" 
                                 cx="50" 
                                 cy="50"
                                 transform="rotate(-90 50 50)"
                             />
                         </svg>
                         <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <div className="text-4xl font-bold">100%</div>
                            <div className="text-sm text-gray-400">Commitment</div>
                         </div>
                    </div>
                     <div className="text-center">
                         <p className="text-xl font-semibold"><span className="text-red-600">80%</span> Dedicated Creative & Hardworking Team</p>
                         <p className="text-xl font-semibold"><span className="text-red-600">20%</span> CK's Magic at Work</p>
                     </div>
                 </div>
            </div>
        </Section>
    );
};

export default WhyUs;
