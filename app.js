const heading1 = React.createElement(
    "div",
    {id: "parent"}, 
    React.createElement(
    "div",
    {id: "child"}, 
    [React.createElement("h1",{}, "This is Kushagra"), React.createElement("h2",{},"Mishra")]
    ));

    const root1 = ReactDOM.createRoot(document.getElementById("root"));
    root1.render(heading1);