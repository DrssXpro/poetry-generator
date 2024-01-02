import { Home, Poems, Poet, Rhythm, Search } from "./pages";
import { Navigate, RouteObject } from "react-router-dom";

const routes: Array<RouteObject> = [
  {
    path: "/",
    element: <Navigate to="/home"></Navigate>,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/poet",
    element: <Poet />,
  },
  { path: "/rhythm", element: <Rhythm /> },
  {
    path: "/poems",
    element: <Poems />,
  },
];

export { routes };
