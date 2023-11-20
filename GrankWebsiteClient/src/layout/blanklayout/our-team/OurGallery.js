import React from "react";
import Header from "../header2/Header";
import FancyBoxs from "./FancyBoxs";

const OurGallery = () => {
  const settings6 = {
    // dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplaySpeed: 2000,
    // arrows: false,
    // className: "notes-slider",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="section-top">
        <Header />

        {/* banner start */}
        <div
          className="creative-banner-display-ads"
          style={{ backgroundColor: "#fff", position: "relative" }}
        >
          <img
            className="img-fluid w-100"
            src="assest/photos/our-team/meet-our-team-banner-white1.png"
            alt="G-Rank"
          />

          <div className="meet-our-team-banner-div">
            <h2>Gallery</h2>
            {/* <h3>
              We are a team of dreamers, thinkers and doers. We are not just all
              work, We have fun and much more..!
            </h3> */}
          </div>
        </div>
        {/* banner end */}

        {/* our team section start*/}
        <section>
          <div className="">
            <ul className="nav nav-tabs2" id="myTab" role="tablist">
              <li className=" nav-item2" role="presentation">
                <button
                  className="nav-link2 active"
                  id="home-tab2"
                  data-toggle="tab"
                  data-target="#home2"
                  type="button"
                  role="tab"
                  aria-controls="home2"
                  aria-selected="true"
                >
                  Gallery One
                </button>
              </li>
              <li className="nav-item2" role="presentation">
                <button
                  className="nav-link2 "
                  id="home-tab1"
                  data-toggle="tab"
                  data-target="#home1"
                  type="button"
                  role="tab"
                  aria-controls="home1"
                  aria-selected="true"
                >
                  Gallery One
                </button>
              </li>

              <li className="nav-item2" role="presentation">
                <button
                  className="nav-link2"
                  id="profile-tab2"
                  data-toggle="tab"
                  data-target="#profile2"
                  type="button"
                  role="tab"
                  aria-controls="profile2"
                  aria-selected="false"
                >
                  Gallery One
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home2"
              role="tabpanel"
              aria-labelledby="home-tab2"
            >
              <section className="gallery-block-section">
                <div class="container ">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 p-0">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-0">
                          <FancyBoxs
                            options={
                              ("slideShow",
                              "share",
                              "zoom",
                              "fullScreen",
                              "close")
                            }
                            // options={{true}}
                          >
                            <a
                              data-fancybox="gallery"
                              href="assest/photos/gallery/gallery1.jpeg"
                              data-caption="This image has a simple caption"
                            >
                              <img
                                className="gallery-block-img w-100"
                                src="assest/photos/gallery/gallery1.jpeg"
                                alt="Honer home"
                                title="Honer home"
                              />
                            </a>
                          </FancyBoxs>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-0">
                          <FancyBoxs>
                            <a
                              href="assest/photos/gallery/gallery2.jpg"
                              data-fancybox="gallery"
                              data-caption="This image has a simple caption"
                            >
                              <img
                                className="gallery-block-img w-100"
                                src="assest/photos/gallery/gallery2.jpg"
                                alt="Honer home"
                                title="Honer home"
                              />
                            </a>
                          </FancyBoxs>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-0">
                          <FancyBoxs>
                            <a
                              href="assest/photos/gallery/gallery3.JPG"
                              data-fancybox="gallery"
                              data-caption="This image has a simple caption"
                            >
                              <img
                                className="gallery-block-img w-100"
                                src="assest/photos/gallery/gallery3.JPG"
                                alt="Honer home"
                                title="Honer home"
                              />
                            </a>
                          </FancyBoxs>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-12 p-0">
                          <FancyBoxs>
                            <a
                              href="assest/photos/gallery/gallery4.jpg"
                              data-fancybox="gallery"
                              data-caption="This image has a simple caption"
                            >
                              <img
                                className="gallery-block-img2 w-100"
                                src="assest/photos/gallery/gallery4.jpg"
                                alt="Honer home"
                                title="Honer home"
                              />
                            </a>
                          </FancyBoxs>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-0">
                          <FancyBoxs>
                            <a
                              href="assest/photos/gallery/gallery7.jpeg"
                              data-fancybox="gallery"
                              data-caption="This image has a simple caption"
                            >
                              <img
                                className="gallery-block-img w-100"
                                src="assest/photos/gallery/gallery7.jpeg"
                                alt="Honer home"
                                title="Honer home"
                              />
                            </a>
                          </FancyBoxs>
                          <FancyBoxs>
                            <a
                              href="assest/photos/gallery/gallery9.jpeg"
                              data-fancybox="gallery"
                              data-caption="This image has a simple caption"
                            >
                              <img
                                className="gallery-block-img w-100"
                                src="assest/photos/gallery/gallery9.jpeg"
                                alt="Honer home"
                                title="Honer home"
                              />
                            </a>
                          </FancyBoxs>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 p-0">
                      <div className="row">
                        <div className="col-12">
                          <FancyBoxs>
                            <a
                              href="assest/photos/gallery/gallery8.jpeg"
                              data-fancybox="gallery"
                              data-caption="This image has a simple caption"
                            >
                              <img
                                className="gallery-block-img3 w-100"
                                src="assest/photos/gallery/gallery8.jpeg"
                                alt="Honer home"
                                title="Honer home"
                              />
                            </a>
                          </FancyBoxs>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div
              className="tab-pane "
              id="home1"
              role="tabpanel"
              aria-labelledby="home-tab1"
            >
              <section className="gallery-block-section">
                <div class="container ">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 p-0">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-0">
                          <FancyBoxs>
                            <a
                              href="assest/photos/gallery/birthday-img/birthday-img1.jpg"
                              data-fancybox="gallery"
                              data-caption="This image has a simple caption"
                            >
                              <img
                                className="gallery-block-img w-100"
                                src="assest/photos/gallery/birthday-img/birthday-img1.jpg"
                                alt="Honer home"
                                title="Honer home"
                              />
                            </a>
                          </FancyBoxs>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-0">
                          <FancyBoxs>
                            <a
                              href="assest/photos/gallery/birthday-img/birthday-img2.jpg"
                              data-fancybox="gallery"
                              data-caption="This image has a simple caption"
                            >
                              <img
                                className="gallery-block-img w-100"
                                src="assest/photos/gallery/birthday-img/birthday-img2.jpg"
                                alt="Honer home"
                                title="Honer home"
                              />
                            </a>
                          </FancyBoxs>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-0">
                          <FancyBoxs>
                            <a
                              href="assest/photos/gallery/birthday-img/birthday-img3.jpg"
                              data-fancybox="gallery"
                              data-caption="This image has a simple caption"
                            >
                              <img
                                className="gallery-block-img w-100"
                                src="assest/photos/gallery/birthday-img/birthday-img3.jpg"
                                alt="Honer home"
                                title="Honer home"
                              />
                            </a>
                          </FancyBoxs>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-12 p-0">
                          <FancyBoxs>
                            <a
                              href="assest/photos/gallery/birthday-img/birthday-img4.jpg"
                              data-fancybox="gallery"
                              data-caption="This image has a simple caption"
                            >
                              <img
                                className="gallery-block-img2 w-100"
                                src="assest/photos/gallery/birthday-img/birthday-img4.jpg"
                                alt="Honer home"
                                title="Honer home"
                              />
                            </a>
                          </FancyBoxs>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-0">
                          <FancyBoxs>
                            <a
                              href="assest/photos/gallery/birthday-img/birthday-img5.jpg"
                              data-fancybox="gallery"
                              data-caption="This image has a simple caption"
                            >
                              <img
                                className="gallery-block-img w-100"
                                src="assest/photos/gallery/birthday-img/birthday-img5.jpg"
                                alt="Honer home"
                                title="Honer home"
                              />
                            </a>
                          </FancyBoxs>
                          <FancyBoxs>
                            <a
                              href="assest/photos/gallery/birthday-img/birthday-img6.jpg"
                              data-fancybox="gallery"
                              data-caption="This image has a simple caption"
                            >
                              <img
                                className="gallery-block-img w-100"
                                src="assest/photos/gallery/birthday-img/birthday-img6.jpg"
                                alt="Honer home"
                                title="Honer home"
                              />
                            </a>
                          </FancyBoxs>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 p-0">
                      <div className="row">
                        <div className="col-12">
                          <FancyBoxs>
                            <a
                              href="assest/photos/gallery/birthday-img/birthday-img7.jpg"
                              data-fancybox="gallery"
                              data-caption="This image has a simple caption"
                            >
                              <img
                                className="gallery-block-img3 w-100"
                                src="assest/photos/gallery/birthday-img/birthday-img7.jpg"
                                alt="Honer home"
                                title="Honer home"
                              />
                            </a>
                          </FancyBoxs>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div
              className="tab-pane fade "
              id="profile2"
              role="tabpanel"
              aria-labelledby="profile-tab2"
            >
              <section className="gallery-block-section">
                <div class="container ">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-8 col-lg-8 p-0">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-0">
                          <FancyBoxs>
                            <a
                              href="assest/photos/gallery/birthday-img/birthday-img7.jpg"
                              data-fancybox="gallery1"
                              data-caption="This image has a simple caption"
                            >
                              <img
                                className="gallery-block-img w-100"
                                src="assest/photos/gallery/gallery1.jpeg"
                                alt="Honer home"
                                title="Honer home"
                              />
                            </a>
                          </FancyBoxs>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-0">
                          <FancyBoxs>
                            <a
                              href="assest/photos/gallery/birthday-img/birthday-img7.jpg"
                              data-fancybox="gallery1"
                              data-caption="This image has a simple caption"
                            >
                              <img
                                className="gallery-block-img w-100"
                                src="assest/photos/gallery/gallery2.jpg"
                                alt="Honer home"
                                title="Honer home"
                              />
                            </a>
                          </FancyBoxs>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-0">
                          <FancyBoxs>
                            <a
                              href="assest/photos/gallery/birthday-img/birthday-img7.jpg"
                              data-fancybox="gallery1"
                              data-caption="This image has a simple caption"
                            >
                              <img
                                className="gallery-block-img w-100"
                                src="assest/photos/gallery/gallery3.JPG"
                                alt="Honer home"
                                title="Honer home"
                              />
                            </a>
                          </FancyBoxs>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-8 col-md-8 col-sm-12 col-12 p-0">
                          <FancyBoxs>
                            <a
                              href="assest/photos/gallery/birthday-img/birthday-img7.jpg"
                              data-fancybox="gallery1"
                              data-caption="This image has a simple caption"
                            >
                              <img
                                className="gallery-block-img2 w-100"
                                src="assest/photos/gallery/gallery4.jpg"
                                alt="Honer home"
                                title="Honer home"
                              />
                            </a>
                          </FancyBoxs>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12 col-12 p-0">
                          <FancyBoxs>
                            <a
                              href="assest/photos/gallery/birthday-img/birthday-img7.jpg"
                              data-fancybox="gallery1"
                              data-caption="This image has a simple caption"
                            >
                              <img
                                className="gallery-block-img w-100"
                                src="assest/photos/gallery/gallery7.jpeg"
                                alt="Honer home"
                                title="Honer home"
                              />
                            </a>
                          </FancyBoxs>
                          <FancyBoxs>
                            <a
                              href="assest/photos/gallery/birthday-img/birthday-img7.jpg"
                              data-fancybox="gallery1"
                              data-caption="This image has a simple caption"
                            >
                              <img
                                className="gallery-block-img w-100"
                                src="assest/photos/gallery/gallery9.jpeg"
                                alt="Honer home"
                                title="Honer home"
                              />
                            </a>
                          </FancyBoxs>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 p-0">
                      <div className="row">
                        <div className="col-12">
                          <FancyBoxs>
                            <a
                              href="assest/photos/gallery/birthday-img/birthday-img7.jpg"
                              data-fancybox="gallery1"
                              data-caption="This image has a simple caption"
                            >
                              <img
                                className="gallery-block-img3 w-100"
                                src="assest/photos/gallery/gallery8.jpeg"
                                alt="Honer home"
                                title="Honer home"
                              />
                            </a>
                          </FancyBoxs>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default OurGallery;
