import React from "react";
import Usercontext from "../context/UserContext";
function Profile(){
    const {user} = useContext(Usercontext);
        if(!user){
            return <div>Please Login</div>
        }
        else{
            return <div>Welcome {user.username}</div>
        }
}
export default Profile;