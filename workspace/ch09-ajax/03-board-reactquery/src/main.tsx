import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import BoardList from './pages/board/BoardList';
import BoardListAdd from './pages/board/BoardListAdd';

const queryClient = new QueryClient();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={ queryClient }>
      <h1>03 React Query : Tanstack Query 라이브러리</h1>
      <BoardListAdd />
      <BoardList />
      <ReactQueryDevtools/>
    </QueryClientProvider>
  </StrictMode>,
)
