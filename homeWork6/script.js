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

document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchData(url1);

  const cardsEl = document.querySelector('.cards__wrapper')


  data.forEach(el => {

    cardsEl.insertAdjacentHTML("beforeend", `
    <div class="cards__item">
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
})


