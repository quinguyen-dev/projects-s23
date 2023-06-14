import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import App from "src/App";
import { Home } from "src/pages";

import "styles/main.scss";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
