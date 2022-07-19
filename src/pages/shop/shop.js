import { shops } from './mock-data.shop';

export function getShopPage() {
  return `
<div class='row p-3'>
<div class='col-3'>${getSideBar()}</div><div class='col-9' id="product__list"></div>
</div>`;
}

function getSideBar() {
  return `<div class="border rounded-1 p-4">
<h5 class="d-flex justify-content-center p-2">Shops</h5>
<ul class="nav flex-column">
${shops.map(
  shop =>
    `<li class="nav-item border p-2">    
<a class="nav-link pointer-event" onclick="onClickCompanyTitle(${shop.id})" id="shop__product__${shop.id}">${shop.name}</a></li>`
)}
</ul>
</div>`;
}

export function renderShopList(products) {
  const productList = document.getElementById('product__list');
  productList.innerHTML = `<div class='row border rounded-1 p-4'>
${products.map(createCartBy).join(' ')}
</div>`;
}

function createCartBy(product) {
  return `<div class="col-6 p-2">
    <div class='card'>
      <img src="${product.img}" class="card-img-top" alt="${product.title}">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <button class="btn btn-primary" onclick='addToCart(${product.id})' >Add to Cart</button>
        </div>
    </div>
  </div>`;
}

export function onClickCompanyTitle(id) {
  const shop = shops.find(shop => shop.id === id);
  renderShopList(shop.products);
}

export function addToCart(id) {
  const products = shops.reduce((acc, cur) => [...acc, ...cur.products], []);
  const product = products.find(p => p.id === id);
  const productFromStorage = JSON.parse(localStorage.getItem('products')) || [];
  localStorage.setItem('products', JSON.stringify([...productFromStorage, product]));
}
