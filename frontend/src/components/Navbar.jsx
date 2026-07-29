import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

                <h1 className="text-2xl font-bold text-slate-800">
                    Task Manager
                </h1>

                <button
                    onClick={logout}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
                >
                    Logout
                </button>

            </div>
        </header>
    );
}

export default Navbar;