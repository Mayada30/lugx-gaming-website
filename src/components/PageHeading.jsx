// "children" = the breadcrumb text we put between the tags
export default function PageHeading({ title, go, children }) {
  return (
    <div className="page-heading">
      <div className="container">
        <h1>{title}</h1>
        <span className="breadcrumb">
          <a href="#" onClick={(e) => { e.preventDefault(); go("home"); }}>Home</a>
          {" > "}
          {children}
        </span>
      </div>
    </div>
  );
}
