import bestSeller from '../../public/assets/best-seller.png';

function renderPizza(obj) {
  const icon = `<img class="icon" src=${bestSeller} alt="best seller icon">`;

  const { title, description, topSelling, price, image } = obj;
  return `
    <div class="item">
        <div>
          <h3 class="item__title">${title}</h3>
          <p class="item__description">${description}</p>
          <p class="item__price">$${price}</p>
        </div>
        <div>
          <img class="pizzaImg" alt="pizza image" src=${image}>
        </div>
    </div>
  `;
}

export default renderPizza;
