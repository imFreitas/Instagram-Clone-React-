import "../styles/card.scss";
import { ReactComponent as CardButton } from "../images/cardButton.svg";
import CardMenu from "./CardMenu";
import Comment from "./Comment";

function Card1(props) {
  const {
    comments,
    likedByText,
    likedByNumber,
    hours,
  } = props;

  return (
    <div className="card">
      <header>
        Cristiano R
        <CardButton className="cardButton" />
      </header>
      <img className="cardImage" src="https://conteudo.imguol.com.br/c/esporte/1c/2022/06/09/cristiano-ronaldo-em-acao-com-a-camisa-de-portugal-no-jogo-contra-a-republica-tcheca-1654802194674_v2_4x3.jpg" alt="card content" />
      <CardMenu />
      <div className="likedBy">
        <span>
   
          <strong>{0}       Curtidos </strong>
        </span>

      </div>
      <br></br>

      <div className="comments">
        {comments.map((comment) => {
          return (
            <Comment

            />
          );
        })}
      </div>
      <div className="timePosted">Há {hours}  horas</div>
      <div className="addComment">
        <div className="commentText">Adiciona um comentário...</div>
        <div className="postText">Publicar</div>
      </div>
    </div>
  );
}

export default Card1;