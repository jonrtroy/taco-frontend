import React, { Component } from 'react';
import update from 'react-addons-update';
import { Link } from 'react-router';

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

    fetch(`https://taco-4-you.herokuapp.com/users/new`, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      this.props.router.push('/login');
    })
    .catch(() => {
      alert('Please fill out all fields correctly');
    });
  }


  render(){
    return(
      <div className='container'>
        <nav>
          <h1>Tacos 4 You</h1>
          <h2>Sign Up</h2>
          <Link to='/'><button className='back-button hvr-radial-out'>Back</button></Link><br />
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
