import { NavLink } from "react-router-dom";

const Header = () => {
    const navLinkStyles = ({ isActive }) =>
        isActive ? "text-blue-500 font-semibold" : "text-gray-700 hover:text-sky-500";

    return (
        <div className="flex justify-between my-12 items-center p-4 bg-gray-800 shadow-md">
            <div className="text-2xl font-bold">
                <NavLink to='/'>
                    <h1>ExploreMore</h1>
                </NavLink>
            </div>
            <nav>
                <ul className="hidden font-semibold md:flex gap-6">
                    <li>
                        <NavLink to='/' className={navLinkStyles}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={navLinkStyles}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contact' className={navLinkStyles}>Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to='/country' className={navLinkStyles}>Country</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
