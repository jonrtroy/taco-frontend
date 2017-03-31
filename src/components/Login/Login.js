import React, { Component } from 'react';
import { browserHistory } from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  componentWillMount() {
    if (localStorage.getItem('token')) {
        browserHistory.push('/dashboard');
    }
  }

  handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


  // POST request
  handleSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:8000/users/login`, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((results) => {
      results.json().then((jwt) => {
        let authUser = jwt.user;
        window.localStorage.setItem('token', jwt.token);
        window.localStorage.setItem('user', JSON.stringify(authUser));
        console.log('Local User:', authUser)
        browserHistory.push('/dashboard');
      });
    })
    .catch(() => {
      alert('Not Authenticated!');
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
              <input placeholder="Email" name='email' type="email" onChange={this.handleChange.bind(this)}></input>
              <input placeholder="Password" name="password" type="password" onChange={this.handleChange.bind(this)}></input>
              <button type="submit">Log In</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
