import About from "@/pages/About";
import ErrorPage from "@/pages/ErrorPage";
import NotFound from "@/pages/NotFound";
import TodoAdd from "@/pages/TodoAdd";
import TodoEdit from "@/pages/TodoEdit";
import TodoInfo from "@/pages/TodoInfo";
import TodoList from "@/pages/TodoList";
import Layout from "@components/Layout";
import Home from "@pages/Home";

import { createBrowserRouter, Navigate } from "react-router";
import { TodoInfoLoader, todoListLoader } from "@/routes/todo.loader";

const router = createBrowserRouter([
  
  { path: '/', element: <Navigate to="/home" /> },
  { path: 'home', element: <Home /> },
  { path: 'about', element: <About /> },
  {
    path: '/todo',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      // index 라우트: URL이 부모 라우트의 URL까지만 일치할 경우
      // 기본으로 렌더링 될 자식 라우트 지정
      { index: true, element: <TodoList /> }, 
      {
        path: 'list',
        loader: todoListLoader,
        element: <TodoList />,
      },
      { path: 'add', element: <TodoAdd /> },
      { path: 'list/:_id',
        loader: TodoInfoLoader,
        element:<TodoInfo/>,
        children:[{ path: 'edit', element: <TodoEdit /> },]
      }
    ],
  },
  { path: '*', element: <NotFound/> } // 위의 라우트와 일치하지 않은 모든 URL
]);

export default router;