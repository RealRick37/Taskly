import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 px-6">

            <DotLottieReact
                src="/animations/404error.lottie"
                autoplay
                loop
                className="w-80 h-80"
            />

            <p className="text-slate-500 mt-2">
                Oops! The page you're looking for doesn't exist.
            </p>

            <Link
                to="/"
                className="mt-6 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition"
            >
                Back to Dashboard
            </Link>

        </div>
    );
}

export default NotFound;