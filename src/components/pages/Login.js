import React from "react";

function Login(){
    return(
        <div className="">
            <form>
                <input type="text" placeholder="Enter your email..."/>
                <input type="text" placeholder="Enter your password..."/>
                <input type="submit" placeholder="Login"/>
            </form>
        </div>
    )
}

export default Login;