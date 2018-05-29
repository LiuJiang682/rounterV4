import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// class Cars extends Component {

//     render(){
//         // Get data from route props
//         const cars = this.props.route.data;
//         // Map through cars and return linked cars
//         const carNode = cars.map((car) => {
//             return (
//                  <Link
//                     to={"/cars/"+car.id}
//                     className="list-group-item"
//                     key={car.id}>
//                     {car.name}
//                 </Link>
//             )
//         });
//         return (
//             <div>
//                 <h1>Cars page</h1>
//                 <div className="list-group">
//                     {carNode}
//                 </div>
//             </div>
//         );
//     }
// }

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
