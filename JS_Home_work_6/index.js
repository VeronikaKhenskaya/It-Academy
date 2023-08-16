fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then((data) => {
    //console.log(data.products);

    function createCard() {
      let container = document.getElementById("main-container");
      let parent = document.getElementsByClassName("card")[0];
      let clone = parent.cloneNode(true);
      container.appendChild(clone);
      return clone;
    }

    const productsArray = data.products;
    for (const product of productsArray) {
      let newCard = createCard();
      newCard.getElementsByClassName("card-img-top")[0].src = product.images[0];
      newCard.getElementsByClassName("card-title")[0].textContent = product.title;
      newCard.getElementsByClassName("card-text")[0].textContent = product.description;
      newCard.getElementsByClassName("price")[0].textContent = `Price: ${product.price}$`;
      newCard.getElementsByClassName("rating")[0].textContent = `Rating: ${product.rating}`;
    }
  })


  window.addEventListener("click", function (event) {
    if (event.target.hasAttribute("href")) {
      const card = event.target.closest(".card-body");
      let productInfo = {
        title: card.querySelector(".card-title").innerText,
        imgSrc: card.closest(".card").querySelector(".card-img-top").hasAttribute("src"),
        price: card.querySelector(".price").innerText,
      }

      const cartItemHtml = ` <div class="item-information">
        <div class="item-image">${productInfo.imgSrc}</div>
        <div class="item-title">${productInfo.title}</div>
        <div class="quantity-price">
          <div data-id="minus-quantity" data-id="minus">-</div>
          <div class="common-price-quantity">
            <div class="is-quantity">0</div>
            <div class="multiply">x</div>
            <div class="is-price">${productInfo.price}</div>
          </div>
          <div class="plus-quantity" data-id="plus">+</div>
        </div>
      </div>`

      const cartWrapper = document.querySelector(".main-container");
      const itemInCartInfo = cartWrapper.children[1];
      console.log(cartWrapper.children)
      let itemInCart = itemInCartInfo.children[1].innerText;
      //let OrderBtn = `<a class="order-btn">Order</a>`
      cartWrapper.insertAdjacentHTML("beforeend", cartItemHtml);
      //shoppingCart.insertAdjacentHTML("beforeend", OrderBtn);
      let productInCart = document.getElementsByClassName(".item-information");
    }
  })






window.addEventListener('resize', resizeScreen);
function resizeScreen() {
  for (let card of document.getElementsByClassName("card")) {
    if (window.innerWidth <= 768) {
      card.style.width = '90%';
    } else {
      card.style.width = '20%';
    }
  }
}

let openButton = document.getElementById("your-cart");
let shoppingCart = document.getElementsByClassName("main-container")[0];
let closeButton = document.getElementsByClassName("close-btn")[0];

function openCart() {
  shoppingCart.style.display = "flex";
  shoppingCart.style.display.justifyContent = "space-between";
  document.body.style.background = "#B4B4B4";
  document.body.style.position = "fixed";
}
openButton.addEventListener("click", openCart)

function closeCart() {
  shoppingCart.style.display = "none";
  document.body.style.background = "white";
  document.body.style.position = "initial";
}
closeButton.addEventListener('click', closeCart);
