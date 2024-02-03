import React from "react";
import { Link } from "react-router-dom";

const Restaurant = ({restaurant}) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card bg-dark text-white p-3 rounded">
        <Link to={`/eats/stores/${restaurant._id}/menus`} className="btn btn-block">
          <img
            className="card-img-top mx-auto rounded"
            src={restaurant.images[0].url}
            alt={restaurant.name}
          />
        </Link>
        
        <div className="card-body d-flex flex-column">
          <Link to={`eats/stores/${restaurant._id}/menus`} className="btn btn-block">
          <h5 className="card-title font-weight-bold">{restaurant.name}</h5>
          </Link>
          
          <p className="rest_address">
            {restaurant.address}
          </p>
          <div className="ratings mt-auto">
            <div className="rating-outer">
              <div className="rating-inner" 
              style={{width:`${(restaurant.ratings/5)*100}%`}}>
              </div>

            </div>
            <span id="no_of_Reviews">({restaurant.numOfReviews} Reviews)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
