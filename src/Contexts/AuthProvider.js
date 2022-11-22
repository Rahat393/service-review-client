import React, { useEffect, useState } from 'react';
import { createContext } from "react";
import { getAuth, createUserWithEmailAndPassword, signOut, updateProfile, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import app from "../firebase/firebase.config";


export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (userInfo) => {
        return updateProfile(auth.currentUser, userInfo);
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user observer');
            setUser(currentUser)
            setLoading(false)
        });
        return () => unsubscribe()
    }, [])


    const authInfo = {
        signIn,
        createUser,
        loading,
        user,
        logOut,
        updateUser

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;