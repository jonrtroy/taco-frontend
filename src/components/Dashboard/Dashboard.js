import React, { Component } from 'react';

class Dashboard extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return(
      <div>
        <div className='container'>
          <div className='taco-result'>
            Taco Name
            Address
            Price
            Website
            Phone Number
            <button className=''>Add to Favorite Tacos</button>
          </div>
          <div className='random-taco'>
            <h2>More Tacos?</h2>
            <button className=''>Find some more tacos</button>
          </div>
        </div>

      </div>
    )
  }

}

export default Dashboard;
