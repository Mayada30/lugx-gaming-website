import { useState, useEffect } from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Contact from "./pages/Contact.jsx";
import { defaultGame } from "./data/games.js";

const titles = {
  home: "Lugx Gaming Shop",
  shop: "Lugx Gaming - Shop Page",
  product: "Lugx Gaming - Product Detail",
  contact: "Lugx Gaming - Contact Page",
};

export default function App() {
  // State that several components need lives here (lifting state up)
  const [page, setPage] = useState("home");
  const [game, setGame] = useState(defaultGame); // game shown on the details page
  const [search, setSearch] = useState("");      // text typed in the banner search
  const [loading, setLoading] = useState(true);  // preloader

  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(id);
  }, []);

  // runs every time the page changes
  useEffect(() => {
    document.title = titles[page];
    window.scrollTo(0, 0);
  }, [page]);

  // go("shop")  or  go("product", someGame)
  const go = (nextPage, nextGame) => {
    if (nextGame) setGame(nextGame);
    setPage(nextPage);
  };

  return (
    <>
      {loading && (
        <div className="preloader">
          <span className="dot" />
        </div>
      )}

      <Header page={page} go={go} />

      {page === "home" && <Home go={go} setSearch={setSearch} />}
      {page === "shop" && <Shop go={go} search={search} setSearch={setSearch} />}
      {page === "product" && <ProductDetails go={go} game={game} />}
      {page === "contact" && <Contact go={go} />}

      <Footer />
    </>
  );
}
