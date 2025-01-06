import React from "react";
import  User  from "../components/User";
import UserClass from "../components/UserClass";
import UserContext from '../utils/UserContext';

class About extends React.Component{

    constructor(props){
        super(props);
        //console.log("Parent Constructor");
    }

    componentDidMount(){
        //console.log("Parent Component Did Mount");
    }
    render(){
       // console.log("Parent Render");
        return (
            <div>
                <h1>About Page</h1>
                <div>
                    <UserContext.Consumer>
                        {({loggedInUser}) => <h1>{loggedInUser}</h1>}
                    </UserContext.Consumer>
                </div>
                <UserClass name={"Kushagra Mishra"} location={"RaeBareli"}/>
            </div>
        )
    }
}

export default About;



/*
 - Parent Constructor
 - Parent Render

 - First Constructor
 - First Render

 - Second Constructor
 - Second Render

 <DOM updated in single batch>

 - First componentDidMount
 - Second componentDidMount

 - Parent componentDidMount

*/