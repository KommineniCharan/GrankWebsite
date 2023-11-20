import React, { useState } from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Seo from "../seo/Seo";
import { NavLink } from "react-router-dom";
const GoogleWorkspace = () => {
  // useState section start--------------------------------------
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleReadMoreLess = () => {
    setIsShowMore(!isShowMore);
  };
  // acoordian button
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);

  //  useState section end----------------------------------------
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

  const settings4 = {
    // dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplaySpeed: 2000,
    arrows: false,
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
  // Slider section start-----------------------------------------
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="security-slider-custome-button-next"
        // style={{ ...style, display: "block", background: "ccc" }}
        onClick={onClick}
      >
        <KeyboardArrowRightIcon className="forword-arrow" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="security-slider-custome-button-prev"
        // style={{ ...style, display: "block", background: "#ccc", width: 100 }}
        onClick={onClick}
      >
        <KeyboardArrowLeftIcon className="backword-arrow" />
      </div>
    );
  }
  // Slider section start-----------------------------------------

  return (
    <>
      <Seo
        title="Google Workspace Provider in Bangalore | Hyderbad"
        description="Google workspace provider in bangalore and hyderabad. Discover how Google Workspace can transform your work, streamline communication, and power your business forward."
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
            src="assest/photos/email/email-banner1.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/email/email-banner1-mobile.png"
            alt="G-Rank"
          />

          <div className="email-banner-div1">
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Google Workspace
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              Simplify Work with Google Workspace
            </motion.h2>

            <motion.h3
              href="#"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <a href="#">Find Out More</a>
            </motion.h3>
          </div>
        </div>
        {/* banner end */}
        {/* second section start */}
        <div>
          <div className="whychoose-sec">
            <div className="container-fluid">
              <h4 className="email-sub-head">Benefits of Google Workspace </h4>
              <Slider {...settings4}>
                <div className="slider-div9">
                  <div className="op">
                    <h2 className="slider-img9">
                      Seamless <br />
                      Collaboration
                    </h2>
                    <p>
                      Google Workspace enables real-time teamwork worldwide.
                      Simultaneously create, edit, and refine documents,
                      spreadsheets, and presentations.
                    </p>
                  </div>
                </div>

                <div className="slider-div9">
                  <div className="op">
                    <h2 className="slider-img9">
                      Enhanced
                      <br />
                      Communication
                    </h2>
                    <p>
                      Utilize Google Meet for easy connections. HD video
                      meetings with up to 500 participants, global reach, screen
                      sharing, and real-time chat enhance effective
                      communication and time management.
                    </p>
                  </div>
                </div>

                <div className="slider-div9">
                  <div className="op">
                    <h2 className="slider-img9">
                      Advanced
                      <br />
                      Security
                    </h2>
                    <p>
                      Google Workspace provides top-notch data protection. It
                      benefits from two-factor authentication, encrypted
                      connections, and enterprise-level security features.
                    </p>
                  </div>
                </div>

                <div className="slider-div9">
                  <div className="op">
                    <h2 className="slider-img9">
                      Smarter Email
                      <br />
                      Experience
                    </h2>
                    <p>
                      Experience Gmail's intuitive email management. Organize
                      with a clean inbox, strong spam filters, and quick search.
                      Smart suggestions and automated responses keep you on
                      track.
                    </p>
                  </div>
                </div>

                <div className="slider-div9">
                  <div className="op">
                    <h2 className="slider-img9">
                      Customizable
                      <br /> Workspace
                    </h2>
                    <p>
                      Customize Google Workspace to suit your needs. Personalize
                      the interface, integrate extensions, and seamlessly link
                      third-party apps.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        {/* second section end */}
        {/* logo section start */}
        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <h4 className="email-sub-head">
                  Google Workspace Services & Plans
                </h4>
              </div>
              <div className="col-12 col-md-3 col-lg-3 email-sub-logo-div2">
                <h1>most popular</h1>
                <div className="email-sub-logo-div">
                  <h5>Business Starter</h5>
                  <h4>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/rupee.png"
                      alt="G-Rank"
                    />
                    136.90<span>INR</span>
                  </h4>
                  <h3>₹230*</h3>
                  <h2>
                    per user/month, one-year
                    <br /> commitment
                  </h2>
                  <h6>Start Free Trial</h6>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    Custom & secure business email
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    100-participant video meetings
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    30 GB pooled storage per user
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    Security & management controls
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    Standard support
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-3 email-sub-logo-div2">
                <h1>most popular</h1>
                <div className="email-sub-logo-div">
                  <h5>Business Standard</h5>
                  <h4>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/rupee.png"
                      alt="G-Rank"
                    />
                    736<span>INR</span>
                  </h4>
                  <h3>₹920*</h3>
                  <h2>
                    per user/month, one-year
                    <br /> commitment
                  </h2>
                  <h6>Start Free Trial</h6>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    Custom & secure business email
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    150-participant video meetings + Recording
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    2 TB pooled storage per user
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    Security & management controls
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    Standard support (paid upgrade to enhanced support)
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-3 email-sub-logo-div2">
                <h1>most popular</h1>
                <div className="email-sub-logo-div">
                  <h5>Business Plus</h5>
                  <h4>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/rupee.png"
                      alt="G-Rank"
                    />
                    1380<span>INR</span>
                  </h4>
                  <h3>₹920*</h3>
                  <h2>
                    per user/month, one-year
                    <br /> commitment
                  </h2>
                  <h6>Start Free Trial</h6>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    Custom & secure business email +ediscovery, retention
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    150 participant video meetings + Recording, attendance
                    tracking
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    5 TB pooled storage per user
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    Enhanced Security & management controls, including Vault &
                    advanced endpoint management
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    Standard support (paid upgrade to enhanced support)
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-3 email-sub-logo-div2">
                <h1>most popular</h1>
                <div className="email-sub-logo-div">
                  <h5>Enterprise</h5>
                  <h4>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/rupee.png"
                      alt="G-Rank"
                    />
                    136.90<span>INR</span>
                  </h4>
                  <h3>₹230*</h3>
                  <h2>Contact Sales for pricing</h2>
                  <h6>Contact sales</h6>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    Custom & secure business email + ediscovery, retention,
                    S/MIME encryption
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    1000 participant video meetings + recording, attendance
                    tracking, noise cancellation, in-domain live streaming
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    5 TB pooled storage per user, with ability to request more
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    Advanced security management & compliance controls,
                    including Vault, DLP, data regions and enterprise endpoint
                    management
                  </p>
                  <p>
                    <img
                      className="img-fluid "
                      src="assest/photos/email/check.png"
                      alt="G-Rank"
                    />
                    Enhanced support (paid upgrade to enhanced support)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* logo section end */}

        {/* third section start */}
        <div>
          <div className="whychoose-sec">
            <div className="container-fluid">
              <h4 className="email-sub-head">Why Choose G-Rank? </h4>
              <Slider {...settings4}>
                <div className="slider-div4">
                  <div className="op">
                    <h2 className="slider-img4">Email and Communication</h2>
                    <p>
                      G Suite offers Gmail for Business, a reliable and
                      feature-rich email platform with customizable domains,
                      advanced spam filters, and large storage capacities,
                      making communication within the organization more
                      professional and organized.
                    </p>
                  </div>
                </div>

                <div className="slider-div4">
                  <div className="op">
                    <h2 className="slider-img4"> Cloud Storage</h2>
                    <p>
                      \ Google Drive provides ample cloud storage, allowing
                      teams to store, access, and share files and folders
                      securely from anywhere, promoting easy file management and
                      reducing the need for local storage solutions.
                    </p>
                  </div>
                </div>

                <div className="slider-div4">
                  <div className="op">
                    <h2 className="slider-img4">
                      Customization and Integration
                    </h2>
                    <p>
                      G Suite offers APIs and integrations with other popular
                      tools, allowing organizations to customize and extend the
                      functionality of Google Workspace to meet specific
                      business needs.
                    </p>
                  </div>
                </div>

                <div className="slider-div4">
                  <div className="op">
                    <h2 className="slider-img4">User-Friendly Interface</h2>
                    <p>
                      Google Workspace's user-friendly interface requires
                      minimal training, allowing employees to adopt and make the
                      most of the tools available quickly.
                    </p>
                  </div>
                </div>

                <div className="slider-div4">
                  <div className="op">
                    <h2 className="slider-img4"> Reliability</h2>
                    <p>
                      Google's infrastructure provides high uptime and
                      reliability, reducing the risk of downtime and ensuring
                      your team can access their tools and data whenever needed.
                    </p>
                  </div>
                </div>
                <div className="slider-div4">
                  <div className="op">
                    <h2 className="slider-img4">Collaboration Tools</h2>
                    <p>
                      Google Workspace provides powerful collaboration tools
                      like Google Docs, Sheets, Slides, and Forms that allow
                      multiple users to work on documents simultaneously, making
                      real-time collaboration seamless and efficient.
                    </p>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        {/* third section end */}

        {/* FAQ section start*/}
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <motion.h1
                  className="security-circle-heading"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                >
                  FAQ's
                </motion.h1>
              </div>
              <div className="col-md-12">
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
                          onClick={() => setOpen1(!open1)}
                        >
                          What is Google Workspace?
                          <span>
                            {open1 ? (
                              <AddIcon className="accordion-arrow" />
                            ) : (
                              <RemoveIcon className="accordion-arrow" />
                            )}
                          </span>
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
                        <div className="card-body-span">
                          Google Workspace is a suite of cloud-based
                          productivity and collaboration tools developed by
                          Google. It includes applications like Gmail, Google
                          Drive, Google Docs, Google Sheets, Google Slides,
                          Google Meet, and more. It's designed to help
                          individuals and teams work together efficiently and
                          effectively.
                        </div>
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
                          onClick={() => setOpen2(!open2)}
                        >
                          Can I use my domain with Google Workspace?
                          <span>
                            {open2 ? (
                              <RemoveIcon className="accordion-arrow" />
                            ) : (
                              <AddIcon className="accordion-arrow" />
                            )}
                          </span>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse "
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="card-body-span">
                          Yes, you can use your domain with Google Workspace.
                          This allows you to have professional custom email
                          addresses using your domain name (e.g.,
                          yourname@yourcompany.com) and gives your organization
                          a more professional appearance.
                        </div>
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
                          onClick={() => setOpen2(!open2)}
                        >
                          Is data stored in Google Workspace secure?
                          <span>
                            {open2 ? (
                              <RemoveIcon className="accordion-arrow" />
                            ) : (
                              <AddIcon className="accordion-arrow" />
                            )}
                          </span>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse "
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        <div className="card-body-span">
                          Google takes security seriously and employs various
                          measures to protect the data stored in Google
                          Workspace. This includes encryption, advanced
                          authentication options, regular security audits, and
                          compliance with industry standards.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ section end*/}
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
        {/*Input start */}
        <section>
          <div className="performance-footerimg-div">
            <img
              className="img-fluid w-100"
              src="assest/photos/security/white-and-blue-back.png"
              alt="G-Rank"
            />
            <div className="performance-footer-div-text">
              <h1>Learn more about our sevices</h1>
              <div className="searchArea">
                <button type="submit" tabindex="2">
                  Explore
                </button>
                <div className="inputDiv">
                  <input type="text" id="inputField" tabindex="1" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Input start */}
      </section>
    </>
  );
};

export default GoogleWorkspace;
