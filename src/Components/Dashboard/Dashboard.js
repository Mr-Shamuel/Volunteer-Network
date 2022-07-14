import React, { useEffect, useState, } from 'react';

const Dashboard = () => {
    const [event, setEvent] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4000/events`)
            .then(res => res.json())
            .then(data => setEvent(data))
         

    }, [])
    console.log(event);
    return (
        <div className='container'>
            <h1 className='text-center'>Total Events : {event.length}</h1>




            <table class="table table-hover">
                <thead>
                    <tr className="bg-primary text-white">

                        <th  scope="col">#</th>
                        <th scope="col">Event Name</th>
                        <th scope="col">Event Image</th>
                        <th scope="col">Event ID</th>
                    </tr>
                </thead>
                <tbody>
                
                {
                        event.map((x,y) =>
                            <tr>

                                <td className="table-success">{y}</td>
                                <td className="table-warning">{x.name}</td>
                                <td className="table-danger">{x.URL}</td>
                                <td className="table-info">{x._id}</td>
                            </tr>)
                }



                </tbody>
            </table>



        </div>
    );
};

export default Dashboard;