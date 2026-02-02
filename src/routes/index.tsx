import { createBrowserRouter, Outlet } from "react-router-dom";
import App from "../App";
import Users from "../modules/users";
import Products from "../modules/products";
import MultiSelectList from "../components/custom/multi-select-list";
import { ProtectedRoute } from "./protected-route";
import Login from "../modules/login";


// src/routes/index.ts
const router = createBrowserRouter([
    {
        path: "/login",
        Component: Login
    },
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "dashboard",
                element: <ProtectedRoute><Outlet/></ProtectedRoute>,
                children: [
                    { path: "users", Component: Users },
                    { path: "products", Component: Products },
                    { path: "teams", Component: MultiSelectList },
                    { index: true, Component: Users } // Default
                ]
            }
        ]
    }
]);

export { router };