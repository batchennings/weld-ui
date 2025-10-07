import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Companies from "./pages/Companies";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/companies" element={<Companies />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            </Routes>
        </BrowserRouter>
    </QueryClientProvider>
);

export default App;
