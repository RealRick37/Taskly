import { useState } from "react";
import { login } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Login() {
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");

    const navigate=useNavigate();

    const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("1. submit");

    try {
        console.log("2. before login");

        const data = await login(username, password);

        console.log("3. login success", data);

        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);

        console.log("4. saved");

        navigate("/");
    } catch (error) {
        console.log("ERROR:", error);
        console.log("RESPONSE:", error.response);
    }
};

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit">
                Login
            </button>
        </form>
    );
}

export default Login;