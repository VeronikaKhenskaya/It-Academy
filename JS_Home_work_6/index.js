function createCard() {
  let container = document.getElementById("main-container");
  let parent = document.getElementsByClassName("card")[0];
  let clone = parent.cloneNode(true);
  container.appendChild(clone);
  return clone;
}

fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then((data) => {
    console.log(data.products);
    const productsArray = data.products;
    for (const product of productsArray) {
      let newCard = createCard();
      newCard.getElementsByClassName("card-img-top")[0].src = product.images[0];
      newCard.getElementsByClassName("card-title")[0].textContent = product.title;
      newCard.getElementsByClassName("card-text")[0].textContent = product.description;
      newCard.getElementsByClassName("price")[0].textContent = `Price: ${product.price}$`;
      newCard.getElementsByClassName("rating")[0].textContent = `Rating: ${product.rating}`;
    }

    //const productsArray = data.products;
    let itemsMap = new Map();
     for(let i=0; i < productsArray.length; i++){
     itemsMap.set(productsArray[i].title, productsArray[i]); 
     itemsMap.forEach((value, key) => {
    console.log(`${key}: ${value}`); 
  });
    }

    //let shoppingCart = new Map();

   // function addToShoppingCart(){
    //  let addButton = document.getElementById
  //  }


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
  shoppingCart.style.display = "block";
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
