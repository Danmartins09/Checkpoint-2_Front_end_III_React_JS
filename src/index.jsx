import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from "./Routes/Home";
import Login from "./Routes/Login";
import Detail from "./Routes/Detail";
import App from "./App";
import "./index.css";
import { createBrowserRouter, Navigate, RouterProvider, redirect } from "react-router-dom";
import { ThemeProvider } from "./Hooks/useTheme";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { AuthProvider } from "./Hooks/useAuth";

const root = ReactDOM.createRoot(document.getElementById("root"));
//Lembre-se de configurar suas rotas e seu contexto aqui
const routerApp = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [{
      path: '',
      loader: () => redirect('/home')
    }, 
    {
      path: 'home',
      element: <Home />
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'dentist/:matricula',
      element: <Detail />
    },
    {
      path: "*",
      loader: () => redirect("/home")
    }]   
  }
])

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router = {routerApp}/>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
