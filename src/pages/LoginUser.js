import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../actions/userActions'

export default function LoginUser() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    localStorage.setItem("merchUser", 1)

    useEffect(() => {
        if (localStorage.getItem('currentUser')) {
            window.location.href='/'
        }
    }, [])

    function login() {
        const user = {
            email,
            password
        }
        dispatch(loginUser(user))
    }

    return (
        <div>
            <div>
                <div className="row justify-content-center mt-5">
                    <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
                        <h2 className="text-center" style={{ fontSize: '35px', color: "black" }}>Login</h2>
                        <div>
                            <input required type="text" placeholder="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            <input
                                required
                                type="text"
                                placeholder="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value) }} />
                            <button className="btn mt-3" onClick={login}> LOGIN </button>
                            <br/>
                            <a style={{color: 'black'}} className="btn m-2" href='/register'> Click here to register </a>
                        </div>


                    </div>
                </div>
            </div>

        </div>
    )
}