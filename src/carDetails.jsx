import React, { Component } from 'react';
import history from './history';
import { withRouter } from 'react-router-dom';

// class CarDetail extends Component {
//     handleRedirect(){
//         browserHistory.push('/cars');
//     }
//     render(){
//         // Car array
//         const cars = this.props.route.data;
//         // Car Id from param
//         const id = this.props.params.id;
//         // Filter car with ID
//         const car = cars.filter(car => {
//             if(car.id == id) {
//                 return car;
//             }
//         });

//         return (
//             <div>
//                 <h1>{car[0].name}</h1>
//                 <div className="row">
//                     <div className="col-sm-6 col-md-4">
//                         <div className="thumbnail">
//                             <img src={car[0].media} alt={car[0].name} />
//                         </div>
//                     </div>
//                     <div className="col-sm-6 col-md-4">
//                        <ul>
//                            <li><strong>Model</strong>: {car[0].model}</li>
//                            <li><strong>Make</strong>: {car[0].make}</li>
//                            <li><strong>Year</strong>: {car[0].year}</li>
//                            <li><strong>Price</strong>: {car[0].price}</li>
//                        </ul>
//                     </div>
//                 </div>
//                 <div className="col-md-12">
//                         <button className="btn btn-default" onClick={this.handleRedirect.bind(this)}>Go to Cars</button>
//                     </div>
//             </div>
//         );
//     }
// }

const NavButton = withRouter(({ history }) => (
    <div>
        <button className="btn btn-default" onClick={() => history.push('/cars')}>Go to Cars</button>
    </div>)
);

const CarDetail = ({match, data}) => {
    console.log('car detail match', match);
    console.log('id', match.params.id);
    console.log('car detail data', data);
    const car = data.filter(car => {
        if (car.id == match.params.id) {
            return car;
        }
    });

    // handleRedirect = () => {
    //     createHistory.push('/cars');
    // }

    return (
        <div>
            <h1>{car[0].name}</h1>
            <div className="row">
                     <div className="col-sm-6 col-md-4">
                         <div className="thumbnail">
                             <img src={car[0].media} alt={car[0].name} />
                         </div>
                     </div>
                     <div className="col-sm-6 col-md-4">
                        <ul>
                            <li><strong>Model</strong>: {car[0].model}</li>
                            <li><strong>Make</strong>: {car[0].make}</li>
                            <li><strong>Year</strong>: {car[0].year}</li>
                            <li><strong>Price</strong>: {car[0].price}</li>
                        </ul>
                     </div>
                 </div>
                 <div className="col-md-12">
                        {/* <button className="btn btn-default" onClick={() => {history.push('/cars');}}>Go to Cars</button> */}
                     <NavButton />
                     </div>
        </div>
    );
}

export default CarDetail