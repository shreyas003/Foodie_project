import React, { useEffect } from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";
import { getRestaurants } from "../actions/restaurantAction";

const CountRestaurant = () => {
  const dispatch = useDispatch();

  const { count, pureVegRestaurantsCount, showVegOnly, loading, error } =
    useSelector((state) => state.restaurants);

  useEffect(() => {
    dispatch(getRestaurants);
  }, [dispatch, showVegOnly]);

  return (
    <div>
      {loading ? (
        <p>Loading Restaurant count .....</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p className="NumOfRestro">
          {showVegOnly ? pureVegRestaurantsCount : count}
          <span className="Restro">
            {showVegOnly
              ? pureVegRestaurantsCount === 1
                ? " Restaurant available"
                : " Restaurants available"
              : count === 1
              ? " Restaurants available"
              : " Restaurants available"}
          </span>
          <hr />
        </p>
      )}
    </div>
  );
};

export default CountRestaurant;
