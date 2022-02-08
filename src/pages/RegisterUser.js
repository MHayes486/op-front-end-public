import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../actions/userActions'
import Error from '../components/Error'
import Success from '../components/Success'
import Loading from '../components/Loading'

export default function RegisterUser() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const dispatch = useDispatch()
    function register() {
        if (password !== confirmPassword) {
            alert("Passwords do not match")
        } else {
            const user = {
                name,
                email,
                password
            }
            console.log(user)
            dispatch(registerUser(user))
        }
    }

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-left">




                    <h2 className="text-center" style={{ fontSize: '35px', color: "black" }}>Register User</h2>
                    <div>
                        <input required type="text" placeholder="name" className="form-control" value={name} onChange={(e) => { setName(e.target.value) }} />
                        <input required type="text" placeholder="email" className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        <input
                            required
                            type="text"
                            placeholder="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }} />
                        <input
                            required
                            type="text"
                            placeholder="confirm password"
                            className="form-control"
                            value={confirmPassword}
                            onChange={(e) => { setConfirmPassword(e.target.value) }} />
                        <button className="btn mt-3" onClick={register}> REGISTER </button>
                        <a href='/login'> Click Here to Login </a>
                    </div>


                </div>
            </div>
        </div>
    )
}