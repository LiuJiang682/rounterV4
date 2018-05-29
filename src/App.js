import React, { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import Main from './Main';
import Cars from './Cars';
import CarDetail from './carDetails';
import About from './About';

  const data = [
    {
        id: 1,
        name: 'Honda Accord Crosstour',
        year: '2010',
        model: 'Accord Crosstour',
        make: 'Honda',
        media: 'http://media.ed.edmunds-media.com/honda/accord-crosstour/2010/oem/2010_honda_accord-crosstour_4dr-hatchback_ex-l_fq_oem_4_500.jpg',
        price: '$16,811'

    },
    {
        id: 2,
        name: 'Mercedes-Benz AMG GT Coupe',
        year: '2016',
        model: 'AMG',
        make: 'Mercedes Benz',
        media: 'http://media.ed.edmunds-media.com/mercedes-benz/amg-gt/2016/oem/2016_mercedes-benz_amg-gt_coupe_s_fq_oem_1_717.jpg',
        price: '$138,157'

    },
    {
        id: 3,
        name: 'BMW X6 SUV',
        year: '2016',
        model: 'X6',
        make: 'BMW',
        media: 'http://media.ed.edmunds-media.com/bmw/x6/2016/oem/2016_bmw_x6_4dr-suv_xdrive50i_fq_oem_1_717.jpg',
        price: '$68,999'
    },
    {
        id: 4,
        name: 'Ford Edge SUV',
        year: '2016',
        model: 'Edge',
        make: 'Ford',
        media: 'http://media.ed.edmunds-media.com/ford/edge/2016/oem/2016_ford_edge_4dr-suv_sport_fq_oem_6_717.jpg',
        price: '$36,275'
    },
    {
        id: 5,
        name: 'Dodge Viper Coupe',
        year: '2017',
        model: 'Viper',
        make: 'Dodge',
        media: 'http://media.ed.edmunds-media.com/dodge/viper/2017/oem/2017_dodge_viper_coupe_acr_fq_oem_3_717.jpg',
        price: '$123,890'
    }
];

class App extends Component {

  render() {

  
    return (
      <div>
        {/* <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li className="nav-item"><Link to="/">Homes</Link></li>
            <li className="nav-item"><Link to="/category">Category</Link></li>
            <li className="nav-item"><Link to="/products">Products</Link></li>
          </ul>
        </nav> */}
        <Main />
      
        {/* <BrowserRouter history={history}> */}
          <Switch>
            <Route path="/cars/:id" render={ (props) => <CarDetail data= {data} {...props} />}/>
            <Route path="/cars" render={ (props) => <Cars data= {data} {...props} />}/>
            <Route path="/about" component={About}/>
            <Route exact path="/" component={Home}/>
          </Switch>
        {/* </BrowserRouter> */}
        
      </div>
    );
  }
}


const Home = (props) => (
  <div>
    <h2>Home</h2>
  </div>
)

 export default App;
    