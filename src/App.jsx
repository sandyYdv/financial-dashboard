import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import AllCards from "./components/AllCards";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="Settings" element={<Settings />} />
          <Route path="cards" element={<AllCards />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
