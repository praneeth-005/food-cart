import React, { lazy } from "react";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Outlet } from "react-router";

const AppLayout = () => {
    return(
        <div className="layout">
            <Header />
            <Outlet />
        </div>
    )
}
export default AppLayout;