import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layouts/Main';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Quiz from './components/Quiz/Quiz';
import QuizDetails from './components/QuizDetails/QuizDetails';
import Statistical from './components/Statistical/Statistical';
import OrurOfFour from './components/FourOfFour/FourOfFour';
import FourOfFour from './components/FourOfFour/FourOfFour';

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
        path:"statistical",
        loader:async()=>{
          return fetch("https://openapi.programming-hero.com/api/quiz")
        },
        element:<Statistical></Statistical>
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
  },
  {
    path:"/*",
    element:<FourOfFour></FourOfFour>
    }
])
  return (
    <div className="App">
     
    <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
