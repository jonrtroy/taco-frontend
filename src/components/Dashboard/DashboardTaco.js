import React from 'react';

function DashboardTaco(props) {
  // Functionality to toggle colors between Open & Closed states
  let restaurantStatus;
  let statusStyle = {
    color: '#D7263D',
  };
  if(props.status === false) {
    restaurantStatus = 'Open Right Now';
    statusStyle.color = '#042A2B';
  } else {
    restaurantStatus = 'This Place is Closed';
  }



  return(
      <div>
        <h2>{props.name}</h2>
        <div className='taco-info'>

          <div style={statusStyle} >{restaurantStatus}</div><br />
          <div>Rating: {props.rating}/5</div><br />
          <div>Address: {props.address}</div><br />
          <div>Phone: {props.phone_number}</div><br />
          <div>Price: {props.price}</div><br />
          <div><a target='_blank' href={props.website}>
            <button>
              See Yelp Page
            </button>
            </a>
          </div><br />

        </div>
      </div>
  );
}

export default DashboardTaco;
