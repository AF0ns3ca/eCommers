import { createBrowserRouter } from "react-router-dom";
import Products from "../components/pages/Products";
import Home from "../components/pages/Home";
import Error404 from "../components/pages/Error404";
import App from "../components/templates/App";
import Login from "../components/pages/Login";

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      errorElement: <Error404 />,
      children: [
         {
            index: true,
            element: <Home />,
         },
         {
            path: "/productos",
            element: <Products />,
         },
      ],
   },
   {
      path: "/login",
      element: <Login />,
   },
   {
      path: "/register",
      element: <Register />,
   },
]);

export default router;
