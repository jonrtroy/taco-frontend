
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
          <div>Rating: {this.props.rating}</div><br />
          <div>Address: {this.props.address}</div><br />
          <div>Phone: {this.props.phone_number}</div><br />
          <div>Price: {this.props.price}</div><br />
          <div><a href={this.props.website}><br />
            <button className='hvr-sweep-to-right'>
              See Yelp Page
            </button>
            </a>
          </div><br />
          <Link to="/user/favorite">
            <button className="hvr-sweep-to-right" onClick={this.handleDelete.bind(this)}>Delete Taco</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default SavedTaco;
