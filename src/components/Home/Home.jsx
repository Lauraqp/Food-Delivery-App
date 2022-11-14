import React from "react";
import iconoLocation from "../../assest/Svgl.png";
import restaurant1 from "../../assest/Mask group.png";
import restaurant2 from "../../assest/restaurant2.png";
import restaurant3 from "../../assest/resturant3.png";
import restaurant4 from "../../assest/restaurant4.png";



import "./home.scss";
import hamburgers from "../../assest/hamburguers.png";
import pizza from "../../assest/pizza.png";

const Home = () => {
  return (
    <div className="home">
      <section className="home__location">
        <figure>
          <img src={iconoLocation} alt="icono Location" />
        </figure>
        <article>
          <h1 className="home__h1">DELIVER TO</h1>
          <p className="home__p">882 Well St, New-york</p>
        </article>
      </section>

      <section>carousel</section>

      <section className="home__categorys">
        <h2 className="home__h2">Restaurants and cafes</h2>
        <article className="home__buttons">
          <button className="home__button">All</button>
          <button className="home__button">
            <img src={hamburgers} alt="" /> Fast Food
          </button>
          <button className="home__button">
            <img src={pizza} alt="" /> Pizza
          </button>
        </article>
      </section>

      <section className="home__cards">

        <article className="home__restaurant">
        <figure>
          <img src={restaurant1} alt="" />
        </figure>
         <article>
         <h3 className="home__h3">Pardes Restaurant</h3>
          <p>
            Work time 09:30 - 23:00 <br></br>
            <span>Before you 4$</span>
          </p>
         </article>
        </article>

        <article className="home__restaurant">
        <figure>
          <img src={restaurant2} alt="" />
        </figure>
        <article>
        <h3 className="home__h3">Glamour Kafe</h3>
          <p>
          Work time 09:00 - 21:00 <br></br>
            <span>Before you 13$</span>
          </p>
        </article>
        </article>

        <article className="home__restaurant">
        <figure>
          <img src={restaurant3} alt="" />
        </figure>
        <article>
        <h3 className="home__h3">Aromat Bakery</h3>
          <p>
          Work time 09:00 - 22:00<br></br>
            <span>Before you 3$</span>
          </p>
        </article>
        </article>

        <article className="home__restaurant">
        <figure>
          <img src={restaurant4} alt="" />
        </figure>
          <article>
          <h3 className="home__h3">Last night Restaurant & kafe</h3>
          <p>
          Work time 10:00 - 22:00<br></br>
            <span>Before you 5$</span>
          </p>
          </article>
        </article>
      </section>
    </div>
  );
};

export default Home;
