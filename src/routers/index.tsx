import { Home, Poems, Poet, Rhythm, Search, SearchResult } from "./pages";
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
  {
    path: "/poems_list/:queryMethod/:queryId",
    element: <SearchResult />,
  },
];

export { routes };
