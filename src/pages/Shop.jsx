import { useState } from "react";
import PageHeading from "../components/PageHeading.jsx";
import GameCard from "../components/GameCard.jsx";
import { ChevronIcon } from "../components/Icons.jsx";
import { shopGames, shopFilters } from "../data/games.js";

const PER_PAGE = 8;

export default function Shop({ go, search, setSearch }) {
  const [filter, setFilter] = useState("all");
  const [pageNo, setPageNo] = useState(1);

  // We don't store the filtered list in state: we calculate it from state.
  const filtered = shopGames.filter(
    (g) =>
      (filter === "all" || g.tags.includes(filter)) &&
      g.name.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const visible = filtered.slice((pageNo - 1) * PER_PAGE, pageNo * PER_PAGE);

  const changeFilter = (e, key) => {
    e.preventDefault();
    setFilter(key);
    setPageNo(1);
  };

  const goToPage = (e, n) => {
    e.preventDefault();
    if (n >= 1 && n <= totalPages) setPageNo(n);
  };

  return (
    <>
      <PageHeading title="Our Shop" go={go}>Our Shop</PageHeading>

      <section className="section trending">
        <div className="container">
          <ul className="trending-filter">
            {shopFilters.map((f) => (
              <li key={f.key}>
                <a
                  href="#"
                  className={filter === f.key ? "is_active" : ""}
                  onClick={(e) => changeFilter(e, f.key)}
                >
                  {f.label}
                </a>
              </li>
            ))}
          </ul>

          {search && (
            <p className="search-note">
              Results for “{search}” <button onClick={() => setSearch("")}>✕ clear</button>
            </p>
          )}

          {visible.length === 0 ? (
            <p className="center">No games found.</p>
          ) : (
            <div className="grid-4">
              {visible.map((g) => (
                <GameCard key={g.id} game={g} onOpen={(game) => go("product", game)} />
              ))}
            </div>
          )}

          <ul className="pagination">
            <li><a href="#" aria-label="Previous page" onClick={(e) => goToPage(e, pageNo - 1)}><ChevronIcon dir="left" /></a></li>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <li key={n}>
                <a
                  href="#"
                  className={n === pageNo ? "is_active" : ""}
                  onClick={(e) => goToPage(e, n)}
                >
                  {n}
                </a>
              </li>
            ))}
            <li><a href="#" aria-label="Next page" onClick={(e) => goToPage(e, pageNo + 1)}><ChevronIcon /></a></li>
          </ul>
        </div>
      </section>
    </>
  );
}
