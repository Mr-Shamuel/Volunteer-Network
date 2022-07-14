import React from 'react';
import Card from 'react-bootstrap/Card';
const Event = ({ eventss }) => {
    console.log(eventss);
    return (

        <div className="col-md-6 col-lg-3 col-sm-6 text-center mt-4">


            <Card >
                <Card.Img variant="top" src={eventss.URL} />
                <Card.Body className="btn btn-outline-danger   font-weight-bold">
                    <Card.Title className="  font-weight-bold">{eventss.name}</Card.Title>

                </Card.Body>

            </Card>


        </div>

    );
};

export default Event;