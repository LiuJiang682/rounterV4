import React from 'react';
import { Link } from 'react-router-dom';

const Cars = ({match, data}) => {
    console.log('match', match);
    console.log('data', data);
    const carNode = data.map((car) => {
        return (
            <Link to={"/cars/"+car.id}
            className="list-group-item"
            key={car.id}>
            {car.name}
            </Link>
        )
    });
    return (
        <div>
            Cars page
            <div className="list-group">
                {carNode}
            </div>
        </div>
    );
};

export default Cars
