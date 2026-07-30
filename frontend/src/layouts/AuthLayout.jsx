import { Link } from "react-router-dom";

function AuthLayout({ title, subtitle, children, footerText, footerLink, footerLinkText }) {
    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

            <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8">

                <div className="text-center mb-8">

                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
                        Taskly
                    </h1>

                    <p className="text-slate-500 mt-2 text-sm sm:text-base">
                        {subtitle}
                    </p>

                </div>

                <h2 className="text-2xl font-semibold mb-6">
                    {title}
                </h2>

                {children}

                <p className="text-center text-sm text-slate-500 mt-6">
                    {footerText}{" "}
                    <Link
                        to={footerLink}
                        className="text-blue-600 hover:underline"
                    >
                        {footerLinkText}
                    </Link>
                </p>

            </div>

        </div>
    );
}

export default AuthLayout;