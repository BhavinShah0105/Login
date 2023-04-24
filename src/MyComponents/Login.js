import React from 'react'

export const Login = () => {
    return (
        <div className="container">
            <div className="Login_container">
                <h1>Login</h1><br/><br/>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">UserName</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div> 
                <div className="input-group  mb-3">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Password</span>
                    <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                </div> <br/><br/>
                <div className="input-group input-group-sm mb-3">
                    <button className='btn btn1'> submit </button>
                </div> 
            </div>
            <div className="signup_container">
                <div className='text'>
                <h4>Don't Have an account</h4><br/><br/>
                <button className='btn btn2'>Sign Up</button>
                </div>
            </div>
        </div>
        
    )

}

