import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
import Contact from './Pages/Contact';
import Record from './Pages/Record';

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";





const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "home",
        element: <App />,
    },
    {
        path: "contact",
        element: <Contact/>
    },
    {
        path: "record",
        element: <Record/>
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router}/>
);

