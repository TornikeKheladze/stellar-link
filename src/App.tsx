import { Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import Layout from "./components/layout/Layout";
import Brands from "./pages/Brands";
import Careers from "./pages/Careers";
import Career from "./pages/Career";

function App() {
  return (
    <Layout>
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Brands />} path="/brands" />
        <Route element={<Careers />} path="/careers" />
        <Route element={<Career />} path="/careers/:id" />
      </Routes>
    </Layout>
  );
}

export default App;
