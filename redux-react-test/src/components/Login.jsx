import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../features/user';

export function Login() {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(login({ name: "pedro", age: 25, email: "tutu@tutu.com" }))}>Login</button>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </div>
    )
}
