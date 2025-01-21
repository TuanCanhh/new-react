// class components
// fuctioon components

import React from "react";

class MyComponents extends React.Component{

    state = {
        name: ' canh',
        address: 'hn ',
        age: 23
    }

    handleClick = (even) =>{
        //console.log(" click me my button")

        const randomAge = Math.floor((Math.random() * 100) + 1); 

        this.setState({
            name: `canh`,
            age: randomAge
        });

        console.log("My age is", this.state.age )
        
    };

    handleOnMoverOver(even) {
        //console.log(even.pageX)
        console.log("Mouse is hovering at position X:", event.pageX);

    }


    // render() {
    //     const { name, age } = this.state;
    
    //     return (
    //     <div>
    //         My name is {name} and I am {age} years old.
    //         <br />
    
    //         <button onMouseOver={this.handleOnMouseOver}>hover me</button>
    //         <br />
            
    //         <button onClick={this.handleClick}>click me</button>
    //     </div>
    //     );
    // }



    handleOnChange = (event) => {
        this.setState({
        name: event.target.value
        });
    };
    
    handleOnSubmit = (event) => {
        event.preventDefault();  // hàm ngăn chặn sự kiện mặc định của form
        console.log(this.state);
    };
    
    render() {
        return (
        <div>
            My name is {this.state.name} and I am {this.state.age} years old.
            <br />
            
            <form onSubmit={this.handleOnSubmit}>
            <input 
                type="text" 
                onChange={this.handleOnChange}
                value={this.state.name}
            />

            <button type="submit">Submit</button>
            </form>
        </div>
        );
    }
    }
    
    export default MyComponents;
