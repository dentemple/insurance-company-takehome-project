import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Quote, nestedScreens } from "src/features";
import { ROUTES } from "./constants";

const router = createBrowserRouter([
  {
    path: ROUTES.QUOTE,
    element: <Quote />,
    children: nestedScreens,
  },
]);

function Screens() {
  return <RouterProvider router={router} />;
}

export default Screens;
