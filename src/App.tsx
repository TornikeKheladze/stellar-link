import { Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import Layout from "./components/layout/Layout";
import Brands from "./pages/Brands";
import Careers from "./pages/Careers";
import Career from "./pages/Career";
import Projects from "./pages/Projects";
import Catalogue from "./pages/Catalogue";
import Partners from "./pages/Partnets";

function App() {
  return (
    <Layout>
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Brands />} path="/brands" />
        <Route element={<Projects />} path="/projects" />
        <Route element={<Partners />} path="/partners" />
        <Route element={<Careers />} path="/careers" />
        <Route element={<Career />} path="/careers/:id" />
        <Route element={<Catalogue />} path="/catalogue" />
      </Routes>
    </Layout>
  );
}

export default App;
