"use client"

import { useSelector ,useDispatch } from "react-redux";
import Button from "./Button"

import type { RootState } from "@/app/lib/store";
import type { AppDispatch } from '@/app/lib/store'
import {login, logout} from "@/app/lib/authSlice"
export default function AuthStatus(){

    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
    const username = useSelector((state: RootState) => state.auth.username);
    const dispatch = useDispatch<AppDispatch>()

    function handleLogin() {
    
    dispatch(login("kevin"));
  }
  function handleLogout() {
    
    dispatch(logout());
  }


    return (
    <>
        {isLoggedIn ? (
            <>
                <span>Logged in as {username}</span>
                <Button variant="secondary" onClick={handleLogout}>Logout</Button>
            </>
        ) : (
            <Button variant="primary" onClick={handleLogin}>Login</Button>
        )}
    </>
);
}
