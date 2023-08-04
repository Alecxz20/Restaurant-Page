import pizzaImg from '../../public/assets/pizza-desktop.png';

function Home() {
  const view = `
      <div class="content">
        <section class="text">
          <h1 class="hero-title">Papa Ghino’s Pizzas</h1>
          <p class="hero-text">handmade pizza</p>
          <button class="hero-btn"><a href="#/menu/">Discover Menu</a></button>
        </section>
        <section class="image">
          <img class="image-img" src=${pizzaImg} alt="pizza" />
        </section>
      </div>
    `;

  return view;
}

export default Home;

// href="#/menu/"
