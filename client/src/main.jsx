import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "./routes/login";
import { PricingList } from "./routes/pricingList";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/pricing-list" element={<PricingList/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
