import React, { Component } from 'react';
import { Link } from 'react-router';


class FavoriteTaco extends Component {
  constructor(props) {
    super(props);


  }

  render() {
    return(
      <div className="">
        <div className="">
          <ul>
            <li>Name:</li>
            <li>Address:</li>
            <li>Price:</li>
            <li>Website:</li>
            <li>Phone:</li>
          </ul>
          <Link to="dashboard">
            <button className="outline-btn">Remove Taco</button>
          </Link>
        </div>
      </div>
    )
  }

}

export default FavoriteTaco;
