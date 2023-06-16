import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, NoPageFound, RevolvingAsset } from "src/pages";

const router = createBrowserRouter([
    { index: true, Component: Home },
    { path: "*", Component: NoPageFound },
    { path: "revolving-asset", Component: RevolvingAsset },
]);

export default function App() {
    return (
        <main>
            <RouterProvider router={router} />
        </main>
    );
}

// TODO check if I semantically need main here ?
