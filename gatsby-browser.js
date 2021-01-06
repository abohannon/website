import React from "react";
import Helmet from "react-helmet";

// Activates Google Optimize experiments
const activateOptimize = () => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "optimize.activate" });
};

export const onRouteUpdate = () => {
  activateOptimize();
};

export const wrapRootElement = ({ element }) => (
  <>
    <Helmet
      meta={[{ property: "referrer", content: "origin-when-cross-origin" }]}
    />
    {element}
  </>
);
