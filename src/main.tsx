import React, { Profiler } from "react";
import { createRoot } from "react-dom/client";

import App from "src/App";

import "styles/main.scss";

createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
