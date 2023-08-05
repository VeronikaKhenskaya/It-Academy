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
  });



