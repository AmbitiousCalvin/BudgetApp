import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import { BudgetsContextProvider } from "./contexts/useBudgets";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BudgetsContextProvider>
      <App />
    </BudgetsContextProvider>
  </StrictMode>
);
