import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, NoPageFound } from "src/pages";

const router = createBrowserRouter([
    { index: true, Component: Home },
    { path: "*", Component: NoPageFound },
]);

export default function App() {
    return (
        <main>
            <RouterProvider router={router} />
        </main>
    );
}

// TODO check if I semantically need main here ?
