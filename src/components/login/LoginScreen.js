import React from 'react'

function LoginScreen({history}){

    const handleLogin=()=>{
        history.push("/");
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
