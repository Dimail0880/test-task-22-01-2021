// buttons
const homeBtn = document.querySelector("#home");
const shopBtn = document.querySelector("#shop");
const cartBtn = document.querySelector("#cart");
// card wrapper
const cardWrapper = document.querySelector(".card-wrapper");
// card
const card = document.querySelector(".card");
//icons
const homeIcon = document.querySelector("#home-icon");
const shopIcon = document.querySelector("#shop-icon");
const cartIcon = document.querySelector("#cart-icon");

showHomeCard(); // starting page with home-card

// Home-card markup
function showHomeCard() {
  const homeCard = document.querySelector("#home-card");
  if (homeCard) {
    return;
  }
  clearCard();
  cardWrapper.insertAdjacentHTML(
    "beforeend",
    "<div id='home-card' class='card active'><header class='card-header'>HEADER</header><p class='card-content'>SOME CONTENT HOME</p></div>"
  );
  toggleActiveIcon(homeIcon);
}
// Shop-card markup
function showShopCard() {
  const shopCard = document.querySelector("#shop-card");
  if (shopCard) {
    return;
  }
  clearCard();
  cardWrapper.insertAdjacentHTML(
    "beforeend",
    "<div id='shop-card' class='card active'><header class='card-header'>HEADER</header><p class='card-content'>SOME CONTENT SHOP</p></div>"
  );
  toggleActiveIcon(shopIcon);
}
// Show-card markup
function showCartCard() {
  const cartCard = document.querySelector("#cart-card");
  if (cartCard) {
    return;
  }
  clearCard();
  cardWrapper.insertAdjacentHTML(
    "beforeend",
    "<div id='cart-card' class='card active'><header class='card-header'>HEADER</header><p class='card-content'>SOME CONTENT CART</p></div>"
  );
  toggleActiveIcon(cartIcon);
}

// clearing current card logic before the next card marking up
function clearCard() {
  cardWrapper.innerHTML = " ";
}

// toggling navigation icons active styles
function toggleActiveIcon(elem) {
  const activeElement = document.querySelector(".icon-active");
  if (activeElement) {
    activeElement.classList.remove("icon-active");
  }
  elem.classList.add("icon-active");
}
