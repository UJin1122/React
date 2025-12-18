import { RouterProvider } from 'react-router';
import '@/App.css';
import router from '@/routes-lazy';

function App(){


  
  return (
    <>
       <RouterProvider router = { router } />
    </>
  );
}

export default App;