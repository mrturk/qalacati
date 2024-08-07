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
                <div className="banner" style={{ visibility: "hidden" }}>
                  <h3>-Q ALAÇATI-</h3>
                  <h1>TEST</h1>
                  <div
                    className="inner_banner"
                    style={{ visibility: "hidden" }}
                  >
                    <div className="banner_content">
                      <p>
                        TESTTES TTESTTEST TESTTESTTESTTESTTESTTESTT
                        ESTTESTTESTTESTTESTTES TTESTTESTTESTTES TTESTTESTTEST
                        TESTTESTTESTTE STTESTTESTTESTTEST TESTTES TTESTTEST
                        TESTTESTTESTTESTTESTTESTT.
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
          {/* <p className="caption">*Limited Time Only</p> */}
        </header>
      </div>
      <section id="block">
        <div className="container">
          {/* First section */}

          {/* first section end */}
          {/* Second section */}

          {/* second section end */}
          {/* Third section */}
          {/* Carousel */}

          {/* Carousel end*/}
          {/* Forth section */}
          <div className="row forth_sec">
            <div className="col-sm-6">
              <Link href="/menu" style={{ color: "white" }} title="Menü">
                <div className="menu">
                  <div className="menu_inner_content">
                    <span className="flaticon flaticon-burger" />
                    <h2>Menü</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-sm-6">
              <Link href="/contact" style={{ color: "white" }} title="İletişim">
                <div className="drinks">
                  <div className="menu_inner_content">
                    <span className="flaticon" />
                    <h2>İletişim</h2>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          {/* forth section end */}
        </div>
      </section>
      {/* <section id="lock">
        <h2>SERVING MORE THAN JUST BURGERS SINCE 1998</h2>
        <p>Check out our opening hours and location address below.</p>
      </section> */}
      {/* <div id="ourmaps"></div> */}
    </>
  );
};

export default Home;
