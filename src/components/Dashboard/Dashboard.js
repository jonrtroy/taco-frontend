import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import DashboardTaco from './DashboardTaco';
import Navigation from '../Navigation/Navigation';

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
      // dummy data so I wouldn't get the error screen.
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

  componentWillMount() {
  if (!localStorage.getItem('MyToken')) {
      browserHistory.push('/login');
  }
}


  componentDidMount() {

  navigator.geolocation.getCurrentPosition((position) => {
    this.setState({ position });
    fetch(`http://localhost:8000/api/yelp/${this.state.position.coords.latitude}/${this.state.position.coords.longitude}`, {
      method: 'GET'
    })
    .then((results) => {
      results.json().then((data) => {
        // console.log('data', data);
        // create empty array to push tacos that are equal to or greater than 4 into
        let ratingFour = [];
        // iterate through the API data
        for (let i = 0; i < data.length; i++) {
          // if statement to find the tacos whose ratings are equal to or greater than 4
          if(data[i].rating >= 4) {
            // push the data into the empty array
            ratingFour.push(data[i]);
            console.log('RATINGFOUR', ratingFour);
          }
        }
        console.log('RATING', ratingFour);
        return this.setState({
          // randomly selecting from the array to get a taco restaurant
          tacos: ratingFour[(Math.floor(Math.random() * ((ratingFour.length - 1) - 0) + 0))]
        });
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
        // create empty array to push tacos that are equal to or greater than 4 into
        let ratingFour = [];
        // iterate through the API data
        for (let i = 0; i < data.length; i++) {
          // console.log('data', data[i].rating);
          // if statement to find the tacos whose ratings are equal to or greater than 4
          if(data[i].rating >= 4) {
            console.log('restaurant', data)
            // push the data into the empty array
            ratingFour.push(data[i]);
            console.log('RATING', ratingFour);
          }
        }
        return this.setState({
          // randomly selecting from the array to get a taco restaurant
          tacos: ratingFour[(Math.floor(Math.random() * ((ratingFour.length - 1) - 0) + 0))]
        });
      });
    })
    .catch((err) => {
      console.log('ERROR: ', err);
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // If user is logged in 'Add to Favorites' re-directs to favorite
    // Else re-direct to login page
      if(window.localStorage.getItem('loggedIn')) {
        fetch('http://localhost:8000/tacos', {
          method: 'POST',
          body: JSON.stringify({
            taco: {
              name: `${this.state.tacos.name}`,
              rating: parseInt(`${this.state.tacos.rating}`),
              address: `${this.state.tacos.location.display_address}`,
              phone_number: `${this.state.tacos.display_phone}`,
              website: `${this.state.tacos.url}`,
              price: `${this.state.tacos.price}`,
              user_id: window.localStorage.getItem('user_id')
            }
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(() => {
          this.props.router.push('/user/favorite');
        })
        .catch((err) => {
          console.log('ERROR:', err);
        });
      } else {
        this.props.router.push('/login');
      }
    }





  render() {
    return(
      <div>
        <Navigation
          className=''
        />
        <div className='taco-container'>
          <div className='taco-result'>
            <DashboardTaco
                name={this.state.tacos.name}
                status={this.state.tacos.is_closed}
                rating={this.state.tacos.rating}
                address={this.state.tacos.location.display_address}
                phone_number={this.state.tacos.display_phone}
                price={this.state.tacos.price}
                website={this.state.tacos.url}
            />
            <button className='hvr-sweep-to-right' onClick={this.handleSubmit.bind(this)}>Add to Favorite Tacos</button>
          </div>
          <div className='random-taco'>
            <div className='more-tacos'>
              <h2>More Tacos?</h2>
              <button className='hvr-sweep-to-right' onClick={this.pickTaco.bind(this)}>Find Tacos</button>
            </div>
          </div>
        </div>

      </div>
    )
  }

}

export default Dashboard;
