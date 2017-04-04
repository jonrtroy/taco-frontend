import React, { Component } from 'react';
import { browserHistory } from 'react-router';

import Navigation from '../Navigation/Navigation';

class CommunityTaco extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tacos: []
    };
  }

  componentWillMount() {
  if (!localStorage.getItem('MyToken')) {
      browserHistory.push('/login');
  }
}


  componentDidMount() {
    fetch(`https://taco-4-you.herokuapp.com/tacos`, {
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
      <div>
        <Navigation
        />
          <div className='community'>
            <h1>Taco Community</h1>
            <h3>See the Taco Community's Favorite Tacos</h3>
            <div className='taco-community-container'>
              {this.state.tacos.map((taco) => {
                return(
                  <div key={taco.id} className='taco-community'>
                    <h4>{taco.name}</h4><br />
                    <div className='taco-community-info'>
                      <div>Rating: {taco.rating}/5</div><br />
                      <div>Address: {taco.address}</div><br />
                      <div>Phone Number: {taco.phone_number}</div><br />
                      <div>Price: {taco.price}</div><br />
                      <div><a target='_blank' href={taco.website}>
                        <button>
                          See Yelp Page
                        </button>
                      </a><br />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

}

export default CommunityTaco;
