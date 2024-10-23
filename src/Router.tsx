import { createBrowserRouter } from "react-router-dom";
import About from "./screens/About";
import Home from "./screens/Home";
import Root from "./Root";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import User from "./screens/users/User";
import Followers from "./screens/users/Followers";
import Book from "./screens/users/Book";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users/:userId",
        element: <User />,
        children: [
          {
            path: ":books",
            element: <Followers />,
            children: [{ path: ":book", element: <Book /> }],
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
