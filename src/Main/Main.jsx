import React from 'react';
import Nav from '../Components/Nav/Nav';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet/>
        </div>
    );
};

export default Main;