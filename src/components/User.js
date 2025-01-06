import { useState } from "react";

const User = (props) => {

        const [count] = useState(0);

    return(
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h3>Name: {props.name}</h3>
            <h4>Location: RaeBareli</h4>
            <h4>Contact: kushagra.mishra@rocketmail.com</h4>
        </div>
    )
}

export default User;