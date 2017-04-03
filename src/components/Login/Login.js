import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import update from 'react-addons-update';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        email: '',
        password: ''
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

  // POST request
  handleSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:8000/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then((results) => {
      results.json().then((jwt) => {
        window.localStorage.setItem('MyToken', jwt.token.token);
        window.localStorage.setItem('user_id', parseInt(jwt.token.user_id));
        window.localStorage.setItem('loggedIn', jwt.token.loggedIn);
        this.props.router.push('/dashboard');
      });
    })
    .catch(() => {
      console.log('User login has failed');
    });
  }

  render() {
    return (
     <div>
        <div className='container'>
          <h1>Taco 4 You</h1>

          <h3>Login</h3>
          <div id="login-page-div">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input id='email' placeholder="Email" name='email' type="email" onChange={this.handleChange.bind(this)}></input><br />
              <input id='password' placeholder="Password" name="password" type="password" onChange={this.handleChange.bind(this)}></input><br />
              <button type="submit">Log In</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
