import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

import SavedTaco from './SavedTaco';
import Navigation from '../Navigation/Navigation';

class FavoriteTaco extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tacos: [
        {
        firstname: 'taco'
        }
      ],
      user_id: 0
    };

  }

  componentWillMount() {
  if (!localStorage.getItem('MyToken')) {
      browserHistory.push('/login');
  }
}


  componentDidMount() {
    fetch(`http://localhost:8000/users/dashboard`, {
      method: 'GET',
      headers: {
        'Authorization': window.localStorage.getItem('MyToken')
      }
    })
    .then((results) => {
      results.json().then((data) => {
        // Get user data and user id
        this.setState({ tacos: data.data });
        this.setState({ user_id: data.user_id});
        // Create new items in localStorage to store user_id and user status
        window.localStorage.setItem('user_id', parseInt(this.state.user_id));
        window.localStorage.setItem('loggedIn', true);
      });
    })
    .catch((err) => {
      browserHistory.push('/login');
    })
  }

  render() {
    return(
      <div>
        <Navigation
          className=''
        />
        <div className='favorite-container'>
          <h1>Your Favorite Tacos</h1>
          <div className='favorite-tacos-container'>
            {this.state.tacos.map((taco) => {
              return(
                <div key={taco.id}>
                  <SavedTaco
                    taco_id={taco.id}
                    user_id={this.state.user_id}
                    name={taco.name}
                    rating={taco.rating}
                    address={taco.address}
                    phone_number={taco.phone_number}
                    price={taco.price}
                    website={taco.website}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

}

export default FavoriteTaco;
