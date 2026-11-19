export default function CategoryCard({ cat, onOpen }) {
  return (
    <div className="item">
      <h4>{cat.name}</h4>
      <div className="thumb">
        <a href="#" onClick={(e) => { e.preventDefault(); onOpen(cat); }}>
          <img src={`/images/${cat.img}`} alt={cat.name} />
        </a>
      </div>
    </div>
  );
}
