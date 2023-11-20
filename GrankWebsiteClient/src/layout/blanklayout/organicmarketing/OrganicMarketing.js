import { useEffect, useRef } from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { NavLink } from "react-router-dom";
import Seo from "../seo/Seo";
const OrganicMarketing = () => {
  const settings3 = {
    // dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 6,
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
  // video autoplay start
  const vidRef = useRef();
  useEffect(() => {
    vidRef.current.play();
  }, []);
  // video autoplay end
  return (
    <>
      <Seo
        title="Organic Marketing Agency in Bangalore | Hyderabad"
        description="Display advertising service in bangalore and hyderbad. Amplify your brand's visibility and impact with our Display Ads strategies."
        name="Company name."
        type="article"
        YahooSeeker="INDEX, FOLLOW"
        msnbot="INDEX, FOLLOW"
        googlebot="INDEX, FOLLOW"
        keywords="react, meta tags, seo"
        searchengines="ALL"
        canonical="https://www.grank.co.in"
      ></Seo>
      <section className="section-top">
        <Header />
        {/* banner start */}
        <div className="organic-marketing-banner">
          <img
            className="img-fluid w-100 mobile-none"
            src="assest/photos/organicmarketing/organic-marketing-banner.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/organicmarketing/organic-marketing-banner-mobile2.png"
            alt="G-Rank"
          />
          <div className="organic-marketing-banner-new-div">
            <motion.img
              className="img-fluid w-100"
              src="assest/photos/organicmarketing/organic-yellow-patch2.png"
              alt="G-Rank"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
            <h1 data-text="Organic Marketing">
              <span class="words3"></span>
              Organic
              <br />
              Marketing
            </h1>
            <h2>Marketing Done Right!</h2>

            <h3 href="#">
              <a href="#">Explore</a>
            </h3>
            <div className="div2-p2">
              <motion.p
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <span className="voilet">300% </span>
                <br />
                Organic growth <br />
                Quarterly
              </motion.p>
            </div>
            <div>
              <motion.p
                className="p2"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                Retain more than <span className="pink">150+</span>
                <br /> customers through Organic <br />
                Marketing
              </motion.p>
            </div>
          </div>
        </div>
        {/* banner end */}
        {/* Question mark start */}
        <section className="question-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-4 col-lg-4">
                <img
                  className="img-fluid w-100 shakex"
                  src="assest/photos/organicmarketing/organic-marketing-question-img.png"
                  alt="G-Rank"
                />
              </div>
              <div className="col-12 col-md-8 col-lg-8 question-div">
                <motion.h1
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  Why Choose G-Rank?
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  At G-Rank, we excel in elevating your online presence with
                  cutting-edge strategies. Our expert team is dedicated to every
                  project, utilizing their in-depth knowledge of search engine
                  algorithms and user behavior. We craft personalized strategies
                  to drive targeted traffic to your website. Authenticity and
                  long-term growth are our priorities, as we focus on
                  sustainable organic marketing techniques that build a strong
                  foundation for your online brand, ensuring lasting success.
                </motion.p>
              </div>
            </div>
          </div>
        </section>
        {/* Question mark end */}
        {/* video section start */}
        <section className="video-section">
          <video
            className="img-fluid oragnic-marketing-video"
            src="assest/videos/organic-marketing-video.mp4"
            ref={vidRef}
            muted
            autoPlay
            loop
          />
          <div className="videos-text">
            <h1>Grow Your Business Organically</h1>
            <p>
              In today's fiercely competitive digital landscape, businesses must
              employ effective strategies to build customer trust. As an agency,
              we understand the significance of organic marketing, a powerful
              strategy that creates valuable content for prospective consumers
              without incurring significant costs. Our approach to organic
              marketing is rooted in a long-term perspective, aiming to attract
              and convert people naturally without relying heavily on paid
              advertising.
            </p>
          </div>
        </section>
        {/* video section end */}
        {/* marketing service start */}
        <section className="organic-market-service-section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="org-mark-sem-text">
                  <motion.h1
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    Our Organic Marketing Services
                  </motion.h1>
                  <p>
                    We provide a wide range of services related to
                    <br />
                    Organic marketing. Our services include:
                  </p>
                </div>
              </div>
              <motion.div
                className="col-12 col-md-4 col-lg-4"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <motion.div
                  className="organic-market-service-div"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    className="img-fluid "
                    src="assest/photos/organicmarketing/organic-seo.png"
                    alt="G-Rank"
                  />
                </motion.div>
                <h1 className="organic-market-service-text">
                  Search Engine <br />
                  Optimization
                </h1>
              </motion.div>
              <motion.div
                className="col-12 col-md-4 col-lg-4"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <motion.div
                  className="organic-market-service-div"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    className="img-fluid "
                    src="assest/photos/organicmarketing/organic-social-media.png"
                    alt="G-Rank"
                  />
                </motion.div>
                <h1 className="organic-market-service-text">
                  Social Media <br />
                  Optimization
                </h1>
              </motion.div>
              <motion.div
                className="col-12 col-md-4 col-lg-4"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                <motion.div
                  className="organic-market-service-div"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    className="img-fluid "
                    src="assest/photos/organicmarketing/organic-content-marketing.png"
                    alt="G-Rank"
                  />
                </motion.div>
                <h1 className="organic-market-service-text">
                  Content
                  <br /> Marketing
                </h1>
              </motion.div>
            </div>
          </div>
        </section>
        {/* marketing service end */}
        {/* action yellow start*/}
        <div className="action-yellow-div-text">
          <motion.p
            initial={{ opacity: 0, scale: 0, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Want to Elevate Your Brand?
            <br /> Get in Touch.
          </motion.p>
          <a href="#">
            <motion.p
              className="action-yellow-div-buttom"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Contact Us <ArrowRightAltIcon />
            </motion.p>
          </a>
        </div>
        {/* action yellow end*/}

        {/* Quick Link section start */}
        <section>
          <div className="container-fluid">
            <div>
              <motion.h2
                className="branding-quick-link"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                Quick Links
                <p className="d-block"> For You</p>
              </motion.h2>
              <Slider {...settings3}>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/branding"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">Branding</h1>
                  </div>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/creative-content"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">
                      Creative & <p className="d-block"> Content</p>
                    </h1>
                  </div>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/organic-marketing"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">
                      Organic <p className="d-block"> marketing</p>
                    </h1>
                  </div>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/performance-marketing"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">
                      Performance <p className="d-block"> marketing</p>
                    </h1>
                  </div>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/social-media"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">Social Media</h1>
                  </div>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/web-development"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">
                      Web <p className="d-block"> Development</p>
                    </h1>
                  </div>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/domain"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">Domain</h1>
                  </div>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/hosting"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">
                      Web <p className="d-block"> Hosting</p>
                    </h1>
                  </div>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/security"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">Security</h1>
                  </div>
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#000" : "#000",
                  })}
                  to="/email"
                  className=""
                >
                  <div className="slider-div2">
                    <h1 className="slider-img2">Email</h1>
                  </div>
                </NavLink>
              </Slider>
            </div>
          </div>
        </section>
        {/* Quick Link section end */}
        <img
          className="img-fluid w-100"
          src="assest/photos/branding/branding-footer-img.png"
          alt="G-Rank"
        />
      </section>
      {/* <section className="section-top">
        <div className="pt-bottom-header bgwhite">
          <div className="container p-0">
            <div className="row pt15 pb10 dno">
              <div className="col-12 col-md-5 col-lg-5"></div>

              <div className="col-12 col-md-7 col-lg-7 text-right">
                <div className="hsc text-right">
                  <ul>
                    <li>
                      <a href="#">
                        <img
                          src="assest/photos/grank3.png"
                          alt="G-Rank"
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assest/photos/gpartner2.png"
                          alt="G-Rank"
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assest/photos/gworkspace2.png"
                          alt="G-Rank"
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assest/photos/gcloud3.jpg"
                          alt="G-Rank"
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assest/photos/bing.jpg"
                          alt="G-Rank"
                          className="img-fluid"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img
                          src="assest/photos/rediff.jpg"
                          alt="G-Rank"
                          className="img-fluid"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="second-menu">
          <div className="container">
            <ul className="second-menu-ul">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Shared Hosting</a>
              </li>
              <li>
                <a href="#">Wordpress Hosting</a>
              </li>
              <li>
                <a href="#">Dadicated Hosting</a>
              </li>
              <li>
                <a href="#">VPS Hosting</a>
              </li>
            </ul>
          </div>
        </div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="assest/photos/1.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="assest/photos/2.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="assest/photos/3.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-target="#carouselExampleControls"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-target="#carouselExampleControls"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </button>
        </div>

        <div className="col-md-12">
          <div className="below-banner">
            <ul>
              <li className="ywbg">
                <div className="link-area-yb">
                  <a href="reach-us.php">
                    <span>Website Needs</span>
                  </a>
                </div>
              </li>
              <li className="bnbg">
                <div className="link-area-bn">
                  <a href="reach-us.php">
                    <span>Reach Us</span>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section-margin">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-6">
                  <img
                    className="elementor-icon-list-img"
                    src="assest/photos/why.jpg"
                    alt="..."
                  />
                </div>
                <div className="col-md-6">
                  <h5 className="pt-section-title">
                    Why MrCreative <span className="imp-word">?</span>
                  </h5>
                  <div className="accordion" id="accordionExample">
                    <div className="card">
                      <div className="card-header" id="headingOne">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link btn-block text-left"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Why Choose MrCreative ?
                          </button>
                        </h2>
                      </div>

                      <div
                        id="collapseOne"
                        className="collapse show"
                        aria-labelledby="headingOne"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          Some placeholder content for the first accordion
                          panel. This panel is shown by default, thanks to the{" "}
                          <code>.show</code> class.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingTwo">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link btn-block text-left collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            What We Offer ?
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseTwo"
                        className="collapse"
                        aria-labelledby="headingTwo"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          Some placeholder content for the second accordion
                          panel. This panel is hidden by default.
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-header" id="headingThree">
                        <h2 className="mb-0">
                          <button
                            className="btn btn-link btn-block text-left collapsed"
                            type="button"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Do You Promote Website ?
                          </button>
                        </h2>
                      </div>
                      <div
                        id="collapseThree"
                        className="collapse"
                        aria-labelledby="headingThree"
                        data-parent="#accordionExample"
                      >
                        <div className="card-body">
                          And lastly, the placeholder content for the third and
                          final accordion panel. This panel is hidden by
                          default.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-margin">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-12">
                  <h5 className="pt-section-title">
                    Everything You <span className="imp-word">Need</span> to Get
                    Online
                  </h5>
                </div>
                <div className="col-12">
                  <img
                    className="elementor-icon-list-img"
                    src="assest/photos/every.jpg"
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <p className="elementor-icon-list-p">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <ul className="elementor-icon-list-items">
                <li className="elementor-icon-list-item">
                  <span className="elementor-icon-list-icon">
                    <i aria-hidden="true" className="ion ion-android-done-all"></i>{" "}
                  </span>
                  <span className="elementor-icon-list-text">
                    We have 100’s of domains to choose from, not to mention
                    prices that other companies only dream about.
                  </span>
                </li>
                <li className="elementor-icon-list-item">
                  <span className="elementor-icon-list-icon">
                    <i aria-hidden="true" className="ion ion-android-done-all"></i>{" "}
                  </span>
                  <span className="elementor-icon-list-text">
                    Over all happy customers and best technology with great
                    support and security is our strength.
                  </span>Name
                </li>
                <li className="elementor-icon-list-item">
                  <span className="elementor-icon-list-icon">
                    <i aria-hidden="true" className="ion ion-android-done-all"></i>{" "}
                  </span>
                  <span className="elementor-icon-list-text">
                    With our world-class control panel and industry-beating
                    prices, we can help you get the best out of your domain
                    portfolio.
                  </span>
                </li>
                <li className="elementor-icon-list-item">
                  <span className="elementor-icon-list-icon">
                    <i aria-hidden="true" className="ion ion-android-done-all"></i>{" "}
                  </span>
                  <span className="elementor-icon-list-text">
                    Not sure what you need? That’s why we have hundreds of
                    smart, friendly web pros waiting by the phone. Just call
                    +91-8522 953 903
                  </span>
                </li>
              </ul>
              <a className="pt-button" href="#">
                <span className="text">Read More</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section-margin">
        <div className="container">
          <div className="row">
            <div className="col-md-12 pt-section-title-1 text-center">
              <h5 className="pt-section-title">
                Quick Links <span className="imp-word">For</span> You
              </h5>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3">
                  <a href="#" className="regman">
                    Register a Domain
                  </a>
                </div>

                <div className="col-md-3">
                  <a href="#" className="regman">
                    Transfer a Domain
                  </a>
                </div>

                <div className="col-md-3">
                  <a href="#" className="regman">
                    Linux Hosting
                  </a>
                </div>

                <div className="col-md-3">
                  <a href="#" className="regman">
                    Wordpress Hosting
                  </a>
                </div>
              </div>

              <div className="row">
                <div className="col-md-3">
                  <a href="#" className="regman">
                    Google Workspace
                  </a>
                </div>

                <div className="col-md-3">
                  <a href="#" className="regman">
                    Microsoft Office 365
                  </a>
                </div>

                <div className="col-md-3">
                  <a href="#" className="regman">
                    Rediff Mails
                  </a>
                </div>

                <div className="col-md-3">
                  <a href="#" className="regman">
                    SSL Certificate
                  </a>
                </div>
              </div>

              <div className="row">
                <div className="col-md-3">
                  <a href="#" className="regman">
                    Bootstrap Website
                  </a>
                </div>

                <div className="col-md-3">
                  <a href="#" className="regman">
                    Custom Website
                  </a>
                </div>

                <div className="col-md-3">
                  <a href="#" className="regman">
                    ECommerce Website
                  </a>
                </div>

                <div className="col-md-3">
                  <a href="#" className="regman">
                    Wordpress Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default OrganicMarketing;
