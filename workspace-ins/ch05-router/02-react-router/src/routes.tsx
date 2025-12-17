import Layout from "@components/Layout";
import Home from "@pages/Home";
import Page1 from "@pages/Page1";
import Page2 from "@pages/Page2";
import { createBrowserRouter, Navigate } from "react-router";

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/home', element: <Navigate to="/" /> },
      { path: '/page1', element: <Page1 /> },
      { path: '/page2', element: <Page2 /> },
    ] 
  },
]);

export default router;