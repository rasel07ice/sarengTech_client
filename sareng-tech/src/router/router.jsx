import AboutUs from "@/components/aboutus/AboutUs";
import ContactUs from "@/components/contactus/ContactUs";
import CourseDetails from "@/components/courses/CourseDetails";
import CourseList from "@/components/courses/CourseList";
import HowItWorks from "@/components/howitworks/HowItWorks";
import ImageGallery from "@/components/imagegallery/ImageGallery";
import Login from "@/components/login/Login";
import Register from "@/components/register/Register";
import MainLayout from "@/Layouts/MainLayout";
import HomePage from "@/pages/HomePage";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/courses",
        element: (
          <PrivateRoute>
            <CourseList />
          </PrivateRoute>
        ),
        loader: () =>
          fetch(`https://sareng-tech-server.vercel.app/coursedetails`),
      },
      {
        path: "/courses/:id",
        element: (
          <PrivateRoute>
            <CourseDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://sareng-tech-server.vercel.app/courses/${params.id}`),
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contactus",
        element: <ContactUs />,
      },
      {
        path: "/imagegallery",
        element: <ImageGallery />,
      },
      {
        path: "/howitworks",
        element: <HowItWorks />,
      },
    ],
  },
]);

export default router;
