import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
       // console.log(this.props.name + "Child Constructor");

        this.state = {
            userInfo:{
                name :"Dummy",
                location:"Default",
                avatar_url:"default"
            },
        };
    }

    async componentDidMount(){
       // console.log(this.props.name +"Child Component Did Mount");

       const data = await fetch("https://api.github.com/users/kushu123");
       const json  = await data.json();
       console.log(json);

       this.setState({
           userInfo: json,
       });
    }

    render(){
       // console.log(this.props.name +"Child Render");
       const { name, location, avatar_url } = this.state.userInfo;
        
        return (
            <div className="user-card">
                <img className ="user-card-img" src={avatar_url}></img>
            <h3>Name: {name}</h3>
            <h4>Location: {location}</h4>
            <h4>Contact: kushagra.mishra@rocketmail.com</h4>
        </div>
        );
    }
}

export default UserClass;


/*
----MOUNTING-----

Constructor(dummy)
Rneder(dummy)
<HTML> dummy
ComponentDidMount
<API Call>
<this.setState - state variable is updated

----UPDATE-----

render(API Data)
<HTML> new API Data
ComponentDidUpdate
*/