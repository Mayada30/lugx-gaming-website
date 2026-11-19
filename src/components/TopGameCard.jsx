// Small card used in "Most Played"
export default function TopGameCard({ game, onOpen }) {
  const open = (e) => {
    e.preventDefault();
    onOpen(game);
  };

  return (
    <div className="item small">
      <div className="thumb">
        <a href="#" onClick={open}>
          <img src={`/images/${game.img}`} alt={game.name} />
        </a>
      </div>
      <div className="down-content">
        <span className="category">{game.category}</span>
        <h4>{game.name}</h4>
        <a href="#" className="explore" onClick={open}>Explore</a>
      </div>
    </div>
  );
}
