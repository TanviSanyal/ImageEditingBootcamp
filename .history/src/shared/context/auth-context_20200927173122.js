import {createContext} from 'react';

export const InstructorAuthContext=  createContext({
    isLoggedIn : false,
    login: () => {},
    logout: () => {}
});