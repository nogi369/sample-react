import React from "react";
import ReactDOM from "react-dom/client";
import { Counter } from "./Counter";
// import { PropsPage } from "./pages/props";
// import { EffectPage } from "./pages/effect";
// import { CallbackPage } from "./pages/callback";
// import { SamplePage } from './Pages/sample'
// import { AppPage } from "./Pages/app";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <SamplePage /> */}
    {/* <AppPage /> */}
    {/* <EffectPage /> */}
    {/* <CallbackPage /> */}
    {/* <PropsPage /> */}
    <Counter />
  </React.StrictMode>
);
