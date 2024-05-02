import React from 'react';
import Navbar from '../components/navbar/Navbar';
import BannerAbout from '../components/banner/BannerAbout';
import Footer from '../components/footer/Footer';
import DropdownMenu from '../components/collapse/Collapse';
import "../styles/about.scss"

const About = () => {
    return (
        <div>
            <Navbar />
            <BannerAbout />
            <DropdownMenu />
            <Footer />
        </div>
    );
};

export default About;