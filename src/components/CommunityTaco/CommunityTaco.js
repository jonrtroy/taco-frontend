import React, { Component } from 'react';
import { Link } from 'react-router';

import Navigation from '../Navigation/Navigation';

class CommunityTaco extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tacos: []
    };
  }

  componentDidMount() {
    fetch(`http://localhost:8000/tacos`, {
      method: 'GET'
    })
    .then((results) => {
      results.json().then((tacos_data) => {
        this.setState({tacos: tacos_data});
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return(
      <div className=''>
        <Navigation
          className=''
        />
        <div className=''>
          {this.state.tacos.map((taco) => {
            return(
              <div key={taco.id} className=''>
                <h4>{taco.name}</h4>
                <li>Rating: {taco.rating}</li>
                <li>Address: {taco.address}</li>
                <li>Phone Number: {taco.phone_number}</li>
                <li>Price: {taco.price}</li>
                <li><a href={taco.website}>
                  <button>
                    See Yelp Page
                  </button>
                  </a><br />
                </li>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

}

export default CommunityTaco;
