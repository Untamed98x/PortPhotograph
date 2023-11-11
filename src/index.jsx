import React from "react";
import ReactDOMClient from "react-dom/client";
import { AllFrame } from "./screens/AllFrame";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<AllFrame />);
