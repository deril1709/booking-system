import { createContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { getTokenFromLocalStorage } from "./utils";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);
    useEffect(() => {
        if (!user) {
            axios.get('/api/users', {
                headers: { Authorization: 'Bearer ' + getTokenFromLocalStorage() }
            }).then(data => {
                setUser(data.data.data);
                console.log(data.data.data);
                setReady(true);
            });
        }
    }, [])
    return (
        <UserContext.Provider value={{ user, setUser, ready }}>
            {children}
        </UserContext.Provider>
    );
}