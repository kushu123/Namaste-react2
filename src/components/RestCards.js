import { CDN_URL } from "../utils/constants";

const RestCards = (props) => {
    const { restData } = props; 
    const {
      cloudinaryImageId, 
      name, 
      cuisines, 
      avgRating, 
      costForTwo, 
      sla,
    } = restData?.info;
  return (
    <div className ="res-card">
      <img className="rest-logo1"
      alt="rest-picture" 
      src={CDN_URL+cloudinaryImageId}/>
      <h3>{name}</h3>
      <h5 className="description1">{cuisines.join(", ")}</h5>
      <h5 className="description1">{avgRating} stars</h5>
      <h5 className="description1">{costForTwo}</h5>
      <h5 className="description1">{sla?.slaString}</h5>
    </div>
  )
  };

  export default RestCards;