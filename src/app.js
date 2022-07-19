import { addToCart, getShopPage, getShoppingCartPage, onClickCompanyTitle } from './pages';
import './style/style.scss';

const shopLinkBtn = document.getElementById('shop__link');
const shoppingCartLinkBtn = document.getElementById('shopping_cart__link');
const router = document.getElementById('router-outlet');


shopLinkBtn.addEventListener('click', clickNav);
shoppingCartLinkBtn.addEventListener('click', clickNav);

function clickNav(event) {
  renderPage(event.path[0].id);
}

function renderPage(id) {
  router.innerHTML = getTemplate(id);
}

function getTemplate(id) {
  switch (id) {
    case 'shop__link':
      return getShopPage();
    case 'shopping_cart__link':
      return getShoppingCartPage();
    default:
      return `<h2>Not found</h2>`;
  }
}

renderPage('shop__link')

window.onClickCompanyTitle = onClickCompanyTitle;
window.addToCart = addToCart;

