import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as homeLoader } from "./pages/Home";
import { loader as viewMoreLoader } from "./component/projects/ViewMore";
// import { loader as projectsLoader } from "./pages/Projects";
import SingleProject from "./component/projects/SingleProject";

import {
  HomeLayout,
  Error,
  Home,
  About,
  LetsConnect,
  Projects,
} from "./pages/index";
import ViewMore from "./component/projects/ViewMore";

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
        path: "projects/category/:category",
        element: <ViewMore />,
        loader: viewMoreLoader,
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
