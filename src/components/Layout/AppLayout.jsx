import { Outlet } from "react-router-dom";
import Footer from "../UI/Footer";
import Header from "../UI/Header";

const AppLayout = () => {

    return (
        <>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};

export default AppLayout;