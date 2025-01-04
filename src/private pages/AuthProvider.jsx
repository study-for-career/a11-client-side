import React, { createContext, useEffect, useState } from 'react';
import { auth } from './../../firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";



export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const [loader, setLoader] = useState(true)


    // Create a new user
    const createUser = (email, password) => {
        setLoader(false)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Logged in a user
    const loginUser = (email, password) => {
        setLoader(false)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Login with google
    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
        setLoader(true)
        return signInWithPopup(auth, provider)
    }

    const updateUser = (userInfo) => {
        setLoader(false)
        return updateProfile(auth.currentUser, userInfo)
    }

    // Logged out a user
    const logoutUser = () => {
        setLoader(false)
        return signOut(auth)
    }

    // User Activity
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoader(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    // Theme Controller

    const [theme, setTheme] = useState('light')

    const info = {
        createUser,
        loginUser,
        logoutUser,
        googleLogin,
        user,
        setUser,
        loader,
        updateUser,
        theme,
        setTheme
    }

    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;