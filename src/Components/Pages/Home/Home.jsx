import Footer from "../Footer/Footer";
import { ReactNavbar } from "overlay-navbar"
import logo from "../../../assets/header-logo.svg";

const Home = () => {
    return (
        <ReactNavbar
            burgerColorHover="crimson"
            navColor1="rgb(45,3,23)"
            navColor2="rgb(23,12,54)"
            navColor3="rgb(55,66,11)"
            navColor4="rgb(5,66,11)"

            logo={logo}
            logoWidth="100px"
            logoHeight="200px"
            logoTransition="all 0.3s ease"
            logoHoverColor="rgb(23,12,54)"

            link1Size="30px"

            link2Size="20px"

            link1Decoration="underline"


            link1Text="Home"
            link1Url="/"

            link2Text="Blog"
            link2Url="/"


            link3Text="About Us"
        >
            <div>

                <section className="home h-[100vh]">

                </section>


                <div><Footer></Footer></div>

            </div>
        </ReactNavbar>

    );
};

export default Home;