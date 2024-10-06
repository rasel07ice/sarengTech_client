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
      <Toaster
        toastOptions={{
          duration: 50000,
          classNames: {
            error: "bg-secondary",
            info: "bg-blue-400",
            success: "bg-primary",
            warning: "bg-orange-400",
            title: "text-gray-700 text-xl",
            description: "text-white",
            actionButton: "bg-secondary",
            cancelButton: "bg-orange-400",
            closeButton: "bg-lime-400",
          },
        }}
      />
    </div>
  );
};

export default MainLayout;
