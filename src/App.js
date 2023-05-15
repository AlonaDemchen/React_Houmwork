import logo from './logo.svg';
import './App.scss';
import CardItem from './components/CardItem';

function App() {

  return (
    <>
      <header>
        <img class="logo" src="https://brammels.com/wp-content/uploads/2022/10/a-level-ukraine-logo.png" alt="Oops!" />
        <nav class="main-nav hamburger-menu">
          <input id="menu__toggle" type="checkbox" />
          <label class="menu__btn" for="menu__toggle">
            <span></span>
          </label>

          <ul class="menu__box">
            <li><a class="menu__item" href="#">Головна сторінка</a></li>
            <li><a class="menu__item" href="#">Наша команда</a></li>
            <li><a class="menu__item" href="#">Наші роботи</a></li>
            <li><a class="menu__item" href="#">Блог</a></li>
            <li><a class="menu__item" href="#">Контакти</a></li>
          </ul>
        </nav>

      </header>
      <main>
        <aside class="aside1">
          <p> Aside 1</p>
        </aside>
        <div class="text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ab obcaecati quos odio rem quo, vel molestiae consectetur facere facilis saepe et nemo itaque. Expedita aut illum sint sed ipsa optio reprehenderit suscipit ducimus unde, aspernatur corporis cum pariatur explicabo. Voluptate fugit sint, exercitationem illum ad aut aperiam deleniti delectus.</p>
          <h1>OUR WORK</h1>
          <div class="card_items">
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
            <CardItem/>
          </div>
        </div>
        <aside class="aside2">
          <p> Aside 2</p>
        </aside>

      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
}

export default App;
