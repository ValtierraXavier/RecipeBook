import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css';
import App from './App.js';
import HomeIndex from './Components/HomeIndex/homeIndex.jsx'
import MealDetails from './Components/MealDetails/MealDetails.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import EditPage from './Components/EditPage/EditPage.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        errorElement: <ErrorPage/>,
        children:[
        {
          index: true,
          element: <HomeIndex/>   
        },
        {
          path: "meal/:mealId",
          element: <MealDetails/>,
        },
        {
          path:'meal/edit/:mealId',
          element: <EditPage/>
        }
      ]
    },
    ],
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


