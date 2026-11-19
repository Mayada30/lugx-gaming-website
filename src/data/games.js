// All the website data in one place (arrays of objects -> we render them with map).

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "shop", label: "Our Shop" },
  { id: "product", label: "Product Details" },
  { id: "contact", label: "Contact Us" },
];

export const features = [
  { id: 1, img: "featured-01.png", title: "Free Storage" },
  { id: 2, img: "featured-02.png", title: "User More" },
  { id: 3, img: "featured-03.png", title: "Reply Ready" },
  { id: 4, img: "featured-04.png", title: "Easy Layout" },
];

// default game shown on the Product Details page
export const defaultGame = {
  id: 0,
  name: "Call of Duty®: Modern Warfare® II",
  short: "Modern Warfare® II",
  img: "single-game.jpg",
  category: "Action",
  price: 22,
  oldPrice: 28,
};

// Home page -> Trending Games
export const trending = [
  { id: 101, img: "trending-01.jpg", category: "Action", name: "Assasin Creed", price: 20, oldPrice: 28 },
  { id: 102, img: "trending-02.jpg", category: "Action", name: "Assasin Creed", price: 44 },
  { id: 103, img: "trending-03.jpg", category: "Action", name: "Assasin Creed", price: 44, oldPrice: 64 },
  { id: 104, img: "trending-04.jpg", category: "Action", name: "Assasin Creed", price: 32 },
];

// Home page -> Most Played
export const mostPlayed = [1, 2, 3, 4, 5, 6].map((n) => ({
  id: 200 + n,
  img: `top-game-0${n}.jpg`,
  category: "Adventure",
  name: "Assasin Creed",
  price: 30,
}));

// Home page + Product page -> categories / related games
export const categories = [
  { id: 301, img: "categories-01.jpg", name: "Action" },
  { id: 302, img: "categories-02.jpg", name: "Action" },
  { id: 303, img: "categories-03.jpg", name: "Action" },
  { id: 304, img: "categories-04.jpg", name: "Action" },
  { id: 305, img: "categories-05.jpg", name: "Action" },
];

// Shop page. tags: adv = Adventure, str = Strategy, rac = Racing
export const shopFilters = [
  { key: "all", label: "Show All" },
  { key: "adv", label: "Adventure" },
  { key: "str", label: "Strategy" },
  { key: "rac", label: "Racing" },
];

const shop = (id, img, oldPrice, price, tags) => ({
  id: 400 + id, img: `trending-0${img}.jpg`, category: "Action",
  name: "Assasin Creed", oldPrice, price, tags,
});

export const shopGames = [
  shop(1, 1, 36, 24, ["adv"]),
  shop(2, 2, 32, 22, ["str"]),
  shop(3, 3, 45, 30, ["adv", "rac"]),
  shop(4, 4, 32, 22, ["str"]),
  shop(5, 3, 38, 26, ["rac", "str"]),
  shop(6, 1, 30, 20, ["rac", "adv"]),
  shop(7, 4, 32, 22, ["rac", "str"]),
  shop(8, 2, 32, 22, ["rac", "adv"]),
  shop(9, 3, 28, 20, ["adv", "rac"]),
  shop(10, 4, 26, 18, ["str"]),
  shop(11, 1, 32, 24, ["adv"]),
  shop(12, 2, 45, 30, ["str"]),
];
