import { createBrowserRouter, Navigate } from "react-router";

// 정적 import(번들링 할 때 컴포넌트를 하나의 파일에 포함시킴)
import Layout from "@components/Layout";
import { lazy, Suspense } from "react";

// 동적 import(해당 컴포넌트가 필요한 시점에 다운 받음)
const Home = lazy(() => import("@pages/Home"));
const Page1 = lazy(() => import("@pages/Page1"));
const Page2 = lazy(() => import("@pages/Page2"));

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Layout />,
    children: [
      { index: true, element: <Suspense key="home" fallback={<div>Home 로딩중...</div>}  ><Home /></Suspense> },
      { path: '/home', element: <Navigate to="/" /> },
      { path: '/page1', element: <Suspense key="page1" fallback={<div>page1 로딩중...</div>}  ><Page1 /></Suspense> },
      { path: '/page2', element: <Suspense key="page2" fallback={<div>page2 로딩중...</div>}  ><Page2 /></Suspense> },
    ] 
  },
]);

export default router;