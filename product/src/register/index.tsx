import * as React from "react";
import { createRoot } from "react-dom/client";

function App() {
    return <div>Hello, World!</div>;
}
const root = createRoot(document.getElementById("app-root"));

root.render(<App />);