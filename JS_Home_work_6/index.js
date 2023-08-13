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
  })

// //function forFilter() {
//       for (let card of document.getElementsByClassName("card")) {
//         if (newCard.getElementsByClassName("seach-input")[0] == card.title || newCard.getElementsByClassName("seach-input")[0] == card.description) {
//           return card;
//         } else return "Ничего не найдено";
//       }
//     }
//function siteSearch() {
//return productsArray.filter(forFilter) ;  
//}

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


