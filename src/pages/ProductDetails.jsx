import { useState } from "react";
import PageHeading from "../components/PageHeading.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import MainButton from "../components/MainButton.jsx";
import CategoryCard from "../components/CategoryCard.jsx";
import { BagIcon } from "../components/Icons.jsx";
import { categories } from "../data/games.js";

export default function ProductDetails({ go, game }) {
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("description");
  const [message, setMessage] = useState("");

  const addToCart = (e) => {
    e.preventDefault();
    setMessage(`Added ${qty} × ${game.name} to your cart`);
  };

  return (
    <>
      <PageHeading title={game.short || game.name} go={go}>
        <a href="#" onClick={(e) => { e.preventDefault(); go("shop"); }}>Shop</a>
        {" > "}
        {game.short || game.name}
      </PageHeading>

      {/* ===== Single product ===== */}
      <section className="section single-product">
        <div className="container two-col">
          <div className="left-image">
            <img src="/images/single-game.jpg" alt={game.name} />
          </div>
          <div className="product-info">
            <h4>{game.name}</h4>
            <span className="price">
              {game.oldPrice && <del>${game.oldPrice}</del>} <b>${game.price}</b>
            </span>
            <p>
              LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework.
              This template is provided by TemplateMo and it is suitable for your
              gaming shop ecommerce websites. Feel free to use this for any purpose.
              Thank you.
            </p>

            <form id="qty" onSubmit={addToCart}>
              <input
                type="number"
                min="1"
                value={qty}
                onChange={(e) => setQty(Number(e.target.value) || 1)}
              />
              <button type="submit"><BagIcon size={15} /> Add to cart</button>
            </form>
            {message && <p className="success">{message}</p>}

            <ul className="meta">
              <li><span>Game ID :</span> <a href="#" onClick={(e) => e.preventDefault()}>COD MMII</a></li>
              <li><span>Genre :</span> <a href="#" onClick={(e) => e.preventDefault()}>Action, Team, Single</a></li>
              <li><span>Multi-tags :</span> <a href="#" onClick={(e) => e.preventDefault()}>War, Battle, Royal</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===== Tabs ===== */}
      <section className="more-info">
        <div className="container">
         <div className="desc-box">
          <div className="tabs">
            <button className={tab === "description" ? "active" : ""} onClick={() => setTab("description")}>
              Description
            </button>
            <button className={tab === "reviews" ? "active" : ""} onClick={() => setTab("reviews")}>
              Reviews (3)
            </button>
          </div>

          {tab === "description" ? (
            <div className="tab-content">
              <p>
                You can search for more templates on Google Search using keywords such
                as "templatemo digital marketing", "templatemo one-page", "templatemo
                gallery", etc. Please tell your friends about our website. If you need
                a variety of HTML templates, you may visit Tooplate and Too CSS websites.
              </p>
              <p>
                Coloring book air plant shabby chic, crucifix normcore raclette cred
                swag artisan activated charcoal. PBR&amp;B fanny pack pok pok gentrify
                truffaut kitsch helvetica jean shorts edison bulb poutine next level
                humblebrag la croix adaptogen. Hashtag poke literally locavore, beard
                marfa kogi bruh artisan succulents seitan tonx waistcoat chambray
                taxidermy. Same cred meggings 3 wolf moon lomo irony cray hell of
                bitters asymmetrical gluten-free art party raw denim chillwave tousled
                try-hard succulents street art.
              </p>
            </div>
          ) : (
            <div className="tab-content">
              <p>
                Coloring book air plant shabby chic, crucifix normcore raclette cred
                swag artisan activated charcoal. PBR&amp;B fanny pack pok pok gentrify
                truffaut kitsch helvetica jean shorts edison bulb poutine next level
                humblebrag la croix adaptogen.
              </p>
              <p>
                Hashtag poke literally locavore, beard marfa kogi bruh artisan
                succulents seitan tonx waistcoat chambray taxidermy. Same cred meggings
                3 wolf moon lomo irony cray hell of bitters asymmetrical gluten-free
                art party raw denim chillwave tousled try-hard succulents street art.
              </p>
            </div>
          )}
         </div>
        </div>
      </section>

      {/* ===== Related games ===== */}
      <section className="section categories">
        <div className="container">
          <div className="section-top">
            <SectionHeading small="Action">Related Games</SectionHeading>
            <MainButton onClick={() => go("shop")}>View All</MainButton>
          </div>
          <div className="grid-5">
            {categories.map((c) => (
              <CategoryCard key={c.id} cat={c} onOpen={() => go("product")} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
