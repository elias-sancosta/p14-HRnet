import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

/**
 * The Layout component returns a JSX element that contains Header and Footer components and main
 * @component
 * @param {Object} props - Component's props
 * @param {Object} props.children - The content to be rendered inside the Layout component
 * @returns {JSX.Element}
 */
const Layout = ({ children }) => {
    const location = useLocation();
    return (
        <>
            <Header />
            <main className={location.pathname === "/" ? "main main--home" : location.pathname === "/employee-list" ? "main main--employee" : "main"}>{children}</main>
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;