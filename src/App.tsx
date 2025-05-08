import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as homeLoader } from "./pages/Home";
import SingleProject from "./component/projects/SingleProject";

import {
  HomeLayout,
  Error,
  Home,
  About,
  LetsConnect,
  Projects,
} from "./pages/index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "projects/:id",
        element: <SingleProject />,
      },
      {
        path: "contact",
        element: <LetsConnect />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
