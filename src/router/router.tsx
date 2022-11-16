import { createBrowserRouter } from "react-router-dom";
import { AuthLayout } from "../layout/Auth/AuthLayout";
import { Welcome } from "../view/Welcome/Welcome";
import { validateSession } from "./middleware";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    loader: validateSession
  },
  {
    path: "bienvenido",
    element: <Welcome />
  }
]);

export default router;
