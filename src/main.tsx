import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { SearchProvider } from "./contexts/searchContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SearchProvider>
      <App />
    </SearchProvider>
  </React.StrictMode>
);
