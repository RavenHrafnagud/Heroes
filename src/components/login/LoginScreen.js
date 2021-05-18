import React from 'react'

const LoginScreen=()=> {

    const handleLogin=()=>{
        console.log("click");
    }

    return (
        <div>
            <h1>Login</h1>
            <hr/>
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
        </div>
    )
}

export default LoginScreen
