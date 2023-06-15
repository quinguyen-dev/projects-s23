import React, { Profiler, ProfilerOnRenderCallback } from "react";
import {
    Route,
    Routes,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import { Home } from "src/pages";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Home />}>
            <Route path="*" element={<Home />} />
        </Route>
    )
);

export default function App() {
    return (
        // <Profiler id="app" onRender={callback}>
        <main>
            <RouterProvider router={router} />
        </main>
        // </Profiler>
    );
}
