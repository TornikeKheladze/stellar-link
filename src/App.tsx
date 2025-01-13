import { Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import Layout from "./components/layout/Layout";
import Brands from "./pages/Brands";

function App() {
  return (
    <Layout>
      <Routes>
        <Route element={<Landing />} path="/" />
        <Route element={<Brands />} path="/brands" />
        <Route element={<div>meore gverdi</div>} path="/test" />
      </Routes>
    </Layout>
  );
}

export default App;
