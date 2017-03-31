import React, { Component } from 'react';
import DashboardTaco from './DashboardTaco';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: {
        coords: {
          latitude: 40.766505,
          longitude: -73.986331
        }
      },
      tacos: {
        name: '...',
        rating: '...',
        location: {
          display_address: [
          '...',
          ''
        ]
      },
        display_phone: '...',
        price: '...',
        coordinates: {
          latitude: 40.766505,
          longitude: -73.986331
        }
      }
    };
  }

  componentDidMount() {
  // Get user coordinates & store them in state
  navigator.geolocation.getCurrentPosition((position) => {
    this.setState({ position });
    fetch(`http://localhost:8000/api/yelp/${this.state.position.coords.latitude}/${this.state.position.coords.longitude}`, {
      method: 'GET'
    })
    .then((results) => {
      results.json().then((data) => {
        // console.log('data', data);
        let ratingFour = [];
        for (let i = 0; i < data.length; i++) {
          if(data[i].rating >= 4) {
            ratingFour.push(data[i]);
            console.log('RAITINGFOUR', ratingFour);
          }
        }
        console.log('RATING', ratingFour);
        return this.setState({
          tacos: ratingFour[(Math.floor(Math.random() * ((ratingFour.length - 1) - 0) + 0))]
        });
        // Set the state of bars to be a random index number of the returned array
      });
    })
    .catch((err) => {
      console.log('ERROR: ', err);
    });
  });
}

  pickTaco() {
    fetch(`http://localhost:8000/api/yelp/${this.state.position.coords.latitude}/${this.state.position.coords.longitude}`, {
      method: 'GET'
    })
    .then((results) => {
      results.json().then((data) => {
        // console.log('data', data);
        let ratingFour = [];
        for (let i = 0; i < data.length; i++) {
          // console.log('data', data[i].rating);
          if(data[i].rating >= 4) {
            console.log('restaurant', data)
            ratingFour.push(data[i]);
            console.log('RATING', ratingFour);
          }
        }
        return this.setState({
          tacos: ratingFour[(Math.floor(Math.random() * ((ratingFour.length - 1) - 0) + 0))]
        });
        // Set the state of bars to be a random index number of the returned array
      });
    })
    .catch((err) => {
      console.log('ERROR: ', err);
    });
  }


  render() {
    return(
      <div>
        <div className='container'>
          <div className='taco-result'>
            <DashboardTaco
                name={this.state.tacos.name}
                status={this.state.tacos.is_closed}
                rating={this.state.tacos.rating}
                address={this.state.tacos.location.display_address}
                phone_number={this.state.tacos.display_phone}
                price={this.state.tacos.price}
            />
            <button className=''>Add to Favorite Tacos</button>
          </div>
          <div className='random-taco'>
            <h2>More Tacos?</h2>
            <button className="" onClick={this.pickTaco.bind(this)}>Find some more tacos</button>
          </div>
        </div>

      </div>
    )
  }

}

export default Dashboard;
