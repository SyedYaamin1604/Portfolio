import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './Components/Navbar';
import 'animate.css';
import './index.css';


const Layout = () => {
    return (
        <>
            <div id='div' className='bg-fixed bg-center'>
                <Navbar />
                <Outlet />
            </div>
        </>
    )
}

export default Layout