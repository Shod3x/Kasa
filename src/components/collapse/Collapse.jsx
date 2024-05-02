import React, { useState, useEffect } from 'react';
import "./Collapse.scss"


function DropdownMenu() {
    const flecheUp = <img className='up' src="./fleche-vers-le-bas.png" alt="" />
    const flecheDown = <img src="./fleche-vers-le-bas.png" alt="" />
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected === i) {
            setSelected(null);
        } else {
            setSelected(i);
        }
    };

    return (
        <div className='aboutDiv '>
            <div className='buttonAbout'>
                <div className='buttonUni'>
                    <div className='title item' onClick={() => toggle(1)}> {/* Assuming i = 1 here */}
                        <p>Fiabilité</p>
                        <span>{selected === 1 ? flecheDown : flecheUp}</span> {/* Assuming i = 1 here */}
                    </div>
                    <div className='center'>
                        <div className={selected === 1 ? 'content show' : 'content'}> {/* Assuming i = 1 here */}
                            Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                        </div>
                    </div>
                </div>
            </div>
            <div className='buttonAbout'>
                <div className='buttonUni'>
                    <div className='title item' onClick={() => toggle(2)}> {/* Assuming i = 1 here */}
                        <p>Respect</p>
                        <span>{selected === 2 ? flecheDown : flecheUp}</span> {/* Assuming i = 1 here */}
                    </div>
                    <div className='center'>
                        <div className={selected === 2 ? 'content show' : 'content'}> {/* Assuming i = 1 here */}
                            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                        </div>
                    </div>
                </div>
            </div>
            <div className='buttonAbout'>
                <div className='buttonUni'>
                    <div className='title item' onClick={() => toggle(3)}> {/* Assuming i = 1 here */}
                        <p>Service</p>
                        <span>{selected === 3 ? flecheDown : flecheUp}</span> {/* Assuming i = 1 here */}
                    </div>
                    <div className='center'>
                        <div className={selected === 3 ? 'content show' : 'content'}> {/* Assuming i = 1 here */}
                            La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
                        </div>
                    </div>
                </div>
            </div>
            <div className='buttonAbout'>
                <div className='buttonUni'>
                    <div className='title item' onClick={() => toggle(4)}> {/* Assuming i = 1 here */}
                        <p>Sécurité</p>
                        <span>{selected === 4 ? flecheDown : flecheUp}</span> {/* Assuming i = 1 here */}
                    </div>
                    <div className='center'>
                        <div className={selected === 4 ? 'content show' : 'content'}> {/* Assuming i = 1 here */}
                            La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien réspectés. Nous organisons également des ateliers sur la sécurité domestique pur nos hôtes.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DropdownMenu; 