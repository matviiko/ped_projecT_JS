export function getShoppingCartPage() {
  return `
<div class='row p-3'>
<div class='col-6 border  p-3'>

<div class="form-group m-5">
<label for='name'>Name</label>
  <input type="text" id='"name' class="form-control">
</div>

<div class="form-group m-5">
<label for='email'>Email</label>
  <input type="text" id='"email' class="form-control">
</div>

<div class="form-group m-5">
<label for='phone'>Phone</label>
  <input type="text" id='"phone' class="form-control">
</div>

<div class="form-group m-5">
<label for='address'>Address</label>
  <input type="text" id='"address' class="form-control">
</div>
</div><div class='col-6'>${renderShoppingList()}</div>
</div>`;
}

export function renderShoppingList() {
  const productsFromStorage =
    JSON.parse(localStorage.getItem('products')) || [];
  const products = productsFromStorage.reduce((acc, cur) => {
    if (acc.length) {
      return acc.reduce(
        (acc, array) => acc || array.some(p => p.id === cur.id),
        false
      )
        ? acc.map(arr =>
            arr.some(p => p.id === cur.id) ? [...arr, cur] : arr
          )
        : [...acc, [cur]];
    } else {
      return [...acc, [cur]];
    }
  }, []);
  return  `<div class='border rounded-1 p-4'>
${products.map(p => createCartBy(p[0], p.length)).join(' ')}
</div>`;
}

function createCartBy(product, length) {
  return `<div class="p-2">
    <div class='row border rounded-2'>
      <img src="${product.img}" class=" col-6" alt="${product.title}">
      <div class="col-6">
          <h5 class="card-title">${product.title}</h5>
          <input type="number" class="form-control" value='${length}'>
      </div>
    </div>
  </div>`;
}
