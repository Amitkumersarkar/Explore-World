import { Outlet } from "react-router-dom";
import Footer from "../UI/Footer";
import Header from "../UI/Header";

const AppLayout = () => {

    return (
        <>
            <div className="w-10/12 mx-auto text-center">
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </div>
        </>
    );
};

export default AppLayout;