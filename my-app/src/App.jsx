import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import SideMenu from "./components/side-menu/SideMenu";

import "./styles/App.scss";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

function App() {
    const Layout = () => {
        return (
            <div className="main">
                <Navbar />
                <div className="container">
                    <div className="menu-container">
                        <SideMenu />
                    </div>
                    <div className="content-container">
                        <Outlet />
                    </div>
                </div>
                <Footer />
            </div>
        );
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
                {
                    path: "/about",
                    element: <About />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
