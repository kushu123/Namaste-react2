import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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
    <div className ="m-4 p-4 w-[250px] h-[510px] rounded-lg bg-gray-100 hover:bg-gray-300">
      <img className="object-cover rounded-lg "
      alt="rest-picture" 
      src={CDN_URL+cloudinaryImageId}/>
      <h3 className ="font-bold py-3 text-xl">{name}</h3>
      <h5 className="description1">{cuisines.join(", ")}</h5>
      <h5 className="description1">{avgRating} <FontAwesomeIcon icon={faStar} /></h5>
      <h5 className="description1">{costForTwo}</h5>
      <h5 className="description1">{sla?.slaString}</h5>
    </div>
  )
  };


  export const withPromotedLabel = (RestCards) => {
    return (props) => {
      return (
        <div>
          <label className="absolute bg-black text-white m-2 p-1 rounded-lg">Promoted</label>
          <RestCards {...props}/>
        </div>
      );
    };
  };
  export default RestCards;