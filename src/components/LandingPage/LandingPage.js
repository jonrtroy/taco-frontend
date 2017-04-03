import React, { Component } from 'react';
import { Link } from 'react-router';

class LandingPage extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div className='landing-page-div'>
        <div className='landing-page-links'>
          <h1>Tacos 4 You!</h1>
          <div className='landing-page-login'>
            <Link to='/login'><button className='hvr-back-pulse'>Login</button></Link>
          </div>
          <div className='landing-page-signup'>
            <Link to='/user/new'><button className='hvr-back-pulse'>Sign Up</button></Link>
          </div>
        </div>

      </div>
    )
  }
}

export default LandingPage;
