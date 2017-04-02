import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

import SavedTaco from './SavedTaco';


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

  componentDidMount() {
    fetch(`http://localhost:8000/users/dashboard`, {
      method: 'GET',
      headers: {
        'Authorization': window.localStorage.getItem('MyToken')
      }
    })
    .then((results) => {
      console.log(results)
      results.json().then((data) => {
        console.log(data)
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
      <div className=''>
        <div className='container'>
          <h2>Your Favorite Tacos</h2>
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
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

}

export default FavoriteTaco;
