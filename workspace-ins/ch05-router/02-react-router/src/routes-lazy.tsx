import { createBrowserRouter, Navigate } from "react-router";
import { lazy, Suspense } from "react";

// 정적 import(번들링 할때 컴포넌트를 하나의 파일에 포함시킴)
import Layout from "@components/Layout";
import { SyncLoader } from "react-spinners";

// 동적 import(해당 컴포넌트가 필요한 시점에 다운 받음)
const Home = lazy(() => import("@pages/Home"));
const Page1 = lazy(() => import("@pages/Page1"));
const Page2 = lazy(() => import("@pages/Page2"));

const router = createBrowserRouter([
  { 
    path: '/', 
    element: <Layout />,
    children: [
      { index: true, element: <Suspense key="home" fallback={<div>Home 로딩중...</div>}><Home /></Suspense> },
      { path: '/home', element: <Navigate to="/" /> },
      { path: '/page1', element: <Suspense key="page1" fallback={<div>Page1 로딩중...</div>}><Page1 /></Suspense> },
      { path: '/page2', element: <Suspense key="page2" fallback={<SyncLoader />}><Page2 /></Suspense> },
    ] 
  },
]);

export default router;