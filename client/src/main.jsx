import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Login } from "./routes/login";
import { PricingList } from "./routes/pricingList";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
  import { ToastContainer, toast } from 'react-toastify';

const queryClient = new QueryClient();


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route index element={<Login />} />
          <Route path="/pricing-list" element={<PricingList />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
