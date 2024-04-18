import { createContext, useEffect } from "react";
import { useState } from "react";
import { getTokenFromLocalStorage } from "./utils";
import instance from "./utils/http";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const [ready, setReady] = useState(false);
    const [hasChange, setHasChange] = useState(false);
    useEffect(() => {
        if (!user) {
            instance.get('/api/users', {
                headers: { Authorization: 'Bearer ' + getTokenFromLocalStorage() }
            }).then(data => {
                setUser(data.data.data);
            }).catch((error) => {
                console.error(error);
            }).finally(() => {
                setReady(true);
            });
        }
    }, [hasChange])
    return (
        <UserContext.Provider value={{
            user, setUser, ready, hasChange, handleChange: (isChange) => {
                setHasChange(isChange);
            }
        }}>
            {children}
        </UserContext.Provider>
    );
}