import { BagIcon } from "./Icons.jsx";

// One card of the "Trending" / Shop grid. Everything comes from props.
export default function GameCard({ game, onOpen }) {
  const open = (e) => {
    e.preventDefault();
    onOpen(game);
  };

  return (
    <div className="item">
      <div className="thumb">
        <a href="#" onClick={open}>
          <img src={`/images/${game.img}`} alt={game.name} />
        </a>
        <span className="price">
          {game.oldPrice && <del>${game.oldPrice}</del>}
          <b>${game.price}</b>
        </span>
      </div>
      <div className="down-content">
        <div>
          <span className="category">{game.category}</span>
          <h4>{game.name}</h4>
        </div>
        <a href="#" className="bag" onClick={open} aria-label={`Open ${game.name}`}>
          <BagIcon size={20} />
        </a>
      </div>
    </div>
  );
}
