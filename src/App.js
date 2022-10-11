import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Quiz from './components/Quiz/Quiz';
import QuizDetails from './components/QuizDetails/QuizDetails';

function App() {
  const router=createBrowserRouter([
    {
    path:"/",
    children:[
      {
        path:"/",
        loader:async()=>fetch('https://openapi.programming-hero.com/api/quiz') ,
        element:<Quiz></Quiz>
      },
      {
        path:"blog",
        element:<Blog></Blog>
      },
      {
        path:"quizDetails/:quizID",
        loader:async({params})=>{
           return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizID}`)
        },
        element:<QuizDetails></QuizDetails>
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
