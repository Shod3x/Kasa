import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to access route parameters
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import StarRating from '../stars/StarsRating'
import "./LogementDetail.scss";
import { getLogementById } from '../../logement.service';
import "../collapse/Collapse.scss"
import Carousel from '../carousel/Carousel';


function LogementDetail() {
    const { id } = useParams();
    const [logement, setLogement] = useState(null);

    useEffect(() => {
        const fetchLogement = async () => {
            try {
                const logementData = getLogementById(id);
                setLogement(logementData);
            } catch (error) {
                console.error("Error fetching logement:", error);
            }
        };

        fetchLogement();
    }, [id]);

    const flecheUp = <img className='up' src="../fleche-vers-le-bas.png" alt="" />
    const flecheDown = <img src="../fleche-vers-le-bas.png" alt="" />
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            setSelected(null);
        } else {
            setSelected(i);
        }
    };

    return (
        <div>
            <Navbar />
            <div>
                {logement ? (
                    <div>
                        <div>
                            <Carousel logement={logement} />
                            <div className='spaceBet'>
                                <h4 className='titleSize'>{logement.title}</h4>
                                <div className='mobileNone'>
                                    <div className='hostname'>{logement.host.name}</div>
                                    <img className='hostPic' src={logement.host.picture} alt="" />
                                </div>
                            </div>
                            <p className='Ville'>{logement.location}</p>
                            <div className='spaceBet'>
                                <div className='categories'>
                                    {logement.tags.map((tags, index) => (
                                        <div key={index}>
                                            {tags}
                                        </div>
                                    ))}
                                </div>
                                <div className='stars mobileNone'><StarRating rating={logement.rating} /></div>
                            </div>
                            <div className='col'>
                                <div className='rating'>
                                    <div className='stars desktopNone'><StarRating rating={logement.rating} /></div>
                                    <div className='desktopNone'>
                                        <div className='hostname'>{logement.host.name}</div>
                                        <img className='hostPic' src={logement.host.picture} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='collapseDetail' className='aboutDivDetail'>
                            <div className='buttonAboutDetail'>
                                <div className='buttonUniDetail'>
                                    <div className='titleDetail itemDetail' onClick={() => toggle(1)}>
                                        <p>Description</p>
                                        <span>{selected === 1 ? flecheDown : flecheUp}</span>
                                    </div>
                                    <div className='center'>
                                        <div className={`collapse-content ${selected === 1 ? 'contentDetail show' : 'contentDetail '}`}>
                                            {logement.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='buttonAboutDetail'>
                                <div className='buttonUniDetail'>
                                    <div className='titleDetail itemDetail' onClick={() => toggle(2)}>
                                        <p>Equipments</p>
                                        <span>{selected === 2 ? flecheDown : flecheUp}</span>
                                    </div>
                                    <div className={selected === 2 ? 'contentDetail show àmarginbottomà' : 'contentDetail '}>
                                        <div className='align'>
                                            {logement.equipments.slice(1, 5).map((equipment, index) => (
                                                <div key={index}>
                                                    {equipment}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
            <Footer />
        </div >
    );
}

export default LogementDetail