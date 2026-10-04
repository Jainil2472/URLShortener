import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import ListingPage from "../pages/UrlListPage.jsx";
import ShortedLinkPage from "../pages/ShortedLinkPage.jsx";
import { authanticated } from "../service/urlService";
import { useEffect } from "react";
import useAuth from "../context/AuthContext";

export default function PrivateRoutes() {

    const { isAuthenticated, changeStatus } = useAuth();

    useEffect(() => {

        async function checkAuthentication() {

            try {
                const result = await authanticated();

                console.log("Authentication result:", result);

                changeStatus(true);

            } catch (error) {

                console.log("User is not authenticated");

                changeStatus(false);
            }
        }

        checkAuthentication();

    }, []);

    // Still checking
    if (isAuthenticated === null) {
        return <div>Checking authentication...</div>;
    }

    // Not authenticated
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // Authenticated
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/list" element={<ListingPage />} />
            <Route path="/shorted" element={<ShortedLinkPage />} />
        </Routes>
    );
}