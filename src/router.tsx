import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthLayout from "./layouts/AuthLayout";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: 'auth',
        element: <AuthLayout/>,
        children: [
            {
                path: 'login',
                element: <LoginPage/>
            }
        ]
    }
])

export default router