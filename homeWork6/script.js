// Дан макет сайта
// https://www.figma.com/file/mnLY69cYE5cqWM5w6n5hXx/Seo-%26-Digital-Marketing-Landing-Page?node-id=190%3A1194&t=q4NMnXTnwyyTSGA6-0
// В блоке Featured Items небходимо реализовать шаблон товаров.
// Для этого необходимо создать json формат данных по всем товарам.
// Из этого файла сформировать блок Featured Items.
// Всю вёрстку остальных частей реализовывать не нужно, если у вас она
// была сделана на html/css можно использовать, заново создавать не требуется.

const url1 = "./data.json";
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
}
const cartContent = document.querySelector(".cart-content");
document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchData(url1);

  const cardsEl = document.querySelector('.cards__wrapper')


  data.forEach(el => {

    cardsEl.insertAdjacentHTML("beforeend", `
    <div class="cards__item" id="${el.id}">
         <div class="item-img" style="background-image: url(${el.url})">
          <div class="item-img__hover">
            <button class="item-img__hover-btn">Add to Cart</button>
          </div>
         </div>
          <div class="item-description">
            <h4 class="item-title">${el.title}</h4>
            <p class="item-text">${el.description}</p>
            <p class="item-price">${el.price}</p>
          </div>
    </div>
    `)
  });

updateCart(data);
})

const cartIcon = document.querySelector('#cart-icon');
const cart = document.querySelector('.cart');
const cartClose = document.querySelector('#close-cart');

// let itemDeletes = document.querySelectorAll('.cart-remove');
// console.log(itemDeletes);
//
// for (const element of itemDeletes) {
//   element.addEventListener('click', removeCartItem);
// }

cartIcon.addEventListener('click', () => {
  cart.classList.add('active');
});

cartClose.addEventListener('click', () => {
  cart.classList.remove('active');
});

function removeCartItem (cartItem, data) {
  let parent = cartItem.parentElement;
  localStorage.removeItem(parent.id);
  updateCart(data);
}

function updateCart(data){

  const productsCards = document.querySelectorAll(".cards__item");
  cartContent.innerHTML = '';
  productsCards.forEach((element) => {
    element.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("item-img__hover-btn")) {
        data.forEach((el) => {
          if (el.id == element.id) {
            localStorage.setItem(JSON.stringify(el.id), [
              JSON.stringify(el.title),
              JSON.stringify(el.price),
              JSON.stringify(el.url),
            ]);


            cartContent.insertAdjacentHTML(
                "afterbegin",
                `<div class="cart-box" id="${el.id}">
              <img class="cart-img" src="${el.url}" alt="">
              <div class="detail-box">
                <div class="item-title">${el.title}</div>
                <div class="item-price">${el.price}</div>
                <input type="number" value="1" min="1" class="cart-quantity">
              </div>
              <i class="fa fa-regular fa-trash cart-remove""></i>
            </div>`
            );
            let itemDeletes = document.querySelectorAll('.cart-remove');
            console.log(itemDeletes);

            for (const cartItem of itemDeletes) {
              cartItem.addEventListener('click', (evt) => {
                let parent = cartItem.parentElement;
                localStorage.removeItem(parent.id);
                cartItem.parentElement.remove();
              });
            }
          }
        });
      }
    });
  });
}




