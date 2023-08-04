import renderPizza from '../utils/renderPizza';
import Data from '../utils/data';

function Menu() {
  const promo = Data.filter((item) => item.category === 'Promo');
  const small = Data.filter((item) => item.category === 'Small');
  const medium = Data.filter((item) => item.category === 'Medium');
  const large = Data.filter((item) => item.category === 'Large');

  let view = '';

  view += '<div class="container">';

  view += '<h2 class="menu__title">Deals</h2>';
  view += '<div class="pizzas">';
  promo.forEach((item) => {
    view += renderPizza(item);
  });
  view += '</div>';

  view += '<h2 class="menu__title">Small</h2>';
  view += '<div class="pizzas">';
  small.forEach((item) => {
    view += renderPizza(item);
  });
  view += '</div>';

  view += '<h2 class="menu__title">Medium</h2>';
  view += '<div class="pizzas">';
  medium.forEach((item) => {
    view += renderPizza(item);
  });
  view += '</div>';

  view += '<h2 class="menu__title">Large</h2>';
  view += '<div class="pizzas">';
  large.forEach((item) => {
    view += renderPizza(item);
  });
  view += '</div>';

  view += '</div>';

  return view;
}

export default Menu;
