import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <div className="headerWrapper">
        <header id="hello">
          {/* Container */}
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2">
                <div className="banner">
                  <h3>-introducing-</h3>
                  <h1>FATTY BURGER</h1>
                  <div className="inner_banner">
                    <div className="banner_content">
                      <p>
                        A double layer of sear-sizzled 100% pure beef mingled
                        with special sauce on a sesame seed bun and topped with
                        melty American cheese, crisp lettuce, minced onions and
                        tangy pickles.
                      </p>
                      <p>*Based on pre-cooked patty weight.</p>
                    </div>
                    <div className="stamp">
                      <img src="/images/stamp.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Container end */}
          <p className="caption">*Limited Time Only</p>
        </header>
      </div>
      <section id="block">
        <div className="container">
          {/* First section */}
          <div className="row">
            <div className="col-sm-8">
              <div className="feature">
                <div className="shack_burger">
                  <div className="chicken">
                    <img src="/images/chicken.png" alt="Chicken" />
                  </div>
                  <h2>Shack Burger</h2>
                  <p>
                    Black Angus beef patty topped with American cheese, tomato,
                    lettuce, and “Shack Sauce,” served in a grilled potato bun
                  </p>
                </div>
                <p className="caption">*Limited Time Only</p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="signature">
                <div className="shape">
                  <span className="flaticon flaticon-burger" />
                  <p>signature</p>
                </div>
                <div className="signature_content">
                  <p>
                    It used to be a Secret but not any more! Our tribute to the
                    King is a Cheddar Beef Patty,
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* first section end */}
          {/* Second section */}
          <div className="row">
            <div className="col-md-6">
              <div className="classic">
                <a href="" className="classic_btn">
                  classic
                </a>
                <div className="overlay">
                  <h3>House-ground hamburger</h3>
                  <p>(served in a grilled rosemary focaccia).</p>
                  <p className="overlay_content">
                    Instead of traditional cucumber pickles, legendary
                    chef-owner Judy Rodgers accents her burgers with thin-cut
                    zucchini strips pickled in apple cider vinegar, mustard
                    seeds and turmeric.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              {/* Carousel */}
              <div
                id="small_carousel"
                className="carousel slide"
                data-ride="carousel"
              >
                {/* Indicators */}
                <ol className="carousel-indicators">
                  <li
                    data-target="#small_carousel"
                    data-slide-to={0}
                    className="active"
                  />
                  <li data-target="#small_carousel" data-slide-to={1} />
                  <li data-target="#small_carousel" data-slide-to={2} />
                </ol>
                <div className="carousel-caption">
                  <h3>The Original Burger</h3>
                  <hr />
                  <ul className="list-unstyled nutrition">
                    <li>
                      <a href="">
                        <span className="flaticon flaticon-protein" />
                        <p>Protein - 33g</p>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <span className="flaticon flaticon-carbohydrate" />
                        <p>Carbohydrates - 46gm</p>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <span className="flaticon flaticon-calories" />
                        <p>Calories - 750 kcal</p>
                      </a>
                    </li>
                  </ul>
                  <div className="info_btn_shadow">
                    <a href="" className="info_btn">
                      info &amp; nutrition
                    </a>
                  </div>
                </div>
                {/* carousel inner */}
                <div className="carousel-inner" role="listbox">
                  <div className="item active">
                    <img src="/images/small_slider_bg.jpg" alt="" />
                  </div>
                  <div className="item">
                    <img src="/images/small_slider_bg.jpg" alt="" />
                  </div>
                  <div className="item">
                    <img src="/images/small_slider_bg.jpg" alt="" />
                  </div>
                </div>
                {/* carousel inner end */}
              </div>
              {/* Carousel end*/}
            </div>
          </div>
          {/* second section end */}
          {/* Third section */}
          {/* Carousel */}
          <div id="carousel" className="carousel slide" data-ride="carousel">
            {/* Indicators */}
            <ol className="carousel-indicators">
              <li
                data-target="#carousel"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#carousel" data-slide-to={1} />
              <li data-target="#carousel" data-slide-to={2} />
            </ol>
            {/* carousel inner */}
            <div className="carousel-inner" role="listbox">
              <div className="item active">
                <img src="/images/large_slider_img.jpg" alt="Burger" />
                <div className="carousel-caption">
                  <h2>Cheddar JUnky</h2>
                  <h3>Stuffed Burgers</h3>
                  <p>
                    Chef Wesley Genovart makes this over-the-top, Shake
                    Shack–inspired burger with two thin stacked patties,
                    thick-cut bacon, kimchi and a spicy homemade sauce.
                  </p>
                  <div className="info_btn_shadow">
                    <a href="" className="info_btn">
                      info &amp; nutrition
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <img src="/images/large_slider_img.jpg" alt="Burger" />
                <div className="carousel-caption">
                  <h2>Cheddar JUnky</h2>
                  <h3>Stuffed Burgers</h3>
                  <p>
                    Chef Wesley Genovart makes this over-the-top, Shake
                    Shack–inspired burger with two thin stacked patties,
                    thick-cut bacon, kimchi and a spicy homemade sauce.
                  </p>
                  <div className="info_btn_shadow">
                    <a href="" className="info_btn">
                      info &amp; nutrition
                    </a>
                  </div>
                </div>
              </div>
              <div className="item">
                <img src="/images/large_slider_img.jpg" alt="Burger" />
                <div className="carousel-caption">
                  <h2>Cheddar JUnky</h2>
                  <h3>Stuffed Burgers</h3>
                  <p>
                    Chef Wesley Genovart makes this over-the-top, Shake
                    Shack–inspired burger with two thin stacked patties,
                    thick-cut bacon, kimchi and a spicy homemade sauce.
                  </p>
                  <div className="info_btn_shadow">
                    <a href="" className="info_btn">
                      info &amp; nutrition
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* carousel inner end */}
          </div>
          {/* Carousel end*/}
          {/* Forth section */}
          <div className="row forth_sec">
            <div className="col-sm-4">
              <Link href="/menu" style={{ color: "white" }} title="Menü">
                <div className="menu">
                  <div className="menu_inner_content">
                    <span className="flaticon flaticon-burger" />
                    <h2>Menü</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-sm-4">
              <Link href="/menu" style={{ color: "white" }} title="İçecekler">
                <div className="drinks">
                  <div className="menu_inner_content">
                    <span className="flaticon flaticon-drink" />
                    <h2>İçecekler</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-sm-4">
              <Link href="/menu" style={{ color: "white" }} title="Aperatif">
                <div className="sides">
                  <div className="menu_inner_content">
                    <span className="flaticon flaticon-food" />
                    <h2>Aperatif</h2>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          {/* forth section end */}
        </div>
      </section>
      <section id="lock">
        <h2>SERVING MORE THAN JUST BURGERS SINCE 1998</h2>
        <p>Check out our opening hours and location address below.</p>
      </section>
      <div id="ourmaps"></div>
    </>
  );
};

export default Home;
