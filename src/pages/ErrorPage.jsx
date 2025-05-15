import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-sky-500 to-fuchsia-600 px-4">
            <div className="bg-white text-gray-800 rounded-2xl shadow-lg p-10 max-w-xl w-full text-center space-y-6">
                <div>
                    <h1 className="text-6xl font-extrabold mb-2">404</h1>
                    <h2 className="text-2xl font-semibold">Page Not Found</h2>
                    <p className="mt-4 text-gray-500">
                        Sorry, the page you're looking for doesn't exist.
                    </p>
                    {error?.data && (
                        <p className="text-sm text-red-400 mt-2 italic">
                            {error.data}
                        </p>
                    )}
                </div>
                <NavLink to="/">
                    <button className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300">
                        Go Home
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;
