import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useUser = () => {
    // the getAuth always inside the useUser()
    const auth = getAuth();
    const [ userInfo, setUserInfo ] = useState(() => {
        const user = auth.currentUser;
        const isLoading = !user;
        return { isLoading, user };
    })

    useEffect(()=> {
        return onAuthStateChanged(auth, (user) => {
            setUserInfo({ isLoading: false, user})
        });
    }, []);
    
    return userInfo;

}