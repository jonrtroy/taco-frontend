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
                <div><strong>Name</strong></div>
                <div>{taco.name}</div>
                <div><strong>Rating</strong></div>
                <div>{taco.rating}</div>
                <div><strong>Address</strong></div>
                <div>{taco.address}</div>
                <div><strong>Phone Number</strong></div>
                <div>{taco.phone_number}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

}

export default CommunityTaco;
