import resList from "../utils/mockData";
import Rcard from "./Rcard";
import { useState } from "react";
const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList);
  return (
    <div className="RestCon">
      <button
        className="button"
        onClick={() => {
          let filterRest = resList.filter((data) => {
            return data?.card?.card?.info?.avgRating > 4;
          });
          setListOfRes(filterRest);
        }}
      >
        HighRatetedRestaurant
      </button>
      <div>
        {listOfRes.map((data) => {
          return <Rcard key={data?.card?.card?.info?.id} resData={data} />;
        })}
      </div>
    </div>
  );
};
export default Body;
