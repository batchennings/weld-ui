import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme } from "./theme/theme";
import Index from "./pages/Index";
import Companies from "./pages/Companies";
import Company from "./pages/Company";

const queryClient = new QueryClient();

const App = () => (
    <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/companies" element={<Companies />} />
                    <Route path="/company/:id" element={<Company />} />
                    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    </ThemeProvider>
);

export default App;
