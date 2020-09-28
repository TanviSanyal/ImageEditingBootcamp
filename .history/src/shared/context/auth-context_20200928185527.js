import {createContext} from 'react';

export const InstructorAuthContext=  createContext({
    isLoggedIn : false,
    login: () => {},
    logout: () => {}
});
export const StudentAuthContext=  createContext({
    isLoggedIn : false,
    login: () => {},
    logout: () => {}
});