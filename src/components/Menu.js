import "../styles/menu.scss";
import { ReactComponent as Home } from "../images/home.svg";
import { ReactComponent as Messages } from "../images/messages.svg";
import { ReactComponent as Publicar } from "../images/publicar.svg";
import { ReactComponent as Encontrar } from "../images/encontrar.svg";
import { ReactComponent as Heart } from "../images/heart.svg";
import imagem from "../images/profile.jpg"
import ProfileIcon from "./ProfileIcon.js"

function Menu() {
    return (
      <div className="menu">
        <Home className="icon" />
        <Messages className="icon" />
        <Publicar className="icon" />
        <Encontrar className="icon" />
        <Heart className="icon" />
        <ProfileIcon iconSize="small" image={imagem} storyBorder={true}/>
      </div>
    );
  }

  export default Menu;