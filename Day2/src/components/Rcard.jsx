import { CLOUD_BASE_URL } from "../utils/constants";
const Rcard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } =
    resData?.card?.card?.info;
  return (
    <div className="rcard">
      <img
        alt="headerLogo"
        src={process.env.CLOUD_BASE_URL + cloudinaryImageId}
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating}</h3>
    </div>
  );
};
export default Rcard;
