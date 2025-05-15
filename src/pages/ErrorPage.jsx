import { NavLink, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    // error hooks
    const error = useRouteError();
    console.log(error);
    return (
        <>
            <div className="text-center text-4xl font-semibold my-66 border rounded-2xl p-10 bg-sky-600">
                <h1>Error 404 ..!! Pages Not Found</h1>
                {error && <p>{error.data}</p>}
                <br />
                <NavLink to='/'>
                    <button className="btn font-bold bg-fuchsia-600 btn-ghost">Home Page</button>
                </NavLink>
            </div>
        </>
    );
};

export default ErrorPage;