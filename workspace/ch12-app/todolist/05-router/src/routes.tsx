import About from "@/pages/About";
import TodoAdd from "@/pages/TodoAdd";
import TodoEdit from "@/pages/TodoEdit";
import TodoInfo from "@/pages/TodoInfo";
import TodoList from "@/pages/TodoList";
import Layout from "@components/Layout";
import Home from "@pages/Home";

import { createBrowserRouter, Navigate } from "react-router";

const router = createBrowserRouter([
  
  { path: '/', element: <Navigate to="/home" /> },
  { path: 'home', element: <Home /> },
  { path: 'about', element: <About /> },
  {
    path: '/todo',
    element: <Layout />,
    children: [
      { path: 'list', element: <TodoList /> },
      { path: 'add', element: <TodoAdd /> },
      { path: 'list/:_id',
        element:<TodoInfo/>,
        children:[{ path: 'edit', element: <TodoEdit /> },]
      }
    ],
  },
]);

export default router;