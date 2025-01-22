import React from "react";

class UserInfor extends React.Component{

        state = {
            name: 'canh',
            address: 'hn',
            age: 23
        };
    
        // handleClick = (event) => {
        //     // Tạo giá trị tuổi ngẫu nhiên từ 1 đến 100
        //     const randomAge = Math.floor((Math.random() * 100) + 1); 
    
        //     // Cập nhật lại state
        //     this.setState({
        //     name: `canh`,
        //     age: randomAge
        //     });
    
        //     console.log("My age is", randomAge);
        // };
    
        handleOnChangeName = (event) => {
            this.setState({
            name: event.target.value
            });
        };
    
        handleOnChangeAge = (event) => {
            this.setState({
            age: event.target.value
            });
        };
    
        handleOnSubmit = (event) => {
            event.preventDefault(); // Ngăn chặn sự kiện mặc định của form
            console.log(this.state);
        };
    
    render() {
        return (
            <div>
                My name is {this.state.name} and I am {this.state.age} years old.  
            <br />
            
            <form onSubmit={this.handleOnSubmit} style={{ textAlign: "center" }}>
            <label>Your name: </label>
            <input 
                value={this.state.name}
                type="text" 
                onChange={this.handleOnChangeName}  
            />
            <br />
            
            <label>Your age: </label>
            <input 
                value={this.state.age}
                type="text" 
                onChange={this.handleOnChangeAge}  
            />
            <br />

            <button type="submit" style={{ marginTop: "10px" }}>Submit</button>
            </form>
            </div>
        );
    }
}

export default UserInfor;