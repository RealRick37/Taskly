import { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    if (localStorage.getItem("access")) {
        return <Navigate to="/" replace />;
}

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors({});

        if (!username.trim()) {
            toast.error("Username is required.");
            return;
        }

        if (!password.trim()) {
            toast.error("Password is required.");
            return;
        }

        setLoading(true);

        try {
            const data = await login(username, password);

            localStorage.setItem("access", data.access);
            localStorage.setItem("refresh", data.refresh);
            
            toast.success("Welcome back!");
            navigate("/");
        } catch (error) {

            if (error.response?.status === 401) {
                // setErrors(error.response.data);
                toast.error("Invalid username or password.");
            } else if (error.response?.status === 400) {
                toast.error("Please check your input.");
            } else {
                toast.error("Something went wrong.");
            }

        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout
            title="Welcome Back"
            subtitle="Login to continue managing your tasks."
            footerText="Don't have an account?"
            footerLink="/register"
            footerLinkText="Register"
        >
            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="
                        w-full
                        border
                        rounded-lg
                        px-4
                        py-2.5 sm:py-3
                        mb-4
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-500
                    "
                />

                {errors.username && (
                    <p className="text-red-500 text-sm mb-3">
                        {errors.username[0]}
                    </p>
                )}

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="
                        w-full
                        border
                        rounded-lg
                        px-4
                        py-2.5 sm:py-3
                        mb-4
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-500
                    "
                />

                {errors.password && (
                    <p className="text-red-500 text-sm mb-3">
                        {errors.password[0]}
                    </p>
                )}

                {errors.detail && (
                    <p className="text-red-500 text-sm mb-4">
                        {errors.detail}
                    </p>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className={`
                        w-full
                        py-3
                        rounded-lg
                        text-white
                        transition
                        ${
                            loading
                                ? "bg-blue-400 cursor-not-allowed"
                                : "bg-blue-600 hover:bg-blue-700"
                        }
                    `}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

            </form>
        </AuthLayout>
    );
}

export default Login;