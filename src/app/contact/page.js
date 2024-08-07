import React from "react";
export const metadata = {
  title: "İletişim",
};

const Page = () => {
  return (
    <>
      <header id="hello">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="banner" style={{ paddingTop: "30px" }}>
                <h1>İLETİŞİM</h1>
                <div className="inner_banner">
                  <div className="banner_content"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Page;
