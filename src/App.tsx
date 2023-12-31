import { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  useOutlet,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  HtmlRender,
  NoPageFound,
  RevolvingAsset,
  Parallax,
} from "src/pages";

function AnimatedOutlet() {
  const o = useOutlet();
  const [outlet] = useState(o);

  return <>{outlet}</>;
}

function RootLayout() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className="parent"
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        exit={{ opacity: 0 }}
      >
        <AnimatedOutlet />
      </motion.div>
    </AnimatePresence>
  );
} /* TODO: change to { m } */

const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: "revolving-asset", Component: RevolvingAsset },
      { path: "html-render", Component: HtmlRender },
      { path: "parallax", Component: Parallax },
      { path: "*", Component: NoPageFound },
    ],
  },
]);

export default function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}
