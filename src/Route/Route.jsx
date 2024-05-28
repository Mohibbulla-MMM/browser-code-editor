import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HTML from "../components/Home/HTML";
import MainLayOut from "../layOut/MainLayOut";
import CSS from "../components/Home/CSS";
import JS from "../components/Home/JS";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "html",
        element: <HTML />,
      },
      {
        path: "css",
        element: <CSS />,
      },
      {
        path: "js",
        element: <JS />,
      },
    ],
  },
]);
export default Route;
