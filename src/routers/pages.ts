import { lazy } from "react";

const Home = lazy(() => import("@/pages/Home/index"));
const Search = lazy(() => import("@/pages/Search/index"));
const Poet = lazy(() => import("@/pages/Poet/index"));
const Rhythm = lazy(() => import("@/pages/Rhythm/index"));
const Poems = lazy(() => import("@/pages/Poems/index"));

export { Home, Search, Poet, Rhythm, Poems };
