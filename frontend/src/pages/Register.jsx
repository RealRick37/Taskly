import { useState } from "react";
import { register } from "../services/authService";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

function Register() {
    const [username, setUsername]=useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword]=useState("");
    const [confirmPassword, setConfirmPassword]=useState("");
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);

    const navigate=useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();

    setErrors({});

    if (!username.trim()) {
        setErrors({
            username: ["Username is required."]
        });
        return;
    }

    if (!email.trim()) {
        setErrors({
            email: ["Email is required."]
        });
        return;
    }

    if (!password.trim()) {
        setErrors({
            password: ["Password is required."]
        });
        return;
    }

    if (password !== confirmPassword) {
        setErrors({
            confirmPassword: ["Passwords do not match."]
        });
        return;
    }

    setLoading(true);

    try {
        await register(username, email, password);

        navigate("/login");
    }
    catch (error) {
        if (error.response?.data) {
            setErrors(error.response.data);
        }
    }

    finally {
        setLoading(false);
    }
};
    return (
        <AuthLayout
            title="Create Account"
            subtitle="Start organizing your tasks today."
            footerText="Already have an account?"
            footerLink="/login"
            footerLinkText="Login"
        >

            <form onSubmit={handleSubmit}>
                <input
                     type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        className="
                        w-full
                        border
                        rounded-lg
                        px-4
                        py-3
                        mb-4
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-500
                    "
                />

                {
                    errors.username && (
                        <p className="text-red-500 text-sm mt-1 mb-3">
                            {errors.username[0]}
                        </p>
                    )
                }

                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="
                        w-full
                        border
                        rounded-lg
                        px-4
                        py-3
                        mb-4
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-500
                    "
                />

                {
                    errors.email && (
                        <p className="text-red-500 text-sm mt-1 mb-3">
                            {errors.email[0]}
                        </p>
                    )
                }

                <input
                     type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    className="
                        w-full
                        border
                        rounded-lg
                        px-4
                        py-3
                        mb-4
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-500
                    "
                />

                {
                    errors.password && (
                        <p className="text-red-500 text-sm mt-1 mb-3">
                            {errors.password[0]}
                        </p>
                    )
                }

                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="
                        w-full
                        border
                        rounded-lg
                        px-4
                        py-3
                        mb-4
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-500
                    "
                />

                {
                    errors.confirmPassword && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.confirmPassword[0]}
                        </p>
                    )
                }

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
                            {loading ? "Creating..." : "Create Account"}
                        </button>
            </form>

        </AuthLayout>
    );
}

export default Register;