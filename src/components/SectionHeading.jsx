export default function SectionHeading({ small, children }) {
  return (
    <div className="section-heading">
      <h6>{small}</h6>
      <h2>{children}</h2>
    </div>
  );
}
