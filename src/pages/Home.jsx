import { useState } from "react";
import SectionHeading from "../components/SectionHeading.jsx";
import MainButton from "../components/MainButton.jsx";
import GameCard from "../components/GameCard.jsx";
import TopGameCard from "../components/TopGameCard.jsx";
import CategoryCard from "../components/CategoryCard.jsx";
import { features, trending, mostPlayed, categories } from "../data/games.js";

export default function Home({ go, setSearch }) {
  const [text, setText] = useState("");     // controlled search input
  const [email, setEmail] = useState("");   // controlled newsletter input
  const [subscribed, setSubscribed] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(text);
    go("shop");
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail("");
  };

  const openGame = (game) => go("product", game);

  return (
    <>
      {/* ===== Banner ===== */}
      <div className="main-banner">
        <div className="container banner-grid">
          <div className="caption">
            <h6>Welcome to lugx</h6>
            <h2>BEST <span className="hl">GAMING</span> SITE EVER!</h2>
            <p>
              LUGX Gaming is free Bootstrap 5 HTML CSS website template for your
              gaming websites. You can download and use this layout for commercial
              purposes. Please tell your friends about TemplateMo.
            </p>
            <form className="search-input" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Type Anything"
                aria-label="Search games"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button type="submit">Search Now</button>
            </form>
          </div>
          <div className="right-image">
            <img src="/images/banner-image.jpg" alt="Featured game" />
            <span className="price">$22</span>
            <span className="offer">-40%</span>
          </div>
        </div>
      </div>

      {/* ===== Features ===== */}
      <div className="features">
        <div className="container grid-4">
          {features.map((f) => (
            <a href="#" key={f.id} className="feature" onClick={(e) => e.preventDefault()}>
              <span className="icon">
                <img src={`/images/${f.img}`} alt="" />
              </span>
              <h4>{f.title}</h4>
            </a>
          ))}
        </div>
      </div>

      {/* ===== Trending ===== */}
      <section className="section trending">
        <div className="container">
          <div className="section-top">
            <SectionHeading small="Trending">Trending Games</SectionHeading>
            <MainButton onClick={() => go("shop")}>View All</MainButton>
          </div>
          <div className="grid-4">
            {trending.map((g) => (
              <GameCard key={g.id} game={g} onOpen={openGame} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Most Played ===== */}
      <section className="section most-played">
        <div className="container">
          <div className="section-top">
            <SectionHeading small="TOP GAMES">Most Played</SectionHeading>
            <MainButton onClick={() => go("shop")}>View All</MainButton>
          </div>
          <div className="grid-6">
            {mostPlayed.map((g) => (
              <TopGameCard key={g.id} game={g} onOpen={openGame} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Categories ===== */}
      <section className="section categories">
        <div className="container">
          <div className="center">
            <SectionHeading small="Categories">Top Categories</SectionHeading>
          </div>
          <div className="grid-5">
            {categories.map((c) => (
              <CategoryCard key={c.id} cat={c} onOpen={() => go("product")} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA: shop + newsletter ===== */}
      <section className="section cta">
        <div className="container cta-grid">
          <div className="shop">
            <SectionHeading small="Our Shop">
              Go Pre-Order Buy &amp; Get Best <em>Prices</em> For You!
            </SectionHeading>
            <p>Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor incididunt.</p>
            <MainButton onClick={() => go("shop")}>Shop Now</MainButton>
          </div>

          <div className="subscribe">
            <SectionHeading small="NEWSLETTER">
              Get Up To $100 Off Just Buy <em>Subscribe</em> Newsletter!
            </SectionHeading>
            <form className="search-input" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email..."
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">Subscribe Now</button>
            </form>
            {subscribed && <p className="success">Thanks for subscribing!</p>}
          </div>
        </div>
      </section>
    </>
  );
}
