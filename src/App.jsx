import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // We'll create this
import HomePage from "./pages/HomePage";
import CustomerPage from "./pages/CustomerPage";
import LoanPage from "./pages/LoanPage";
import RepaymentPage from "./pages/RepaymentPage";
import ReportPage from "./pages/ReportPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="customers" element={<CustomerPage />} />
        <Route path="loans" element={<LoanPage />} />
        <Route path="repayments" element={<RepaymentPage />} />
        <Route path="reports" element={<ReportPage />} />
        {/* Add a catch-all for 404 if desired */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
