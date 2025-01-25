import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";


class MyComponents extends React.Component {
    render() {
        const myAge = 63;
        const myInfo = ['abc', 'def', 'ghi'];
        return (
            <div>
                <UserInfor />
                <br/><br/>
                <DisplayInfor name="canh" age="18"/>
                <hr/>
                <DisplayInfor name="toan" age= {myAge} myInfo= {myInfo}/>

            </div>
            
        );
    }
}

export default MyComponents;
