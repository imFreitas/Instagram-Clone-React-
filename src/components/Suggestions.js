import "../styles/suggestions.scss";
import Profile from "./Profile";

function Suggestions() {
  return (
    <div className="suggestions">
      <div className="titleContainer">
        <div className="title">Sugestões para você</div>
        <a href="/">Ver todas</a>
      </div>

      <Profile
        caption="Seguido por Samantha 2 outros..."
        urlText="Seguir"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Segue você"
        urlText="Seguir"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        caption="Segue você"
        urlText="Seguir"
        iconSize="medium"
        captionSize="small"
      />
      <Profile
        caption="Seguido por dadatlacak "
        urlText="Seguir"
        iconSize="medium"
        captionSize="small"
        storyBorder={true}
      />
      <Profile
        caption="Seguido por mapvault e 3 outros..."
        urlText="Seguir"
        iconSize="medium"
        captionSize="small"
      />
    </div>
  );
}

export default Suggestions;