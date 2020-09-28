import {createContext} from 'react';

export const StudentAuthContext=  createContext({
    isStudentLoggedIn : false,
    login: () => {},
    logout: () => {}
});