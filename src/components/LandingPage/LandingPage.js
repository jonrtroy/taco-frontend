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
          <div className='landing-page-login'>
            <Link to='/login'>Login</Link>
          </div>
          <div className='landing-page-signup'>
            <Link to='/user/new'>Sign Up</Link> 
          </div>
        </div>

      </div>
    )
  }
}

export default LandingPage;
