import Navbar from "../components/Navbar";
import Basmallah from "../components/Basmallah";
import About from "../components/About";

function Home() {
    return(
        <div className="home">
            {/* <Navbar /> */}
            <Basmallah />
            <About />
        </div>
    )
}

export default Home;