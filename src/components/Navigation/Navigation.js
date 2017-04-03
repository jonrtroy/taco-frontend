import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  logout() {
    window.localStorage.removeItem('MyToken');
    window.localStorage.removeItem('user_id');
    window.localStorage.removeItem('loggedIn');
    browserHistory.push('/');
  }

  render() {
    return(
      <div className='navigation-container'>
        <nav>
          <h1>Tacos 4 You</h1>
          <div className='navigation'>
            <Link to='/dashboard'>Home</Link><br />
            <Link to='/user/favorite'>My Favorite Tacos</Link><br />
            <Link to='/user/community'>Taco Community</Link><br />
          </div>
          <button className='hvr-sweep-to-right' onClick={this.logout.bind(this)}>Logout</button>
        </nav>
      </div>
    )
  }
}


export default Navigation;
