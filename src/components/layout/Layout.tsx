import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main>
      <Header />
      <div className="mx-7 lg:mx-28">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
