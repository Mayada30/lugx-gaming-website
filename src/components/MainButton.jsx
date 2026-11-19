export default function MainButton({ onClick, children }) {
  return (
    <div className="main-button">
      <a href="#" onClick={(e) => { e.preventDefault(); onClick(); }}>
        {children}
      </a>
    </div>
  );
}
