import "../styles/cards.scss";
import Stories from "./Stories";
import Card from "./Card";
import Card1 from "./Card1";

function Cards() {
  const commentsOne = [
    {
      user: "CR7",
      text: "O MELHOR! 🔥",
      id: 1,
    },
  ];



  return (
    <div className="cards">
      <Stories />

      <Card
        comments={commentsOne}
        likedByText="dadatlacak"
        likedByNumber={89}
        hours={16}
      />
      <Card1
        comments={commentsOne}
        likedByNumber={89}
        hours={16}
      />
     
    </div>
  );
}

export default Cards;