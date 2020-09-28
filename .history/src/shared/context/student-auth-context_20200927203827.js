import {createContext} from 'react';

export const StudentAuthContext=  createContext({
    isLoggedIn : false,
    login: () => {},
    logout: () => {}
});