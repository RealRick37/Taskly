import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate("/login");
    };

    return (
        <header className="bg-white shadow">
            <div
                className="
                    max-w-7xl
                    mx-auto
                    flex
                    flex-col
                    sm:flex-row
                    items-center
                    justify-between
                    gap-4
                    px-4
                    sm:px-6
                    lg:px-8
                    py-4
                "
            >
                <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
                    Task Manager
                </h1>

                <button
                    onClick={logout}
                    className="
                        w-full
                        sm:w-auto
                        bg-red-500
                        hover:bg-red-600
                        text-white
                        px-5
                        py-2.5
                        rounded-lg
                        transition
                    "
                >
                    Logout
                </button>
            </div>
        </header>
    );
}

export default Navbar;