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


        const { ListUser } = this.props; //optiect destructuring

        console.log(ListUser);

        return (
            <div>
                {ListUser.map((user) => {
                    return (
                        <div key={user.id}>
                            
                            <div>My Name's : {user.name}</div>
                            <div>My Age's : {user.age}</div>

                            <hr/>

                        </div>
                    );
                })}

                
            </div>
        );
    }
}

export default DisplayInfor;

