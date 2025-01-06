import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className="text-center m-4 p-4">
            <div className="text-center bg-gradient-to-r from-white via-red-300 to-red-400 w-6/12 m-auto px-4 pb-4 rounded-3x font-bold text-2xl">
            Cart
            </div>
            <div className="w-6/12 m-auto">
                <button  className="p-2 m-2 bg-black text-white rounded-lg"
                onClick={handleClearCart}
                >Clear Cart</button>
                {cartItems.length === 0 && (<h1>Cart is empty. Add items to the cart!</h1>)}
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
};

export default Cart;