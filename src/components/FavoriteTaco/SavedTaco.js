import React, { Component } from 'react';
import { Link } from 'react-router';

class SavedTaco extends Component {
  constructor() {
    super();

    this.state = {
      isVisible: {
        display: 'block'
      }
    };
  }

  handleDelete() {
    fetch(`http://localhost:8000/tacos/${this.props.taco_id}/${this.props.user_id}`, {
      method: 'DELETE'
    })
    .then(() => {
      // Set display of component to none if item is removed from database
      this.setState({isVisible: {display: 'none'}});
    })
    .catch((err) => {
      console.log('ERROR: ', err);
    });
  }

  render() {
    return(
      <div className="saved-taco-container" style={this.state.isVisible}>
        <div>
          <h3>{this.props.name}</h3>
        </div>
        <div className="saved-taco-info">
          <ul>
            <li>Rating: {this.props.rating}</li>
            <li>Address: {this.props.address}</li>
            <li>Phone: {this.props.phone_number}</li>
          </ul>
          <Link to="/user/favorite">
            <button className="outline-btn" onClick={this.handleDelete.bind(this)}>Delete Taco</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default SavedTaco;
