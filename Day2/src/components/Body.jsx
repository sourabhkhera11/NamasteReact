import resList from "../utils/mockData";
import Rcard from "./Rcard";
const Body = () => {
  return (
    <div className="RestCon">
      {resList.map((data) => {
        return <Rcard key={data?.card?.card?.info?.id} resData={data} />;
      })}
    </div>
  );
};
export default Body;