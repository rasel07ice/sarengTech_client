import Banner from "@/components/banner/Banner";
import Footer from "@/components/footer/Footer";
import Header from "@/components/navbar/Header";
import { Toaster } from "@/components/ui/sonner";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="container">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default MainLayout;
