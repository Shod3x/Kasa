import React from 'react';
import "../App.css";
import Navbar from '../components/navbar/Navbar';
import Banner from '../components/banner/Banner';
import LogementList from '../components/logement-list/LogementList';
import Footer from '../components/footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <LogementList />
            <div className='FooterApp'>
                <Footer />
            </div>
        </div>
    );
};

export default Home;