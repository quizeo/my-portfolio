import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
