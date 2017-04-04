import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import update from 'react-addons-update';

class NewUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {}
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
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      this.props.router.push('/login');
    })
    .catch((err) => {
      console.log('ERROR:', err);
    });
  }


  render(){
    return(
      <div className='container'>
        <nav>
          <h1>Tacos 4 You</h1>
          <h2>Sign Up</h2>
          <form onSubmit={this.handleSubmit.bind(this)} className='sign-up'>
            <h4>First Name</h4>
            <div className='sign-up-input'>
              <input type='text'  name='firstname' onChange={this.handleChange.bind(this)}></input>
            </div>
            <h4>Last Name</h4>
            <div className='sign-up-input'>
              <input type='text'   name='lastname' onChange={this.handleChange.bind(this)}></input>
            </div>
            <h4>Email</h4>
            <div className='sign-up-input'>
              <input type='text'  name='email' onChange={this.handleChange.bind(this)}></input>
            </div>
            <h4>Password</h4>
            <div className='sign-up-input'>
              <input type='password' onChange={this.handleChange.bind(this)} name='password_digest'></input>
            </div>
            <button className='hvr-radial-out' href='/dashboard' type='submit'>Submit</button>
          </form>
        </nav>
      </div>
    );
  }
}

export default NewUser;
