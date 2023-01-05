import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { AnalyticsProvider } from "./providers/analytics/AnalyticsProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <AnalyticsProvider writeKey="zQGy2XnDrjpmv6GcwryRA8IyADsFIGts">
    <App />
  </AnalyticsProvider>
  // </React.StrictMode>
);
