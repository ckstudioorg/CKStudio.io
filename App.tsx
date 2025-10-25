
import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import VisionMission from './components/VisionMission';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('home');
    const sectionRefs = {
        home: useRef<HTMLDivElement>(null),
        about: useRef<HTMLDivElement>(null),
        services: useRef<HTMLDivElement>(null),
        portfolio: useRef<HTMLDivElement>(null),
        contact: useRef<HTMLDivElement>(null),
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { rootMargin: '-30% 0px -70% 0px' }
        );

        Object.values(sectionRefs).forEach((ref) => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            Object.values(sectionRefs).forEach((ref) => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div className="bg-black text-white selection:bg-red-700 selection:text-white">
            <Header activeSection={activeSection} />
            <main>
                <div id="home" ref={sectionRefs.home}><Hero /></div>
                <div id="about" ref={sectionRefs.about}><About /></div>
                <VisionMission />
                <div id="services" ref={sectionRefs.services}><Services /></div>
                <WhyUs />
                <div id="portfolio" ref={sectionRefs.portfolio}><Portfolio /></div>
                <Clients />
                <div id="contact" ref={sectionRefs.contact}><Contact /></div>
            </main>
            <Footer />
        </div>
    );
};

export default App;
