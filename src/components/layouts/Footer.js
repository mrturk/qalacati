import React from "react";

const Footer = () => {
  return (
    <footer style={{ marginTop: "40px" }}>
      {/* Container */}
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-3 col-sm-4 col-xs-12 col-lg-offset-1 pull-right">
            <div className="subscribe">
              <h4>Subscribe now</h4>
              <p>
                Subscribe to the newsletter and get some crispy stuff every
                week.
              </p>
              <form role="form">
                <div className="form-group">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      id="em"
                      placeholder="Enter your e-mail here"
                    />
                    <span className="input-group-btn">
                      <button type="submit" className="btn send_btn">
                        <i className="glyphicon glyphicon-send" />
                      </button>
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div> */}
          {/* <div className="col-lg-3 col-sm-4 col-xs-12 col-lg-offset-1 pull-right">
            <div className="contact_us">
              <h4>Bizim ile İletişime Geçin</h4>
              <a href="">info@junkyburget.com</a>
              <address>
                Jalan Awan Hijau, Taman OUG
                <br />
                58200 Kuala Lumpur <br />
                Malaysia <br />
              </address>
            </div>
          </div> */}
          <div className="col-lg-12 col-sm-12 col-xs-12 pull-right">
            <div className="basic_info">
              <a href="">
                <img
                  className="footer_logo"
                  src="/images/footer_logo.png"
                  alt="Burger"
                />
              </a>
              <ul className="list-inline social">
                {/* <li>
                  <a href="" className="fa fa-facebook" />
                </li>
                <li>
                  <a href="" className="fa fa-twitter" />
                </li> */}
                <li>
                  <a
                    href="https://www.instagram.com/qalacatiotel/"
                    target="_blank"
                    className="fa fa-instagram"
                  />
                </li>
              </ul>
              <div className="footer-copyright">
                <p className="wow fadeInRight" data-wow-duration="1s">
                  Made with
                  <i
                    style={{ marginLeft: "10px", marginRight: "10px" }}
                    className="fa fa-heart"
                  />
                  by
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/yunus-emre-%C3%A7%C4%B1rac%C4%B1-a92860200/"
                  >
                    Yunus Emre Çıracı
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Container end */}
    </footer>
  );
};

export default Footer;
