import "../styles/sidebar.scss";
import Sticky from "react-sticky-el";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import image from "../images/profile.jpg";

function Sidebar(){
    return(
        <div classname="sidebar">
            <Sticky topOffset={-80}> 
            <div className="sidebar">
                <Profile username="ImFreitas" caption="Pedro Freitas" urlText="Mudar" iconSize="big" image={image}/>
            </div>
            <Suggestions/>
            <Footer/>
            </Sticky>
        </div>
    )
}

export default Sidebar;