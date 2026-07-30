import { useNavigate } from "react-router-dom";
import { CircleUserRound, Mail } from "lucide-react";

function Navbar({ user }) {
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
                    px-4
                    sm:px-6
                    lg:px-8
                    py-4

                    flex
                    flex-col
                    sm:flex-row
                    items-center
                    justify-between
                    gap-4
                "
            >
                <div className="flex items-center gap-3">

                    <img
                        src="/taskly.png"
                        alt="Taskly"
                        className="
                            w-10
                            h-10
                            rounded-xl
                            shadow-sm
                            object-cover
                        "
                    />

                    <h1 className="text-2xl font-bold text-slate-800">
                        Taskly
                    </h1>

                </div>

                <div className="flex items-center gap-4">

                    <div className="flex items-center gap-3">
                        <div
                            className="
                                w-10
                                h-10
                                rounded-full
                                bg-blue-600
                                text-white
                                flex
                                items-center
                                justify-center
                                font-bold
                                text-lg
                                shrink-0
                            "
                        >
                            {user?.username?.[0]?.toUpperCase()}
                        </div>

                        <div className="hidden sm:block">
                            <p className="font-semibold text-slate-800">
                                {user?.username}
                            </p>

                            <p className="text-sm text-slate-500">
                                {user?.email}
                            </p>
                        </div>
                    </div>

                    <button
                        onClick={logout}
                        className="
                            bg-red-500
                            hover:bg-red-600
                            text-white
                            px-5
                            py-2.5
                            rounded-lg
                            transition
                            w-full
                            sm:w-auto
                        "
                    >
                        Logout
                    </button>

                </div>
            </div>
        </header>
    );
}

export default Navbar;