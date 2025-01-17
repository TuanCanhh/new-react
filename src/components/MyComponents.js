// class components
// fuctioon components

import React from "react";

class MyComponents extends React.Component{

    state = {
        name: ' canh',
        address: 'hn ',
        age: 23
    };

    handleClick(even){
        console.log(" click me my button")
        console.log("My name is", this.state.name )
    }

    handleOnMoverOver(even) {
        console.log(even.pageX)
    }

    // JSX
    render(){
        return (
            <div> 
                    My name is {this.state.name} and form  {this.state.address}
                    <button onMouseOver = {this.handleOnMoverOver}>hover me</button>
                    <button onClick = {this.handleClick}>click me</button>
            </div>
        );
    }
}

export default MyComponents;