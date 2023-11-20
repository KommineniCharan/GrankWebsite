import React from "react";
import Header from "../header2/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { NavLink } from "react-router-dom";
import Seo from "../seo/Seo";
const CreativeContent = () => {
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

  const settings7 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    nextArrow: <SampleNextArrow2 />,
    prevArrow: <SamplePrevArrow2 />,
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
  const settings8 = {
    // className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    nextArrow: <SampleNextArrow2 />,
    prevArrow: <SamplePrevArrow2 />,
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
  function SampleNextArrow2(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="slider-custome-button-next2"
        // style={{ ...style, display: "block", background: "ccc" }}
        onClick={onClick}
      >
        <ArrowForwardIosIcon className="forword-arrow2" />
      </div>
    );
  }

  function SamplePrevArrow2(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className="slider-custome-button-prev2"
        // style={{ ...style, display: "block", background: "#ccc", width: 100 }}
        onClick={onClick}
      >
        <ArrowBackIosIcon className="backword-arrow2" />
      </div>
    );
  }
  return (
    <>
      <Seo
        title="Creative Agency in Bangalore | Hyderabad"
        description="Creative agency in bangalore and hyderabad. Unleash your brand's creativity and captivate your audience with our Creative and Content services"
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
        <div className="creative-banner ">
          <img
            className="img-fluid w-100 mobile-none"
            src="assest/photos/creative-content/creative-content-banner.png"
            alt="G-Rank"
          />
          <img
            className="img-fluid w-100 desktop-none"
            src="assest/photos/creative-content/creative-content-banner-mobile.png"
            alt="G-Rank"
          />
          <div className="creative-banner-div">
            <motion.h1
              class="animate-charcter"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Creative & Content
            </motion.h1>
            {/* <h3 class="animate-charcter"> EKOSH</h3> */}
            <h2>Think Big Think Different</h2>

            <motion.h3
              href="#"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <a href="#">Get Started!</a>
            </motion.h3>
            {/* <div>o</div> */}
          </div>
        </div>
        {/* banner end */}

        {/* bulb images start */}
        <div className="creative-banner">
          <img
            className="img-fluid w-100"
            src="assest/photos/creative-content/bulb-img.png"
            alt="G-Rank"
          />
          <div className="creative-bulb-banner-div">
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              Creativity{" "}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              is our secret
              <br /> recipe
            </motion.h2>
          </div>
        </div>

        {/* bulb images end */}
        {/* slider section start */}
        <div className="container-fluid creative-blue-section">
          <div className="creative-blue-div">
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              The Power of Content in
              <motion.span
                className="d-block"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2 }}
              >
                Digital Marketing
              </motion.span>
            </motion.h1>
          </div>
          <Slider {...settings7}>
            <div className="slider-div77">
              <motion.div
                className="org-sem-slider"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <h1>
                  Diverse Content <br />
                  Formats
                </h1>
                <p>
                  We create content in various formats, including videos,
                  infographics, podcasts, and traditional blog posts and social
                  media updates.
                </p>
              </motion.div>
            </div>
            <div className="slider-div77">
              <motion.div
                className="org-sem-slider"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <h1>
                  Data-Driven <br />
                  Approach
                </h1>
                <p>
                  Our strategy is continuously refined using data analysis for
                  better results and performance.
                </p>
              </motion.div>
            </div>
            <div className="slider-div77">
              <motion.div
                className="org-sem-slider"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <h1>
                  Engaging
                  <br />
                  Storytelling
                </h1>
                <p>
                  Our experienced team crafts content using storytelling
                  techniques to resonate with the target audience.
                </p>
              </motion.div>
            </div>

            <div className="slider-div77">
              <motion.div
                className="org-sem-slider"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <h1>
                  SEO <br />
                  Focus
                </h1>
                <p>
                  We prioritize search engine optimization (SEO) by utilizing
                  keywords and optimization techniques to drive organic traffic.
                </p>
              </motion.div>
            </div>
            <div className="slider-div77">
              <motion.div
                className="org-sem-slider"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <h1>
                  Specialization in
                  <br /> Website Optimization
                </h1>
                <p>
                  Our focus is on website optimization, utilizing the best SEO
                  practices to boost your online presence.
                </p>
              </motion.div>
            </div>
            <div className="slider-div77">
              <motion.div
                className="org-sem-slider"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <h1>
                  Premium SEO <br />
                  Services
                </h1>
                <p>
                  We offer premium SEO services designed to help you achieve a
                  higher ranking and stay ahead in the digital landscape.
                </p>
              </motion.div>
            </div>
          </Slider>
        </div>
        {/* slider section end */}
        {/* Question mark start */}
        <section className="question-creative-section">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-4 col-lg-4 question-creative-section-img">
                <img
                  className="img-fluid w-100 "
                  src="assest/photos/creative-content/grey-back.png"
                  alt="G-Rank"
                />
                <img
                  className="img-fluid w-100 shakex question-creative-img"
                  src="assest/photos/creative-content/question-creative.png"
                  alt="G-Rank"
                />
              </div>
              <div className="col-12 col-md-8 col-lg-8 question-creative-div">
                <motion.h1
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  Why Choose <span className="d-block">Us?</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  At G-Rank, we understand that creativity knows no bounds, so
                  we strive to provide you with an unparalleled experience that
                  sets us apart from the rest. We bring together a dynamic team
                  of talented individuals passionate about their craft and
                  dedicated to delivering exceptional results.  What truly sets
                  us apart is our endless ideal of creation. When it comes to
                  your creative work, we settle for nothing less than
                  extraordinary. We are no less than a creative bunch of ideas.
                  Whether you're seeking eye-catching graphic design,
                  captivating content creation, or innovative web development,
                  we've got you covered.
                </motion.p>
              </div>
            </div>
          </div>
        </section>
        {/* Question mark end */}
        {/* slider up section start */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <motion.h1
                className="creative-header"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                Our Creative <span> Services</span>
              </motion.h1>
            </div>
            <div className="col-12">
              <Slider {...settings8}>
                <div className="slider-div77">
                  <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <div className="hid-box2">
                      <img
                        className=""
                        src="assest/photos/creative-content/creative-icon1.png"
                        alt="G-Rank"
                      />
                      <h1>Graphics and Images</h1>
                    </div>
                    <p className="hid-box">
                      We specialize in creating visually stunning social media
                      branded design posters, customized graphics for various
                      platforms, and advertisements on social media, web, and
                      mobile.
                    </p>
                  </motion.div>
                </div>
                <div className="slider-div77">
                  <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <div className="hid-box2">
                      <img
                        className=""
                        src="assest/photos/creative-content/creative-icon2.png"
                        alt="G-Rank"
                      />
                      <h1>Case Studies and Whitepapers</h1>
                    </div>
                    <p className="hid-box">
                      Our studio assists in presenting your research and case
                      studies professionally with customized templates, design
                      layouts, charts, graphics, and optimized e-Versions
                    </p>
                  </motion.div>
                </div>
                <div className="slider-div77">
                  <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <div className="hid-box2">
                      <img
                        className=""
                        src="assest/photos/creative-content/creative-icon3.png"
                        alt="G-Rank"
                      />
                      <h1>Videos</h1>
                    </div>
                    <p className="hid-box">
                      Our services include product explainer videos, animated
                      videos, investor pitch videos, social media content
                      videos, infographic videos, and optional voiceovers and
                      music.
                    </p>
                  </motion.div>
                </div>
                <div className="slider-div77">
                  <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <div className="hid-box2">
                      <img
                        className=""
                        src="assest/photos/creative-content/creative-icon4.png"
                        alt="G-Rank"
                      />
                      <h1>Emailers</h1>
                    </div>
                    <p className="hid-box">
                      We specialize in creating effective emailer designs to
                      help you engage with your audience and drive desired
                      actions. To maintain a consistent and recognisable brand
                      image, we ensure that your email designs align with your
                      brand guidelines, including fonts, colors, and logo
                      placement.
                    </p>
                  </motion.div>
                </div>
                <div className="slider-div77">
                  <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <div className="hid-box2">
                      <img
                        className=""
                        src="assest/photos/creative-content/creative-icon5.png"
                        alt="G-Rank"
                      />
                      <h1>Print Design</h1>
                    </div>
                    <p className="hid-box">
                      We create designs for print advertisements that are
                      attention-grabbing and persuasive, helping you reach your
                      target audience effectively. Our team creates eye-catching
                      posters and banners for various purposes, including
                      events, promotions, and advertising campaigns.
                    </p>
                  </motion.div>
                </div>
                <div className="slider-div77">
                  <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <div className="hid-box2">
                      <img
                        className=""
                        src="assest/photos/creative-content/creative-icon6.png"
                        alt="G-Rank"
                      />
                      <h1>Web Design</h1>
                    </div>
                    <p className="hid-box">
                      We offer responsive web design, ensuring your website
                      looks great on all devices. Our designs follow SEO best
                      practices for improved visibility and rankings. We provide
                      ongoing support and maintenance to keep your website
                      secure and up-to-date.
                    </p>
                  </motion.div>
                </div>
                <div className="slider-div77">
                  <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <div className="hid-box2">
                      <img
                        className=""
                        src="assest/photos/creative-content/creative-icon7.png"
                        alt="G-Rank"
                      />
                      <h1>Landing Pages</h1>
                    </div>
                    <p className="hid-box">
                      Our responsive and visually appealing landing pages are
                      designed for web and mobile, with development options
                      across HTML, Bootstrap, WordPress, Joomla, Magento, and
                      Prestashop, focusing on conversion and engagement.rite.
                    </p>
                  </motion.div>
                </div>
                <div className="slider-div77">
                  <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <div className="hid-box2">
                      <img
                        className=""
                        src="assest/photos/creative-content/creative-icon8.png"
                        alt="G-Rank"
                      />
                      <h1>Brochures and Posters</h1>
                    </div>
                    <p className="hid-box">
                      We design custom-made brochures and posters, offering
                      e-versions and print versions, copywriting, and printing
                      assistance.
                    </p>
                  </motion.div>
                </div>
                <div className="slider-div77">
                  <motion.div
                    className="box"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <div className="hid-box2">
                      <img
                        className=""
                        src="assest/photos/creative-content/creative-icon9.png"
                        alt="G-Rank"
                      />
                      <h1>Presentations</h1>
                    </div>
                    <p className="hid-box">
                      We provide concept-based designs, icons, fonts, style
                      guides, and PowerPoint themes to create impactful decks.
                    </p>
                  </motion.div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        {/* slider up section end */}
        {/* flip card start */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <motion.h1
                className="creative-header"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                <span> Our Content</span> services
              </motion.h1>
            </div>
            <div className="col-12 col-md-3 col-lg-3 p-0">
              <div>
                <div class="creative-flip-card" tabIndex="0">
                  <div class="flip-card-inner">
                    <div class="creative-flip-card-front3 creat-img1">
                      <h4>Landing Page Content Creation</h4>
                      {/* <h3>More</h3> */}
                    </div>
                    <div class="flip-card-back">
                      <h3>
                        We specialize in crafting engaging and persuasive
                        content for your landing pages. Our team of experienced
                        writers will ensure that your landing pages effectively
                        communicate your message, capture attention, and drive
                        conversions.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3 p-0">
              <div>
                <div class="creative-flip-card" tabIndex="0">
                  <div class="flip-card-inner">
                    <div class="creative-flip-card-front3 creat-img2">
                      <h4>Product and Service Descriptions</h4>
                      {/* <h3>More</h3> */}
                    </div>
                    <div class="flip-card-back">
                      <h3>
                        Whether you need compelling content to describe your
                        products or services, our creative writers can create
                        informative and engaging descriptions highlighting their
                        unique features and benefits. We'll help you captivate
                        your audience and increase your sales potentia
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3 p-0">
              <div>
                <div class="creative-flip-card" tabIndex="0">
                  <div class="flip-card-inner">
                    <div class="creative-flip-card-front3 creat-img3">
                      <h4>Portfolio Development</h4>
                      {/* <h3>More</h3> */}
                    </div>
                    <div class="flip-card-back">
                      <h3>
                        Showcasing your work effectively is crucial for gaining
                        trust and credibility. Our content marketing services
                        include portfolio development, where we create
                        compelling narratives around your projects and
                        achievements, helping you make a lasting impression on
                        potential clients.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3 p-0">
              <div>
                <div class="creative-flip-card" tabIndex="0">
                  <div class="flip-card-inner">
                    <div class="creative-flip-card-front3 creat-img4">
                      <h4>Whitepaper Content Creation</h4>
                      {/* <h3>More</h3> */}
                    </div>
                    <div class="flip-card-back">
                      <h3>
                        We understand the importance of well-researched and
                        authoritative whitepapers. Our team of experts can
                        create in-depth whitepapers that provide valuable
                        insights and establish your industry expertise.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3 p-0">
              <div>
                <div class="creative-flip-card" tabIndex="0">
                  <div class="flip-card-inner">
                    <div class="creative-flip-card-front3 creat-img5">
                      <h4>Search Engine Optimized (SEO) Content</h4>
                      {/* <h3>More</h3> */}
                    </div>
                    <div class="flip-card-back">
                      <h3>
                        Our content marketing services extend to creating
                        SEO-friendly content that helps your website rank higher
                        in search engine results. We strategically incorporate
                        relevant keywords to boost your organic visibility and
                        attract targeted traffic.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3 p-0">
              <div>
                <div class="creative-flip-card" tabIndex="0">
                  <div class="flip-card-inner">
                    <div class="creative-flip-card-front3 creat-img6">
                      <h4>E-Newsletter Content</h4>
                      {/* <h3>More</h3> */}
                    </div>
                    <div class="flip-card-back">
                      <h3>
                        Keep your subscribers engaged and informed with our
                        expertly crafted e-newsletter content. Our writers will
                        curate compelling content that resonates with your
                        audience, driving higher open and click-through rates.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3 p-0">
              <div>
                <div class="creative-flip-card" tabIndex="0">
                  <div class="flip-card-inner">
                    <div class="creative-flip-card-front3 creat-img7">
                      <h4>Articles and Blog Posts</h4>
                      {/* <h3>More</h3> */}
                    </div>
                    <div class="flip-card-back">
                      <h3>
                        Our talented writers can develop high-quality articles
                        and blog posts tailored to your target audience. From
                        industry trends to informative how-to guides, we create
                        valuable content that keeps readers returning for more.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-3 col-lg-3 p-0">
              <div>
                <div class="creative-flip-card" tabIndex="0">
                  <div class="flip-card-inner">
                    <div class="creative-flip-card-front3 creat-img8">
                      <h4>Content Proofreading</h4>
                      {/* <h3>More</h3> */}
                    </div>
                    <div class="flip-card-back">
                      <h3>
                        Ensure your content is error-free and polished with our
                        professional proofreading services. Our meticulous
                        proofreaders will review your content for grammar,
                        spelling, punctuation, and clarity, ensuring your
                        message is delivered flawlessly.
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* flip card end */}

        {/* Quick Link section start */}
        <section>
          <div className="container-fluid">
            <div className="col-12">
              <motion.h1
                className="creative-header"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              >
                Quick Links <span>For You</span>
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
        <img
          className="img-fluid w-100"
          src="assest/photos/branding/branding-footer-img.png"
          alt="G-Rank"
        />
      </section>
    </>
  );
};

export default CreativeContent;

{
  /* <section className="section-top">
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
                  </span>
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
      </section> */
}
