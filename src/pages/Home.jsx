import { NavLink } from "react-router-dom";
import { CgAirplane } from "react-icons/cg";

const Home = () => {
    return (
        <main className="py-10 px-4">
            {/* parent div */}
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-6xl mx-auto gap-8">
                {/* content child-1 */}
                <div className="lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-2xl lg:text-4xl font-semibold mb-4">
                        Explore the world Now, one country at a time
                    </h1>
                    <p className="text-gray-500 mb-6">
                        Discover the history, culture, and beauty of every nation. <br />
                        We are proud to serve a diverse range of both foreign and Italian clients in the tourism sector.
                    </p>
                    <NavLink to='/country'>
                        <button className="btn btn-ghost bg-blue-500 text-white hover:bg-blue-600 px-6 py-2 rounded mt-3 flex items-center gap-2">
                            Start Exploring <CgAirplane className="text-xl" />
                        </button>
                    </NavLink>
                </div>

                {/* image child-2 */}
                <div className="lg:w-1/2 flex justify-center">
                    <img src="/images/world.png" alt="world tour" className="max-w-full h-auto object-contain" />
                </div>
            </div>
        </main>
    );
};

export default Home;
