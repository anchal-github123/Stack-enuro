import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../MainLayout";

// Simple Loader component for fallback
const Loader = () => (
  <div className="flex items-center justify-center h-screen bg-white">
    <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
  </div>
);

// Lazy-loaded pages
const Home = lazy(() => import("../pages/Home"));
const WebDevelopment = lazy(() => import("../pages/itServices/WebDevelopment"));
const AppDevelopment = lazy(() => import("../pages/itServices/AppDevelopment"));
const CustomSoftwareService = lazy(() => import("../pages/itServices/CustomSoftwareService"));
const AIChatBoat = lazy(() => import("../pages/itServices/AIChatBoat"));
const SocialMediapage = lazy(() => import("../pages/itServices/SocialMediapage"));
const StartupResistation = lazy(() => import("../pages/otherServices/StartupResistation"));
const GSTResistation = lazy(() => import("../pages/otherServices/GSTResistation"));
const Branding = lazy(() => import("../pages/otherServices/Branding"));
const Contact = lazy(() => import("../pages/Contact"));
const Error = lazy(() => import("../pages/Error"));

// Child routes array for cleaner mapping
const childRoutes = [
  { index: true, element: <Home /> },
  { path: "Contact", element: <Contact /> },
  { path: "WebDevelopment", element: <WebDevelopment /> },
  { path: "AppDevelopment", element: <AppDevelopment /> },
  { path: "CustomSoftwareSolution", element: <CustomSoftwareService /> },
  { path: "AIChatBoat", element: <AIChatBoat /> },
  { path: "SocialMediaMarketing", element: <SocialMediapage /> },
  { path: "StartupResistation", element: <StartupResistation /> },
  { path: "GSTResistation", element: <GSTResistation /> },
  { path: "Branding", element: <Branding /> },
];

// Router configuration
const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: childRoutes,
  },
  { path: "*", element: <Error /> },
]);

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
}
