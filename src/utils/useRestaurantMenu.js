import { useEffect, useState } from "react";
import { MENU_URLE, MENU_URLF } from '../utils/constants';

const useRestaurantMenu = (resId) => {

    const [ resInfo, setResInfo ] = useState(null);

    useEffect(()=> {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(MENU_URLF+resId+MENU_URLE);
        const json  = await data.json();
        setResInfo(json.data);
    };

    return resInfo;
};

export default useRestaurantMenu;

