import React, { useState } from 'react';
import "./Collapse.scss"


function DropdownMenu({ title, defaultContent }) {
    const [selected, setSelected] = useState(false);
    const [content, setContent] = useState(defaultContent);

    const flecheUp = <img className='rotation' src="../fleche-vers-le-bas.png" alt="" />
    const flecheDown = <img className='invertRot' src="../fleche-vers-le-bas.png" alt="" />

    const toggle = () => {
        setSelected(!selected);
    };

    return (
        <div className='buttonAbout'>
            <div className='buttonUni'>
                <div className='title item' onClick={toggle}>
                    <p>{title}</p>
                    <span className='up'>
                        <img className={selected ? 'rotation' : 'invertRot'} src="../fleche-vers-le-bas.png" alt="" />
                    </span>
                </div>
                <div className='center'>
                    <div className={selected ? 'content show' : 'content'}>
                        {defaultContent}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DropdownMenu;
