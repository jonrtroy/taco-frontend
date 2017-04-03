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
      console.log("ERROR:", err);
    });
  }


  render(){
    return(
      <div className='container'>
        <nav>
          <h1>Tacos 4 You</h1>
          <h3>Sign Up</h3>
          <form onSubmit={this.handleSubmit.bind(this)} className='sign-up'>
            <div className='sign-up-input'>
              <input type='text'  name='firstname' placeholder='First Name' onChange={this.handleChange.bind(this)}></input>
            </div>
            <div className='sign-up-input'>
              <input type='text'   name='lastname' placeholder='Last Name' onChange={this.handleChange.bind(this)}></input>
            </div>
            <div className='sign-up-input'>
              <input type='text'  name='email' placeholder='Email' onChange={this.handleChange.bind(this)}></input>
            </div>
            <div className='sign-up-input'>
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
