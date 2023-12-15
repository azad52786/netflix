import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import appStore from './utils/appstore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './tabs/Home';
import LandingPage from './component/LandingPage';
import Login from './tabs/Login';
import Signup from './tabs/Signup';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(document.getElementById('root'));



const approute = createBrowserRouter([
  {
    path:"/",
    element : <App/>,
    children : [
      {
        path : "/",
        element: <LandingPage/>
      },
      {
        path: "/login",
        element : <Login/>
      },
      {
        path : "/signup",
        element : <Signup/>
      },
      {
        path : "/home",
        element : <Home/>
      }
    ]
  },
 

])
root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={approute}/>
      <ToastContainer/>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
