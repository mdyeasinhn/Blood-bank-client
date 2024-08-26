import React from 'react';
import Nav from '../Components/Nav/Nav';
import { Outlet, useLocation } from 'react-router-dom';

const Main = () => {
    const loaction = useLocation();
    const noHeaderFooter = location.pathname.includes('login')
    return (
        <div>
           { noHeaderFooter || <Nav></Nav>}
            <Outlet/>
        </div>
    );
};

export default Main;