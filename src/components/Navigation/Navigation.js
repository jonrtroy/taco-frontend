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
      <div className=''>
        <nav>
          <div className=''>
            <Link className='' to='/dashboard'>Home</Link><br />
            <Link className='' to='/user/favorite'>My Favorite Tacos</Link><br />
            {/* <Link className='' to='/user/new/roommate'>Add New Roommate</Link> */}
          </div>
          <button className='logoutButton' onClick={this.logout.bind(this)}>Logout</button>
        </nav>
      </div>
    )
  }
}


export default Navigation;