import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { MENU_PIC_URL } from "../utils/constants";

const ItemList = ({items}) => {
    console.log(items);

    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //dispatch an action
        dispatch(addItem(item));
    }

    return (
        <div>
           {items.map((item) => (
               <div key={item.card.info.id} className="p-2 m-2 border-b-2 text-left flex justify-between">
                   
                   <div className="w-9/12">
                   <div className="py-2">
                       <span className="font-semibold">{item.card.info.name}</span>
                       <span className="font-normal"> - ₹{item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100}</span>
                   </div>
                   <div>
                   <p className="text-xs mr-2">{item.card.info.description}</p>
                   </div>
             
               </div>
               <div className="w-3/2 h-36">
                   <div className="absolute">
               <button className="p-2 w-16 mx-12 my-[106px] bg-white text-green-600 font-bold shadow-lg rounded-xl"
               onClick = {() => handleAddItem(item)}>
                   ADD+</button>
               </div>
               <img src={MENU_PIC_URL+item.card.info.imageId} className="object-cover w-40 rounded-2xl h-36 ml-auto"></img>
               </div>
               </div>
           ))}

        </div>
    );
};

export default ItemList;