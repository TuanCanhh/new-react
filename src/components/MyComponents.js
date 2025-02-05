import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";


class MyComponents extends React.Component {
    state = {
        ListUser: [
            { id: 1, name: 'canh', age: 18 },

            { id: 2, name: 'toan', age: 20 },
            
            { id: 3, name: 'thanh', age: 22}
        ]
    };
    render() {

        // DRY - Don't Repeat Yourself
        return (
            <div>
                <UserInfor />
                <br/><br/>

                <DisplayInfor 
                ListUser={this.state.ListUser}/>

            </div>
            
        );
    }
}

export default MyComponents;
