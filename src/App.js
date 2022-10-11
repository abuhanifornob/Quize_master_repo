import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Quiz from './components/Quiz/Quiz';

function App() {
  const router=createBrowserRouter([
    {
    path:"/",
    children:[
      {
        path:"/",
        element:<Quiz></Quiz>
      },
      {
        path:"blog",
        element:<Blog></Blog>
      }
    ],
    element:<Main></Main>
  }
])
  return (
    <div className="App">
     
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
