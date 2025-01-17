// class components
// fuctioon components

import React from "react";

class MyComponents extends React.Component{

    state = {
        name: ' canh',
        address: 'hn',
        age: 23
    };

    // JSX
    render(){
        return (
            <div> 
                    My name is {this.state.name} and form  {this.state.address}

            </div>
        );
    }
}

export default MyComponents;