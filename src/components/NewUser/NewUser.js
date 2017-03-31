import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import update from 'react-addons-update';

class NewUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        firstname: '',
        lastname: '',
        email: '',
        password_digest: ''
      }
    };
  }

  handleChange(event) {
    let newState = update(this.state, {
      user: {
        $merge: {
           [event.target.name]: event.target.value
        }
      }
    });
    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state.user);

    fetch(`http://localhost:8000/users/new`, {
      method: 'POST',
      body: JSON.stringify(this.state.user),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((results) => {
      results.json().then((jwt) => {
        let authUser = jwt.user;
        window.localStorage.setItem('token', jwt.token);
        window.localStorage.setItem('user', JSON.stringify(authUser));
        browserHistory.push('/dashboard');
        console.log(jwt.token)
        console.log(jwt.user)
      });
    })
    .catch((err) => {
      alert('Not authenticated');
    });
  }

  render(){
    return(
      <div>
        <nav>
          <h1>Sign Up</h1>
          <form onSubmit={this.handleSubmit.bind(this)} className=''>
            <div className=''>
              First Name
            </div>
            <div className=''>
              <input type='text'  name='firstname' placeholder='First Name' onChange={this.handleChange.bind(this)}></input>
            </div>
            <div className=''>
              Last Name
            </div>
            <div className=''>
              <input type='text'   name='lastname' placeholder='Last Name' onChange={this.handleChange.bind(this)}></input>
            </div>
            <div className=''>
              Email
            </div>
            <div className=''>
              <input type='text'  name='email' placeholder='Email' onChange={this.handleChange.bind(this)}></input>
            </div>
            <div className=''>
              Password
            </div>
            <div className=''>
              <input type='password' onChange={this.handleChange.bind(this)} name='password_digest' placeholder='Password'></input>
            </div>
            <button href='/dashboard' type='submit'>Submit</button>
          </form>
        </nav>
      </div>
    );
  }
}

export default NewUser;
