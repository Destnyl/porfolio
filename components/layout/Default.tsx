import { ReactElement } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const defaultLayout = ({ children }: { children: ReactElement }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white overflow-x-hidden">
      {/* Animated background overlay */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/5 via-transparent to-secondary-600/5"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-600/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default defaultLayout;
