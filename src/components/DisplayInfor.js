import React from "react";
// import UserInfor from "./UserInfor";  // Bỏ dòng này đi

class DisplayInfor extends React.Component {
    render() {
        // Cách 1:
        
        // return (
        //     <div>
        //         <div>My Name's : {this.props.name}</div>
        //         <div>My Age's : {this.props.age}</div>
        //     </div>
        //);


        const { name, age } = this.props; 
        return (
            <div>
                <div>My Name's : {name}</div>
                <div>My Age's : {age}</div>
            </div>
        );
    }
}

export default DisplayInfor;

