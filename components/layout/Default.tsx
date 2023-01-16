import { ReactElement } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const defaultLayout = ({ children }:{children: ReactElement}) => {
  return ( 
    <div className="2xl:container flex gap-x-8 bg-stone-800 flex flex-col h-screen">
      <Navbar/>
      { children }  
      <Footer />
    </div>
   );
}
 
export default defaultLayout;