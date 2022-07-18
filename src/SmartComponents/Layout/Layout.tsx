import React from 'react'
import { Outlet } from 'react-router-dom';
import { Header, BodyWrapper } from '../index';


const Layout = () => {
    return (
        <>
            <Header />
            <BodyWrapper>
                <Outlet />
            </BodyWrapper>
        </>

    )
}

export default Layout