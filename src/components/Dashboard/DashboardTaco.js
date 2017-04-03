import React from 'react';

function DashboardTaco(props) {
  // Functionality to toggle colors between Open & Closed states
  let restaurantStatus;
  let statusStyle = {
    color: '#FF3B44',
  };
  if(props.status === false) {
    restaurantStatus = 'Open Right Now';
    statusStyle.color = '#41FFC0';
  } else {
    restaurantStatus = 'This Place is Closed';
  }



  return(
      <div>
        <h2>{props.name}</h2>
        <div className="bar-info">
          <ul>
            <li style={statusStyle} >{restaurantStatus}</li>
            <li>Rating: {props.rating}</li>
            <li>Address: {props.address}</li>
            <li>Phone: {props.phone_number}</li>
            <li>Price: {props.price}</li>
            <li><a href={props.website}>
              <button>
                See Yelp Page
              </button>
            </a>
          </li>
          </ul>
        </div>
      </div>
  );
}

export default DashboardTaco;
