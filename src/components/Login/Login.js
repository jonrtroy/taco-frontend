import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return(
      <div id='login-page-div'>
        <form>
          <input placeholder='Email' name='email' type='email'></input>
          <input placeholder='Password' name='password' type='password'></input>
          <input type='submit'></input>
        </form>
      </div>
    )
  }

}

export default Login;
