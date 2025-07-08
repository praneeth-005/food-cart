import React from "react";
import ReactDOM from "react-dom/client";
import AppLayout from "./App";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Error from "./Components/Error";
import { createBrowserRouter, RouterProvider } from "react-router";
import Body from "./Components/Body";
import RestaurantManu from "./Components/RestaurantMenu";

{/*const Main = () => {
    return(
        <AppLayout />
    )
}
*/}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantManu />
            }
        ],
        errorElement: <Error />
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);