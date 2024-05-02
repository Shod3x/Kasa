import React, { useState, useEffect } from 'react';
import { logements } from '../../data'
import LogementCard from './LogementCard';
import { getLogements } from '../../logement.service';


function LogementList() {
    // const URL = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"

    const [logements, setLogements] = useState([]);

    // useEffect(async () => {
    //     const response = await fetch(URL);
    //     const data = await response.json();
    //     setLogements(data.logements);
    // }, [])

    useEffect(() => {
        const data = getLogements();
        setLogements(data);
    });

    return (
        <div>
            <ul className='resizeList' >
                {logements.map((logement, index) => {
                    return (
                        <li key={index}>
                            <LogementCard logement={logement} />
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default LogementList;