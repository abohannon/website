import React, { useEffect } from "react";

// Activates Google Optimize experiments
const activateOptimize = () => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "optimize.activate" });
};

const AppWrapper = ({ element }) => {
  useEffect(() => {
    activateOptimize();
  }, []);

  return element;
};
export const wrapRootElement = ({ element }) => (
  <AppWrapper element={element} />
);
