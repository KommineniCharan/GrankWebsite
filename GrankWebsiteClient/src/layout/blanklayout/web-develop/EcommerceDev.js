import React from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Seo from "../seo/Seo";
import { NavLink } from "react-router-dom";
const EcommerceDev = () => {
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

  const settings11 = {
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3.5,
    autoplay: true,
    speed: 500,

    autoplaySpeed: 1000,
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
      <Seo
        title="E Commerce Development Company | Hyderabad"
        description="E commerce development company in bangalore and hyderabad. Elevate your online business with our Ecommerce Development expertise. Explore how we craft user-friendly, high-converting online stores that maximize your brand's digital potential."
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
        <div
          className="creative-banner-display-ads"
          style={{ backgroundColor: "#fff", position: "relative" }}
        >
          <img
            className="img-fluid w-100 mobile-none"
            src="assest/photos/web-development/web-dev-banner2.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/web-development/web-dev-banner2-mobile.png"
            alt="G-Rank"
          />

          <div className="web-develop-banner-div">
            {/* <h1>
              E-Commerce
              <br />
              Development​
            </h1> */}
            <h1 class="waviy2">
              <span>E</span>
              <span>-</span>
              <span>C</span>
              <span>o</span>
              <span>m</span>
              <span>m</span>
              <span>e</span>
              <span>r</span>
              <span>c</span>
              <span>e</span>
              <br />
              <span>D</span>
              <span>e</span>
              <span>v</span>
              <span>e</span>
              <span>l</span>
              <span>o</span>
              <span>p</span>
              <span>m</span>
              <span>e</span>
              <span>n</span>
              <span>t</span>
            </h1>
            <h2>Build Seamless Experience​</h2>

            <motion.h3
              href="#"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <a href="#">GET STARTED</a>
            </motion.h3>
          </div>
        </div>
        {/* banner end */}
        {/* section2 Start */}
        <section className="web-section2">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-6">
                <img
                  className="img-fluid w-100"
                  src="assest/photos/web-development/web-section2-img.png"
                  alt="G-Rank"
                />
              </div>
              <div className="col-12 col-md-6 col-lg-6">
                <div className="row">
                  <div className="col-12">
                    <motion.h1
                      className="section2-web-develop-header"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1 }}
                    >
                      What is E-Commerce Web <br />
                      Development?
                    </motion.h1>
                    <p className="section2-web-develop-passage">
                      eCommerce website development refers to creating and
                      designing a digital platform that enables businesses to
                      sell their products or services online. It involves
                      implementing various technologies and tools to build a
                      user-friendly and secure website that allows customers to
                      browse products, make purchases, and complete transactions
                      electronically.​
                      <br />
                      <br />
                      At G-Rank, we leverage our web development and user
                      experience (UX) design expertise to create an engaging and
                      intuitive eCommerce website tailored to our client's brand
                      and target audience.​
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section2 end */}
        {/* what we do start */}
        <div className="container-fluid branding-sem-consulting-what creative-what-we">
          <div className="row">
            <div className="col-12 col-md-7 col-lg-7 " id="order2">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className=" branding-sem-consulting-what-heading"
              >
                <h1>What</h1>
                <h2>we Do</h2>
              </motion.div>
              <div className="branding-sem-consulting-what-text">
                <p>Choose suitable e-commerce platforms for clients</p>
                <p>Create customized online stores with desired features</p>
                <p>Ensure the online store is responsive across devices</p>
                <p>Organize and display products for effective presentation</p>
                <p>Implement a seamless shopping cart functionality</p>
                <p>Enable secure online payment gateways</p>
                <p>Track and manage product inventory availability</p>
                <p>Implement security plugins and measures</p>
                <p>Enhance user experience (UX) for better navigation</p>
                <p>Implement e-commerce SEO practices for visibility</p>
                <p>Incorporate security measures for customer data</p>
                <p>Set up analytics for tracking customer behavior</p>
                <p>Integrate shipping options and logistics features</p>
                <p>Test and debug to ensure site functionality</p>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-5 " id="order1">
              <motion.img
                initial={{ opacity: 0, scale: 0, y: 200 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="img-fluid branding-consulting-process-img"
                src="assest/photos/branding/what-we-do-img-blue.png"
                alt="G-Rank"
              />
            </div>
          </div>
        </div>
        {/* what we do end */}
        {/* web-sliider section start */}
        <div className="container-fluid slider-icon-div">
          <div className="row ">
            <div className="col-12">
              <motion.h1
                className="web-develop-header"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                our process
              </motion.h1>
            </div>
            <div className="col-12 web-slider-div">
              <Slider {...settings11}>
                <div>
                  <div className="web-text-slider slider-margin-top">
                    <img
                      className="img-fluid web-text-slider-img"
                      src="assest/photos/web-development/ecommers-icons/web-ecommers-icon1.png"
                      alt="G-Rank"
                    />
                    <h1>Research and Strategy</h1>
                    <p>
                      Understand target market, customer personas, and
                      competition.
                      <br />
                      <br />
                      Develop an eCommerce strategy aligned with digital
                      marketing goals.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="web-text-slider ">
                    <img
                      className="img-fluid web-text-slider-img"
                      src="assest/photos/web-development/ecommers-icons/web-ecommers-icon2.png"
                      alt="G-Rank"
                    />
                    <h1>Platform Selection</h1>
                    <p>
                      Choose a suitable eCommerce platform (e.g., Shopify,
                      WooCommerce).
                      <br />
                      <br />
                      Customized strategies are tailored to your unique
                      requirements.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="web-text-slider slider-margin-top">
                    <img
                      className="img-fluid web-text-slider-img"
                      src="assest/photos/web-development/ecommers-icons/web-ecommers-icon3.png"
                      alt="G-Rank"
                    />
                    <h1>
                      Mobile-Responsive
                      <br /> Design
                    </h1>
                    <p>
                      Design a responsive and user-friendly layout for mobile
                      devices.
                      <br />
                      <br />
                      Prioritize mobile shopping experience.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="web-text-slider ">
                    <img
                      className="img-fluid web-text-slider-img"
                      src="assest/photos/web-development/ecommers-icons/web-ecommers-icon4.png"
                      alt="G-Rank"
                    />
                    <h1>
                      User Experience (UX)
                      <br /> Optimization
                    </h1>
                    <p>
                      Create intuitive navigation and clear product categories.
                      <br />
                      <br />
                      Focus on a streamlined checkout process.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="web-text-slider slider-margin-top">
                    <img
                      className="img-fluid web-text-slider-img"
                      src="assest/photos/web-development/ecommers-icons/web-ecommers-icon5.png"
                      alt="G-Rank"
                    />
                    <h1>
                      Product Information <br /> and Descriptions
                    </h1>
                    <p>
                      Craft compelling, informative, and SEO-optimized product
                      descriptions.
                      <br />
                      <br />
                      Highlight benefits and unique selling points.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="web-text-slider ">
                    <img
                      className="img-fluid web-text-slider-img"
                      src="assest/photos/web-development/ecommers-icons/web-ecommers-icon6.png"
                      alt="G-Rank"
                    />
                    <h1>
                      Payment Gateway
                      <br /> Integration
                    </h1>
                    <p>
                      Set up secure and user-friendly payment gateways.
                      <br />
                      Offer a variety of payment options.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="web-text-slider slider-margin-top">
                    <img
                      className="img-fluid web-text-slider-img"
                      src="assest/photos/web-development/ecommers-icons/web-ecommers-icon7.png"
                      alt="G-Rank"
                    />
                    <h1>
                      Security and Trust
                      <br /> Elements
                    </h1>
                    <p>
                      Implement SSL certificates and secure checkout processes.
                      <br />
                      <br />
                      Display trust badges, privacy policies, and return
                      information..
                    </p>
                  </div>
                </div>
                <div>
                  <div className="web-text-slider ">
                    <img
                      className="img-fluid web-text-slider-img"
                      src="assest/photos/web-development/ecommers-icons/web-ecommers-icon8.png"
                      alt="G-Rank"
                    />
                    <h1>Cross-Selling and Upselling</h1>
                    <p>
                      Incorporate related product recommendations.
                      <br />
                      <br />
                      Offer upsell options during checkout.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        {/* web-sliider section end  */}

        {/* Quick Link section start */}
        <section>
          <div className="container-fluid">
            <div className="col-12">
              <motion.h1
                className="web-develop-header"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                Quick Links For You
              </motion.h1>
            </div>
            <div>
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
        {/* action yellow start*/}
        <div className="web-dev-action-yellow-div-text">
          <motion.p
            initial={{ opacity: 0, scale: 0, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let’s Work Together
            <span className="d-block">
              Let’s find out how to work together and create something
              meaningful or valuable.
            </span>
          </motion.p>
          <a href="#">
            <motion.p
              className="web-dev-action-yellow-div-buttom"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Get Started
            </motion.p>
          </a>
        </div>
        {/* action yellow end*/}
      </section>
    </>
  );
};

export default EcommerceDev;
