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
        <div className='taco-info'>

          <div style={statusStyle} >{restaurantStatus}</div><br />
          <div>Rating: {props.rating}/5</div><br />
          <div>Address: {props.address}</div><br />
          <div>Phone: {props.phone_number}</div><br />
          <div>Price: {props.price}</div><br />
          <div><a href={props.website}>
            <button className='hvr-sweep-to-right'>
              See Yelp Page
            </button>
            </a>
          </div><br />

        </div>
      </div>
  );
}

export default DashboardTaco;
