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
            <div className="martop">
                <DropdownMenu title="Faibilité" defaultContent="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
                <DropdownMenu title="Respect" defaultContent="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <DropdownMenu title="Service" defaultContent="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <DropdownMenu title="Sécurité" defaultContent="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </div>

            <Footer />
        </div>
    );
};

export default About;