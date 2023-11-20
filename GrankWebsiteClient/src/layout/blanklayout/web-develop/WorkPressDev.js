import React from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import Seo from "../seo/Seo";
import { NavLink } from "react-router-dom";

const WorkPressDev = () => {
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
        title="
        Wordpress Development Company in Bangalore | Hyderabad
        Turn"
        description="Wordpress development company in bangalore and hyderabad. Explore how we optimize this powerful platform to create custom, feature-rich websites that perfectly match your brand's unique identity ."
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
            src="assest/photos/web-development/web-dev-banner.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/web-development/web-dev-banner-mobile.png"
            alt="G-Rank"
          />

          <div className="web-develop-banner-div">
            {/* <h1>
              WordPress
              <br />
              Development​
            </h1> */}
            <h1 class="waviy2">
              <span>W</span>
              <span>o</span>
              <span>r</span>
              <span>d</span>
              <span>p</span>
              <span>r</span>
              <span>e</span>
              <span>s</span>
              <span>s</span>
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
            <h2>
              Drive excellence through
              <br />
              creativity
            </h2>

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
                  src="assest/photos/web-development/web-section2-img1.png"
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
                      What is WordPress
                      <br /> Development?​
                    </motion.h1>
                    <p className="section2-web-develop-passage">
                      WordPress Development refers to creating, designing, and
                      customizing websites using the WordPress content
                      management system (CMS). At G-Rank, our WordPress
                      development services focus on leveraging the power and
                      flexibility of WordPress to deliver high-quality,
                      functional, and visually appealing websites that meet our
                      client's specific requirements. Our team of skilled
                      WordPress developers possesses extensive knowledge and
                      expertise in utilizing the various features and
                      capabilities of the WordPress platform.​
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
                <p>Create custom WordPress websites</p>
                <p>Modify themes to match brand identity</p>
                <p>Integrate plugins to add functionality</p>
                <p>Ensure websites are responsive across devices</p>
                <p>Set up and organize site content</p>
                <p>Implement SEO best practices for better visibility</p>
                <p>Optimize page speed for fast loading times</p>
                <p>Implement security plugins and measures</p>
                <p>Set up regular data backups for safety</p>
                <p>Code custom features as required</p>
                <p>Test and debug to ensure site functionality</p>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-5 " id="order1">
              <motion.img
                initial={{ opacity: 0, scale: 0, y: 200 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="img-fluid branding-consulting-process-img"
                src="assest/photos/branding/what-we-do-img-yellow2.png"
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
                      src="assest/photos/web-development/wordpress-icon/wordpress-icon1.png"
                      alt="G-Rank"
                    />
                    <h1>SEO-Friendly Setup</h1>
                    <p>
                      Configure SEO plugins for on-page optimization.
                      <br />
                      <br />
                      Optimize site structure, URLs, and meta tags.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="web-text-slider ">
                    <img
                      className="img-fluid web-text-slider-img"
                      src="assest/photos/web-development/wordpress-icon/wordpress-icon2.png"
                      alt="G-Rank"
                    />
                    <h1>
                      Responsive Theme <br />
                      Selection
                    </h1>
                    <p>
                      Choose a responsive WordPress theme for mobile-friendly
                      experience.
                      <br />
                      <br />
                      Ensure compatibility across various devices and screen
                      sizes.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="web-text-slider slider-margin-top">
                    <img
                      className="img-fluid web-text-slider-img"
                      src="assest/photos/web-development/wordpress-icon/wordpress-icon3.png"
                      alt="G-Rank"
                    />
                    <h1>
                      Customization for
                      <br /> User Experience
                    </h1>
                    <p>
                      Tailor design and layout for intuitive user navigation.
                      <br />
                      <br />
                      Prioritize clear CTAs and strategic placement.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="web-text-slider ">
                    <img
                      className="img-fluid web-text-slider-img"
                      src="assest/photos/web-development/wordpress-icon/wordpress-icon4.png"
                      alt="G-Rank"
                    />
                    <h1>
                      Speed and Performance <br /> Optimization
                    </h1>
                    <p>
                      Optimize images, use caching plugins, and minimize code.
                      <br />
                      <br />
                      Enhance site loading speed for better user experience.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="web-text-slider slider-margin-top">
                    <img
                      className="img-fluid web-text-slider-img"
                      src="assest/photos/web-development/wordpress-icon/wordpress-icon5.png"
                      alt="G-Rank"
                    />
                    <h1>
                      Analytics <br />
                      Integration
                    </h1>
                    <p>
                      Integrate analytics tools (e.g., Google Analytics) for
                      tracking.
                      <br />
                      Set up goals and events to measure conversions.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="web-text-slider ">
                    <img
                      className="img-fluid web-text-slider-img"
                      src="assest/photos/web-development/wordpress-icon/wordpress-icon6.png"
                      alt="G-Rank"
                    />
                    <h1>
                      Social Media <br />
                      Integration
                    </h1>
                    <p>
                      Add social sharing buttons and feeds.
                      <br />
                      <br />
                      Optimize content for easy sharing on social platforms.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="web-text-slider slider-margin-top">
                    <img
                      className="img-fluid web-text-slider-img"
                      src="assest/photos/web-development/wordpress-icon/wordpress-icon7.png"
                      alt="G-Rank"
                    />
                    <h1>
                      Security and <br />
                      Compliance
                    </h1>
                    <p>
                      Implement security measures (SSL, firewalls) for user
                      trust.
                      <br />
                      <br />
                      Ensure compliance with data privacy regulations.
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

export default WorkPressDev;
