import React, { Component } from "react";
import update from "react-addons-update";

class NewUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user:{}
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

    fetch(`http://localhost:8000/users/signup`, {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(() => {
      this.props.router.push('/dashboard');
    })
    .catch((err) => {
      console.log('ERROR:', err);
    });
  }

  render(){
    return(
      <div>
        <nav>
          <h1>Sign Up</h1>
          <form onSubmit={this.handleSubmit.bind(this)} className="">
            <div className=''>
              First Name
            </div>
            <div className=''>
              <input type='text'  name="firstname" placeholder="First Name" onChange={this.handleChange.bind(this)}></input>
            </div>
            <div className="">
              Last Name
            </div>
            <div className="">
              <input type="text"   name="lastname" placeholder="Last Name" onChange={this.handleChange.bind(this)}></input>
            </div>
            <div className="">
              Email
            </div>
            <div className="">
              <input type="text"  name="email" placeholder="Email" onChange={this.handleChange.bind(this)}></input>
            </div>
            <div className="">
              Password
            </div>
            <div className="">
              <input type="password" onChange={this.handleChange.bind(this)} name="password_digest" placeholder="Password"></input>
            </div>
            <button href="/dashboard" type="submit">Submit</button>
          </form>
        </nav>
      </div>
    );
  }
}

export default NewUser;
