import Footer from "./Footer";
import Header from "./Header";
import { motion } from "framer-motion";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main>
      <Header />
      <motion.div className="mx-7 lg:mx-28 lg:mt-40 mt-20">
        {children}
      </motion.div>
      <Footer />
    </main>
  );
};

export default Layout;
