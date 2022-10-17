import "../styles/card.scss";
import { ReactComponent as CardButton } from "../images/cardButton.svg";
import CardMenu from "./CardMenu";
import Comment from "./Comment";

function Card(props) {
  const {
    comments,
    likedByText,
    likedByNumber,
    hours,
  } = props;

  return (
    <div className="card">
      <header>
        Messi
        <CardButton className="cardButton" />
      </header>
      <img className="cardImage" src="https://static.poder360.com.br/2021/08/messi-contrato-barcelona.jpg" alt="card content" />
      <CardMenu />
      <div className="likedBy">
        <span>
          Curtido por <strong>{likedByText}</strong> e outros{" "}
          <strong>{likedByNumber} </strong>
        </span>

      </div>
      <br></br>

      <div className="comments">
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              accountName={comment.user}
              comment={comment.text}
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

export default Card;