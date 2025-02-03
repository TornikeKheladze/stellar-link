import { useLocation } from "react-router";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <main>
      <Header />
      {pathname === "/" ? (
        <div>{children}</div>
      ) : (
        <div className="mx-7 lg:mx-28 lg:mt-40 mt-20">{children}</div>
      )}
      <Footer />
    </main>
  );
};

export default Layout;
