import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './components/Pages/HomePage/homePage';
import AlbumsPage from './components/Pages/AlbumsPage/albumsPage'; 
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
{
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <HomePage />
    }, 
    {
      path: "/album/albumId",
      element: <AlbumsPage />
    }
  ]
}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
