import React, { useEffect, useState,} from 'react';
import Event from '../Event/Event';
 

 

const Home = () => {
    const [event,setEvent] =useState([])
    useEffect(() =>{
        fetch(`http://localhost:4000/events`)
        .then(res=>res.json())
        .then(data=>setEvent(data))

    },[])
    return (
        <div className="container">
            <div className="row ">

                {
                    event.map(event => <Event eventss={event}></Event>)
                }

            </div>

        </div>

    );
};

export default Home;