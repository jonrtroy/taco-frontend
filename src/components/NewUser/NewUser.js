import React, { Component } from 'react';

class NewUser extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return(
      <div>
        <nav>
          <h1>Sign Up</h1>
          <form className="">
            <div className="">
              First Name
            </div>
            <div className="">
              <input type="text"  name="first_name" placeholder="First Name"></input>
            </div>
            <div className="">
              Last Name
            </div>
            <div className="">
              <input type="text"   name="last_name" placeholder="Last Name"></input>
            </div>
            <div className="">
              Email
            </div>
            <div className="">
              <input type="text"  name="email" placeholder="Email"></input>
            </div>
            <div className="">
              Password
            </div>
            <div className="">
              <input type="password" name="password_digest" placeholder="Password"></input>
            </div>
            <button href="/dashboard" type="submit">Submit</button>
          </form>
        </nav>
      </div>
    )
  }

}

export default NewUser;
