import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { useHistory, Link } from "react-router-dom";

export const NavBar = ({ user }) => {
    const auth = getAuth();
    const history = useHistory();


    const onClickSignOut = async() => {
        signOut(auth);
        history.push("/sign-in");
    }

    return (
        <nav>
            <Link to="/">
                <h1 className="app-heading">Members-Only App</h1>
            </Link>
            {user
                ? (
                <>
                <button
                className="sign-out-button"
                onClick={onClickSignOut}>Sign Out</button>
                <p className="logged-in-as space-before">Logged in as {user.email}</p>
                </>
                )
                : null}
        </nav>
    )
}