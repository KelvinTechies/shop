import { useEffect, useState } from "react";
import { fetchData } from "../utils/app";

function Index() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getDatas = async () => {
      const response = await fetchData();
      setProducts(response.products);
    };
    getDatas();
  }, []);

  return (
    <>
      <div className="header-empty-space"></div>

      <div className="slider-wrapper">
        <div className="swiper-button-prev visible-lg" />
        <div className="swiper-button-next visible-lg" />
        <div
          className="swiper-container"
          data-parallax={1}
          data-auto-height={1}
        >
          <div className="swiper-wrapper">
            <div
              className="swiper-slide"
              style={{ backgroundImage: "url(img/background-3.jpg)" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="cell-view page-height">
                      <div className="col-xs-b40 col-sm-b80" />
                      <div data-swiper-parallax-x={-600}>
                        <div className="simple-article light transparent size-3">
                          PROFESSIONAL EDITION
                        </div>
                        <div className="col-xs-b5" />
                      </div>
                      <div data-swiper-parallax-x={-500}>
                        <h1 className="h1 light">
                          choice of the professionals
                        </h1>
                        <div className="title-underline light left">
                          <span />
                        </div>
                      </div>
                      <div data-swiper-parallax-x={-400}>
                        <div className="simple-article size-4 light transparent">
                          <p>
                            In feugiat molestie tortor a malesuada. Etiam a
                            venenatis ipsum. Proin pharetra elit at feugiat
                            commodo vel placerat tincidunt sapien nec
                          </p>
                        </div>
                        <div className="col-xs-b30" />
                      </div>
                      <div data-swiper-parallax-x={-300}>
                        <div className="buttons-wrapper">
                          <a className="button size-2 style-1" href="#">
                            <span className="button-wrapper">
                              <span className="icon">
                                <img src="img/icon-1.png" alt="" />
                              </span>
                              <span className="text">Learn More</span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="col-xs-b40 col-sm-b80" />
                    </div>
                  </div>
                </div>
                <div
                  className="row-background right hidden-xs"
                  data-swiper-parallax-x={-600}
                >
                  <img src="img/background-12.png" alt="" />
                </div>
                <div className="empty-space col-xs-b80 col-sm-b0" />
              </div>
            </div>
            <div
              className="swiper-slide"
              style={{ backgroundImage: "url(img/background-2.jpg)" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 col-sm-offset-6 col-sm-text-right">
                    <div className="cell-view page-height">
                      <div className="col-xs-b40 col-sm-b80" />
                      <div data-swiper-parallax-x={-600}>
                        <div className="simple-article light transparent size-3">
                          PROFESSIONAL EDITION
                        </div>
                        <div className="col-xs-b5" />
                      </div>
                      <div data-swiper-parallax-x={-500}>
                        <h1 className="h1 light">
                          choice of the professionals
                        </h1>
                        <div className="title-underline light left">
                          <span />
                        </div>
                      </div>
                      <div data-swiper-parallax-x={-400}>
                        <div className="simple-article size-4 light transparent">
                          <p>
                            In feugiat molestie tortor a malesuada. Etiam a
                            venenatis ipsum. Proin pharetra elit at feugiat
                            commodo vel placerat tincidunt sapien nec
                          </p>
                        </div>
                        <div className="col-xs-b30" />
                      </div>
                      <div data-swiper-parallax-x={-300}>
                        <div className="buttons-wrapper">
                          <a className="button size-2 style-1" href="#">
                            <span className="button-wrapper">
                              <span className="icon">
                                <img src="img/icon-1.png" alt="" />
                              </span>
                              <span className="text">Learn More</span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="col-xs-b40 col-sm-b80" />
                    </div>
                  </div>
                </div>
                <div
                  className="row-background left hidden-xs"
                  data-swiper-parallax-x={-600}
                >
                  <img src="img/background-12.png" alt="" />
                </div>
                <div className="empty-space col-xs-b80 col-sm-b0" />
              </div>
            </div>
            <div
              className="swiper-slide"
              style={{ backgroundImage: "url(img/background-3.jpg)" }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-sm-8 col-sm-offset-2 col-sm-text-center">
                    <div className="cell-view page-height">
                      <div className="col-xs-b40 col-sm-b80" />
                      <div data-swiper-parallax-x={-600}>
                        <div className="simple-article light transparent size-3">
                          PROFESSIONAL EDITION
                        </div>
                        <div className="col-xs-b5" />
                      </div>
                      <div data-swiper-parallax-x={-500}>
                        <h1 className="h1 light">
                          choice of the professionals
                        </h1>
                        <div className="title-underline light left">
                          <span />
                        </div>
                      </div>
                      <div data-swiper-parallax-x={-400}>
                        <div className="simple-article size-4 light transparent">
                          <p>
                            In feugiat molestie tortor a malesuada. Etiam a
                            venenatis ipsum. Proin pharetra elit at feugiat
                            commodo vel placerat tincidunt sapien nec
                          </p>
                        </div>
                        <div className="col-xs-b30" />
                      </div>
                      <div data-swiper-parallax-x={-300}>
                        <div className="buttons-wrapper">
                          <a className="button size-2 style-1" href="#">
                            <span className="button-wrapper">
                              <span className="icon">
                                <img src="img/icon-1.png" alt="" />
                              </span>
                              <span className="text">Learn More</span>
                            </span>
                          </a>
                        </div>
                      </div>
                      <div className="col-xs-b40 col-sm-b80" />
                    </div>
                  </div>
                </div>
                <div className="empty-space col-xs-b80 col-sm-b0" />
              </div>
            </div>
          </div>
          <div className="swiper-pagination swiper-pagination-white" />
        </div>
      </div>
      <div className="slider-wrapper">
        <div className="swiper-button-prev hidden" />
        <div className="swiper-button-next hidden" />
        <div
          className="swiper-container"
          data-breakpoints={1}
          data-xs-slides={1}
          data-sm-slides={2}
          data-md-slides={2}
          data-lt-slides={3}
          data-slides-per-view={4}
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="product-shortcode style-6">
                <div className="content">
                  <div className="title">
                    <div className="simple-article size-3 color col-xs-b5">
                      <a href="#">Modern edition</a>
                    </div>
                    <div className="h5 animate-to-green">
                      <a href="#">modern beat nine</a>
                    </div>
                  </div>
                  <div className="description">
                    <div className="simple-article text size-2 animate-to-fulltransparent">
                      Mollis nec consequat at In feugiat molestie tortor a
                      malesuada etiam a venenatis{" "}
                    </div>
                  </div>
                  <div className="preview">
                    <img src="img/product-86.jpg" alt="" />
                  </div>
                  <div className="price">
                    <div className="simple-article size-4 grey animate-to-fulltransparent">
                      From <span className="color">$155.00</span>
                    </div>
                  </div>
                  <div className="preview-button">
                    <a className="button size-2 style-3" href="#">
                      <span className="button-wrapper">
                        <span className="icon">
                          <img src="img/icon-4.png" alt="" />
                        </span>
                        <span className="text">Learn More</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="product-shortcode style-6">
                <div className="content">
                  <div className="title">
                    <div className="simple-article size-3 color col-xs-b5">
                      <a href="#">Modern edition</a>
                    </div>
                    <div className="h5 animate-to-green">
                      <a href="#">Etiam mollis tristique</a>
                    </div>
                  </div>
                  <div className="description">
                    <div className="simple-article text size-2 animate-to-fulltransparent">
                      Mollis nec consequat at In feugiat molestie tortor a
                      malesuada etiam a venenatis{" "}
                    </div>
                  </div>
                  <div className="preview">
                    <img src="img/product-87.jpg" alt="" />
                  </div>
                  <div className="price">
                    <div className="simple-article size-4 grey animate-to-fulltransparent">
                      From <span className="color">$155.00</span>
                    </div>
                  </div>
                  <div className="preview-button">
                    <a className="button size-2 style-3" href="#">
                      <span className="button-wrapper">
                        <span className="icon">
                          <img src="img/icon-4.png" alt="" />
                        </span>
                        <span className="text">Learn More</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="product-shortcode style-6">
                <div className="content">
                  <div className="title">
                    <div className="simple-article size-3 color col-xs-b5">
                      <a href="#">Modern edition</a>
                    </div>
                    <div className="h5 animate-to-green">
                      <a href="#">Morbi vel neque eget</a>
                    </div>
                  </div>
                  <div className="description">
                    <div className="simple-article text size-2 animate-to-fulltransparent">
                      Mollis nec consequat at In feugiat molestie tortor a
                      malesuada etiam a venenatis{" "}
                    </div>
                  </div>
                  <div className="preview">
                    <img src="img/product-88.jpg" alt="" />
                  </div>
                  <div className="price">
                    <div className="simple-article size-4 grey animate-to-fulltransparent">
                      From <span className="color">$155.00</span>
                    </div>
                  </div>
                  <div className="preview-button">
                    <a className="button size-2 style-3" href="#">
                      <span className="button-wrapper">
                        <span className="icon">
                          <img src="img/icon-4.png" alt="" />
                        </span>
                        <span className="text">Learn More</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="product-shortcode style-6">
                <div className="content">
                  <div className="title">
                    <div className="simple-article size-3 color col-xs-b5">
                      <a href="#">Modern edition</a>
                    </div>
                    <div className="h5 animate-to-green">
                      <a href="#">Nam volutpat nunc</a>
                    </div>
                  </div>
                  <div className="description">
                    <div className="simple-article text size-2 animate-to-fulltransparent">
                      Mollis nec consequat at In feugiat molestie tortor a
                      malesuada etiam a venenatis{" "}
                    </div>
                  </div>
                  <div className="preview">
                    <img src="img/product-89.jpg" alt="" />
                  </div>
                  <div className="price">
                    <div className="simple-article size-4 grey animate-to-fulltransparent">
                      From <span className="color">$155.00</span>
                    </div>
                  </div>
                  <div className="preview-button">
                    <a className="button size-2 style-3" href="#">
                      <span className="button-wrapper">
                        <span className="icon">
                          <img src="img/icon-4.png" alt="" />
                        </span>
                        <span className="text">Learn More</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination relative-pagination" />
        </div>
      </div>
      <div className="empty-space col-xs-b35 col-md-b70" />
      <div className="empty-space col-xs-b35 col-md-b70" />
      <div className="container">
        <div className="text-center">
          <div className="simple-article size-3 grey uppercase col-xs-b5">
            recommended products
          </div>
          <div className="h2">choose the best</div>
          <div className="title-underline center">
            <span />
          </div>
        </div>
      </div>
      <div className="empty-space col-xs-b35 col-md-b70" />
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-4 col-xs-b30 col-sm-b0">
            <div className="categories-wrapper">
              <h4 className="h4 col-xs-b20">popular categories</h4>
              <a className="category-link active">
                <span>38</span> modern edition
              </a>
              <a className="category-link">
                <span>14</span> professional edition
              </a>
              <a className="category-link">
                <span>19</span> collorexedition
              </a>
              <a className="category-link">
                <span>8</span> sport edition
              </a>
              <a className="category-link">
                <span>7</span> classic edition
              </a>
              <a className="category-link">
                <span>11</span> progresive edition
              </a>
              <a className="category-link">
                <span>23</span> underground edition
              </a>
              <a className="category-link">
                <span>140</span> accessories
              </a>
              <div className="empty-space col-xs-b20" />
              <a className="button size-2 style-3" href="#">
                <span className="button-wrapper">
                  <span className="icon">
                    <img src="img/icon-4.png" alt="" />
                  </span>
                  <span className="text">view all categories</span>
                </span>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-md-8">
            <div className="slider-wrapper hidden-pixel-x side-borders">
              <div className="swiper-button-prev visible-lg" />
              <div className="swiper-button-next visible-lg" />
              <div
                className="swiper-container"
                data-breakpoints={1}
                data-xs-slides={1}
                data-sm-slides={1}
                data-md-slides={2}
                data-lt-slides={2}
                data-slides-per-view={2}
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="product-shortcode style-1 big">
                      <div className="product-label green">best price</div>
                      <div className="preview">
                        <img src="img/product-62.jpg" alt="" />
                        <div className="preview-buttons valign-middle">
                          <div className="valign-middle-content">
                            <a className="button size-2 style-2" href="#">
                              <span className="button-wrapper">
                                <span className="icon">
                                  <img src="img/icon-1.png" alt="" />
                                </span>
                                <span className="text">Learn More</span>
                              </span>
                            </a>
                            <a className="button size-2 style-3" href="#">
                              <span className="button-wrapper">
                                <span className="icon">
                                  <img src="img/icon-3.png" alt="" />
                                </span>
                                <span className="text">Add To Cart</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="title">
                        <div className="simple-article size-1 color col-xs-b5">
                          <a href="#">MODERN EDITION</a>
                        </div>
                        <div className="h6 animate-to-green">
                          <a href="#">modern beat ht</a>
                        </div>
                      </div>
                      <div className="description">
                        <div className="simple-article text size-2">
                          Mollis nec consequat at In feugiat molestie tortor a
                          malesuada etiam a venenatis ipsum
                        </div>
                        <div className="icons">
                          <a className="entry">
                            <i className="fa fa-check" aria-hidden="true" />
                          </a>
                          <a className="entry open-popup" data-rel={3}>
                            <i className="fa fa-eye" aria-hidden="true" />
                          </a>
                          <a className="entry">
                            <i className="fa fa-heart-o" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                      <div className="price">
                        <div className="color-selection">
                          <div
                            className="entry active"
                            style={{ color: "#a7f050" }}
                          />
                          <div className="entry" style={{ color: "#50e3f0" }} />
                          <div className="entry" style={{ color: "#eee" }} />
                        </div>
                        <div className="simple-article size-4">
                          <span className="dark">$155.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="product-shortcode style-1 big">
                      <div className="product-label red">20% discount</div>
                      <div className="preview">
                        <img src="img/product-63.jpg" alt="" />
                        <div className="preview-buttons valign-middle">
                          <div className="valign-middle-content">
                            <a className="button size-2 style-2" href="#">
                              <span className="button-wrapper">
                                <span className="icon">
                                  <img src="img/icon-1.png" alt="" />
                                </span>
                                <span className="text">Learn More</span>
                              </span>
                            </a>
                            <a className="button size-2 style-3" href="#">
                              <span className="button-wrapper">
                                <span className="icon">
                                  <img src="img/icon-3.png" alt="" />
                                </span>
                                <span className="text">Add To Cart</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="title">
                        <div className="simple-article size-1 color col-xs-b5">
                          <a href="#">ERGO EDITION</a>
                        </div>
                        <div className="h6 animate-to-green">
                          <a href="#">sport beat atx</a>
                        </div>
                      </div>
                      <div className="description">
                        <div className="simple-article text size-2">
                          Mollis nec consequat at In feugiat molestie tortor a
                          malesuada etiam a venenatis ipsum
                        </div>
                        <div className="icons">
                          <a className="entry">
                            <i className="fa fa-check" aria-hidden="true" />
                          </a>
                          <a className="entry open-popup" data-rel={3}>
                            <i className="fa fa-eye" aria-hidden="true" />
                          </a>
                          <a className="entry">
                            <i className="fa fa-heart-o" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                      <div className="price">
                        <div className="color-selection">
                          <div
                            className="entry active"
                            style={{ color: "#7d3f99" }}
                          />
                          <div className="entry" style={{ color: "#3481c7" }} />
                          <div className="entry" style={{ color: "#bf584b" }} />
                        </div>
                        <div className="simple-article size-4">
                          <span className="color">$155.00</span>
                          &nbsp;&nbsp;&nbsp;
                          <span className="line-through">$350.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="product-shortcode style-1 big">
                      <div className="preview">
                        <img src="img/product-64.jpg" alt="" />
                        <div className="preview-buttons valign-middle">
                          <div className="valign-middle-content">
                            <a className="button size-2 style-2" href="#">
                              <span className="button-wrapper">
                                <span className="icon">
                                  <img src="img/icon-1.png" alt="" />
                                </span>
                                <span className="text">Learn More</span>
                              </span>
                            </a>
                            <a className="button size-2 style-3" href="#">
                              <span className="button-wrapper">
                                <span className="icon">
                                  <img src="img/icon-3.png" alt="" />
                                </span>
                                <span className="text">Add To Cart</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="title">
                        <div className="simple-article size-1 color col-xs-b5">
                          <a href="#">COLOREX EDITION</a>
                        </div>
                        <div className="h6 animate-to-green">
                          <a href="#">hipster beat hr</a>
                        </div>
                      </div>
                      <div className="description">
                        <div className="simple-article text size-2">
                          Mollis nec consequat at In feugiat molestie tortor a
                          malesuada etiam a venenatis ipsum
                        </div>
                        <div className="icons">
                          <a className="entry">
                            <i className="fa fa-check" aria-hidden="true" />
                          </a>
                          <a className="entry open-popup" data-rel={3}>
                            <i className="fa fa-eye" aria-hidden="true" />
                          </a>
                          <a className="entry">
                            <i className="fa fa-heart-o" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                      <div className="price">
                        <div className="color-selection">
                          <div
                            className="entry active"
                            style={{ color: "#3b8bd5" }}
                          />
                          <div className="entry" style={{ color: "#e1191d" }} />
                          <div className="entry" style={{ color: "#facc22" }} />
                        </div>
                        <div className="simple-article size-4">
                          <span className="dark">$190.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="product-shortcode style-1 big">
                      <div className="preview">
                        <img src="img/product-65.jpg" alt="" />
                        <div className="preview-buttons valign-middle">
                          <div className="valign-middle-content">
                            <a className="button size-2 style-2" href="#">
                              <span className="button-wrapper">
                                <span className="icon">
                                  <img src="img/icon-1.png" alt="" />
                                </span>
                                <span className="text">Learn More</span>
                              </span>
                            </a>
                            <a className="button size-2 style-3" href="#">
                              <span className="button-wrapper">
                                <span className="icon">
                                  <img src="img/icon-3.png" alt="" />
                                </span>
                                <span className="text">Add To Cart</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="title">
                        <div className="simple-article size-1 color col-xs-b5">
                          <a href="#">ERGO EDITION</a>
                        </div>
                        <div className="h6 animate-to-green">
                          <a href="#">sport beat rtx</a>
                        </div>
                      </div>
                      <div className="description">
                        <div className="simple-article text size-2">
                          Mollis nec consequat at In feugiat molestie tortor a
                          malesuada etiam a venenatis ipsum
                        </div>
                        <div className="icons">
                          <a className="entry">
                            <i className="fa fa-check" aria-hidden="true" />
                          </a>
                          <a className="entry open-popup" data-rel={3}>
                            <i className="fa fa-eye" aria-hidden="true" />
                          </a>
                          <a className="entry">
                            <i className="fa fa-heart-o" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                      <div className="price">
                        <div className="color-selection">
                          <div
                            className="entry active"
                            style={{ color: "#c16e31" }}
                          />
                          <div className="entry" style={{ color: "#a4c131" }} />
                          <div className="entry" style={{ color: "#68c131" }} />
                        </div>
                        <div className="simple-article size-4">
                          <span className="dark">$185.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="product-shortcode style-1 big">
                      <div className="product-label green">best price</div>
                      <div className="preview">
                        <img src="img/product-62.jpg" alt="" />
                        <div className="preview-buttons valign-middle">
                          <div className="valign-middle-content">
                            <a className="button size-2 style-2" href="#">
                              <span className="button-wrapper">
                                <span className="icon">
                                  <img src="img/icon-1.png" alt="" />
                                </span>
                                <span className="text">Learn More</span>
                              </span>
                            </a>
                            <a className="button size-2 style-3" href="#">
                              <span className="button-wrapper">
                                <span className="icon">
                                  <img src="img/icon-3.png" alt="" />
                                </span>
                                <span className="text">Add To Cart</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="title">
                        <div className="simple-article size-1 color col-xs-b5">
                          <a href="#">MODERN EDITION</a>
                        </div>
                        <div className="h6 animate-to-green">
                          <a href="#">modern beat ht</a>
                        </div>
                      </div>
                      <div className="description">
                        <div className="simple-article text size-2">
                          Mollis nec consequat at In feugiat molestie tortor a
                          malesuada etiam a venenatis ipsum
                        </div>
                        <div className="icons">
                          <a className="entry">
                            <i className="fa fa-check" aria-hidden="true" />
                          </a>
                          <a className="entry open-popup" data-rel={3}>
                            <i className="fa fa-eye" aria-hidden="true" />
                          </a>
                          <a className="entry">
                            <i className="fa fa-heart-o" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                      <div className="price">
                        <div className="color-selection">
                          <div
                            className="entry active"
                            style={{ color: "#a7f050" }}
                          />
                          <div className="entry" style={{ color: "#50e3f0" }} />
                          <div className="entry" style={{ color: "#eee" }} />
                        </div>
                        <div className="simple-article size-4">
                          <span className="dark">$155.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="product-shortcode style-1 big">
                      <div className="product-label red">20% discount</div>
                      <div className="preview">
                        <img src="img/product-63.jpg" alt="" />
                        <div className="preview-buttons valign-middle">
                          <div className="valign-middle-content">
                            <a className="button size-2 style-2" href="#">
                              <span className="button-wrapper">
                                <span className="icon">
                                  <img src="img/icon-1.png" alt="" />
                                </span>
                                <span className="text">Learn More</span>
                              </span>
                            </a>
                            <a className="button size-2 style-3" href="#">
                              <span className="button-wrapper">
                                <span className="icon">
                                  <img src="img/icon-3.png" alt="" />
                                </span>
                                <span className="text">Add To Cart</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="title">
                        <div className="simple-article size-1 color col-xs-b5">
                          <a href="#">ERGO EDITION</a>
                        </div>
                        <div className="h6 animate-to-green">
                          <a href="#">sport beat atx</a>
                        </div>
                      </div>
                      <div className="description">
                        <div className="simple-article text size-2">
                          Mollis nec consequat at In feugiat molestie tortor a
                          malesuada etiam a venenatis ipsum
                        </div>
                        <div className="icons">
                          <a className="entry">
                            <i className="fa fa-check" aria-hidden="true" />
                          </a>
                          <a className="entry open-popup" data-rel={3}>
                            <i className="fa fa-eye" aria-hidden="true" />
                          </a>
                          <a className="entry">
                            <i className="fa fa-heart-o" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                      <div className="price">
                        <div className="color-selection">
                          <div
                            className="entry active"
                            style={{ color: "#7d3f99" }}
                          />
                          <div className="entry" style={{ color: "#3481c7" }} />
                          <div className="entry" style={{ color: "#bf584b" }} />
                        </div>
                        <div className="simple-article size-4">
                          <span className="color">$155.00</span>
                          &nbsp;&nbsp;&nbsp;
                          <span className="line-through">$350.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="product-shortcode style-1 big">
                      <div className="preview">
                        <img src="img/product-64.jpg" alt="" />
                        <div className="preview-buttons valign-middle">
                          <div className="valign-middle-content">
                            <a className="button size-2 style-2" href="#">
                              <span className="button-wrapper">
                                <span className="icon">
                                  <img src="img/icon-1.png" alt="" />
                                </span>
                                <span className="text">Learn More</span>
                              </span>
                            </a>
                            <a className="button size-2 style-3" href="#">
                              <span className="button-wrapper">
                                <span className="icon">
                                  <img src="img/icon-3.png" alt="" />
                                </span>
                                <span className="text">Add To Cart</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="title">
                        <div className="simple-article size-1 color col-xs-b5">
                          <a href="#">COLOREX EDITION</a>
                        </div>
                        <div className="h6 animate-to-green">
                          <a href="#">hipster beat hr</a>
                        </div>
                      </div>
                      <div className="description">
                        <div className="simple-article text size-2">
                          Mollis nec consequat at In feugiat molestie tortor a
                          malesuada etiam a venenatis ipsum
                        </div>
                        <div className="icons">
                          <a className="entry">
                            <i className="fa fa-check" aria-hidden="true" />
                          </a>
                          <a className="entry open-popup" data-rel={3}>
                            <i className="fa fa-eye" aria-hidden="true" />
                          </a>
                          <a className="entry">
                            <i className="fa fa-heart-o" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                      <div className="price">
                        <div className="color-selection">
                          <div
                            className="entry active"
                            style={{ color: "#3b8bd5" }}
                          />
                          <div className="entry" style={{ color: "#e1191d" }} />
                          <div className="entry" style={{ color: "#facc22" }} />
                        </div>
                        <div className="simple-article size-4">
                          <span className="dark">$190.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="product-shortcode style-1 big">
                      <div className="preview">
                        <img src="img/product-65.jpg" alt="" />
                        <div className="preview-buttons valign-middle">
                          <div className="valign-middle-content">
                            <a className="button size-2 style-2" href="#">
                              <span className="button-wrapper">
                                <span className="icon">
                                  <img src="img/icon-1.png" alt="" />
                                </span>
                                <span className="text">Learn More</span>
                              </span>
                            </a>
                            <a className="button size-2 style-3" href="#">
                              <span className="button-wrapper">
                                <span className="icon">
                                  <img src="img/icon-3.png" alt="" />
                                </span>
                                <span className="text">Add To Cart</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="title">
                        <div className="simple-article size-1 color col-xs-b5">
                          <a href="#">ERGO EDITION</a>
                        </div>
                        <div className="h6 animate-to-green">
                          <a href="#">sport beat rtx</a>
                        </div>
                      </div>
                      <div className="description">
                        <div className="simple-article text size-2">
                          Mollis nec consequat at In feugiat molestie tortor a
                          malesuada etiam a venenatis ipsum
                        </div>
                        <div className="icons">
                          <a className="entry">
                            <i className="fa fa-check" aria-hidden="true" />
                          </a>
                          <a className="entry open-popup" data-rel={3}>
                            <i className="fa fa-eye" aria-hidden="true" />
                          </a>
                          <a className="entry">
                            <i className="fa fa-heart-o" aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                      <div className="price">
                        <div className="color-selection">
                          <div
                            className="entry active"
                            style={{ color: "#c16e31" }}
                          />
                          <div className="entry" style={{ color: "#a4c131" }} />
                          <div className="entry" style={{ color: "#68c131" }} />
                        </div>
                        <div className="simple-article size-4">
                          <span className="dark">$185.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination relative-pagination visible-xs visible-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="empty-space col-xs-b35 col-md-b70" />
      <div className="empty-space col-xs-b35 col-md-b70" />
      <div
        className="block-entry"
        style={{ backgroundImage: "url(img/background-4.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-6">
              <div className="cell-view simple-banner-height">
                <div className="empty-space col-xs-b35" />
                <div className="simple-article light transparent size-3 uppercase col-xs-b5">
                  special offer
                </div>
                <h2 className="h2 light">get -30% off on all headphones</h2>
                <div className="title-underline left light">
                  <span />
                </div>
                <div className="simple-article light size-4 col-xs-b20">
                  Praesent nec finibus massa. Phasellus id auctor lacus, at
                  iaculis lorem. Donec quis arcu elit. In vehicula purus sem, eu
                  mattis est lacinia.
                </div>
                <div
                  className="countdown light max-width col-xs-b30"
                  data-end="Sep,1,2017"
                />
                <div className="single-line-form">
                  <input
                    className="simple-input"
                    type="text"
                    defaultValue=""
                    placeholder="Your email"
                  />
                  <div className="button size-2 style-2">
                    <span className="button-wrapper">
                      <span className="icon">
                        <img src="img/icon-1.png" alt="" />
                      </span>
                      <span className="text">submit</span>
                    </span>
                    <input type="submit" defaultValue="" />
                  </div>
                </div>
                <div className="empty-space col-xs-b35" />
              </div>
            </div>
          </div>
          <div className="row-background big left hidden-xs">
            <img src="img/background-13.png" alt="" />
          </div>
        </div>
      </div>
      <div className="empty-space col-xs-b35 col-md-b70" />
      <div className="empty-space col-xs-b35 col-md-b70" />
      <div className="container">
        <div className="slider-wrapper hidden-pixel-y">
          <div className="swiper-button-prev hidden" />
          <div className="swiper-button-next hidden" />
          <div
            className="swiper-container"
            data-breakpoints={1}
            data-xs-slides={1}
            data-sm-slides={2}
            data-md-slides={2}
            data-lt-slides={3}
            data-slides-per-view={3}
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="product-shortcode style-5">
                  <div className="product-label green">best price</div>
                  <div className="icons">
                    <a className="entry">
                      <i className="fa fa-check" aria-hidden="true" />
                    </a>
                    <a className="entry open-popup" data-rel={3}>
                      <i className="fa fa-eye" aria-hidden="true" />
                    </a>
                    <a className="entry">
                      <i className="fa fa-heart-o" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="preview">
                    <div
                      className="swiper-container"
                      data-loop={1}
                      data-touch={0}
                    >
                      <div className="swiper-button-prev style-1" />
                      <div className="swiper-button-next style-1" />
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <img src="img/product-90.jpg" alt="" />
                        </div>
                        <div className="swiper-slide">
                          <img src="img/product-64.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-animate">
                    <div className="title">
                      <div className="shortcode-rate-wrapper">
                        <div className="rate-wrapper align-inline">
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star-o" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="h6 animate-to-green">
                        <a href="#">modern beat nine</a>
                      </div>
                    </div>
                    <div className="description">
                      <div className="simple-article text size-2">
                        Mollis nec consequat at In feugiat molestie tortor a
                        malesuada
                      </div>
                    </div>
                    <div className="price">
                      <div className="simple-article size-4 dark">$630.00</div>
                    </div>
                  </div>
                  <div className="preview-buttons">
                    <div className="buttons-wrapper">
                      <a className="button size-2 style-2" href="#">
                        <span className="button-wrapper">
                          <span className="icon">
                            <img src="img/icon-1.png" alt="" />
                          </span>
                          <span className="text">Learn More</span>
                        </span>
                      </a>
                      <a className="button size-2 style-3" href="#">
                        <span className="button-wrapper">
                          <span className="icon">
                            <img src="img/icon-3.png" alt="" />
                          </span>
                          <span className="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-shortcode style-5">
                  <div className="icons">
                    <a className="entry">
                      <i className="fa fa-check" aria-hidden="true" />
                    </a>
                    <a className="entry open-popup" data-rel={3}>
                      <i className="fa fa-eye" aria-hidden="true" />
                    </a>
                    <a className="entry">
                      <i className="fa fa-heart-o" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="preview">
                    <div
                      className="swiper-container"
                      data-loop={1}
                      data-touch={0}
                    >
                      <div className="swiper-button-prev style-1" />
                      <div className="swiper-button-next style-1" />
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <img src="img/product-91.jpg" alt="" />
                        </div>
                        <div className="swiper-slide">
                          <img src="img/product-64.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-animate">
                    <div className="title">
                      <div className="shortcode-rate-wrapper">
                        <div className="rate-wrapper align-inline">
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star-o" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="h6 animate-to-green">
                        <a href="#">modern beat nine</a>
                      </div>
                    </div>
                    <div className="description">
                      <div className="simple-article text size-2">
                        Mollis nec consequat at In feugiat molestie tortor a
                        malesuada
                      </div>
                    </div>
                    <div className="price">
                      <div className="simple-article size-4 dark">$630.00</div>
                    </div>
                  </div>
                  <div className="preview-buttons">
                    <div className="buttons-wrapper">
                      <a className="button size-2 style-2" href="#">
                        <span className="button-wrapper">
                          <span className="icon">
                            <img src="img/icon-1.png" alt="" />
                          </span>
                          <span className="text">Learn More</span>
                        </span>
                      </a>
                      <a className="button size-2 style-3" href="#">
                        <span className="button-wrapper">
                          <span className="icon">
                            <img src="img/icon-3.png" alt="" />
                          </span>
                          <span className="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-shortcode style-5">
                  <div className="icons">
                    <a className="entry">
                      <i className="fa fa-check" aria-hidden="true" />
                    </a>
                    <a className="entry open-popup" data-rel={3}>
                      <i className="fa fa-eye" aria-hidden="true" />
                    </a>
                    <a className="entry">
                      <i className="fa fa-heart-o" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="preview">
                    <div
                      className="swiper-container"
                      data-loop={1}
                      data-touch={0}
                    >
                      <div className="swiper-button-prev style-1" />
                      <div className="swiper-button-next style-1" />
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <img src="img/product-92.jpg" alt="" />
                        </div>
                        <div className="swiper-slide">
                          <img src="img/product-64.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-animate">
                    <div className="title">
                      <div className="shortcode-rate-wrapper">
                        <div className="rate-wrapper align-inline">
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star-o" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="h6 animate-to-green">
                        <a href="#">modern beat nine</a>
                      </div>
                    </div>
                    <div className="description">
                      <div className="simple-article text size-2">
                        Mollis nec consequat at In feugiat molestie tortor a
                        malesuada
                      </div>
                    </div>
                    <div className="price">
                      <div className="simple-article size-4 dark">$630.00</div>
                    </div>
                  </div>
                  <div className="preview-buttons">
                    <div className="buttons-wrapper">
                      <a className="button size-2 style-2" href="#">
                        <span className="button-wrapper">
                          <span className="icon">
                            <img src="img/icon-1.png" alt="" />
                          </span>
                          <span className="text">Learn More</span>
                        </span>
                      </a>
                      <a className="button size-2 style-3" href="#">
                        <span className="button-wrapper">
                          <span className="icon">
                            <img src="img/icon-3.png" alt="" />
                          </span>
                          <span className="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-shortcode style-5">
                  <div className="product-label green">best price</div>
                  <div className="icons">
                    <a className="entry">
                      <i className="fa fa-check" aria-hidden="true" />
                    </a>
                    <a className="entry open-popup" data-rel={3}>
                      <i className="fa fa-eye" aria-hidden="true" />
                    </a>
                    <a className="entry">
                      <i className="fa fa-heart-o" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="preview">
                    <div
                      className="swiper-container"
                      data-loop={1}
                      data-touch={0}
                    >
                      <div className="swiper-button-prev style-1" />
                      <div className="swiper-button-next style-1" />
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <img src="img/product-90.jpg" alt="" />
                        </div>
                        <div className="swiper-slide">
                          <img src="img/product-64.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-animate">
                    <div className="title">
                      <div className="shortcode-rate-wrapper">
                        <div className="rate-wrapper align-inline">
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star-o" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="h6 animate-to-green">
                        <a href="#">modern beat nine</a>
                      </div>
                    </div>
                    <div className="description">
                      <div className="simple-article text size-2">
                        Mollis nec consequat at In feugiat molestie tortor a
                        malesuada
                      </div>
                    </div>
                    <div className="price">
                      <div className="simple-article size-4 dark">$630.00</div>
                    </div>
                  </div>
                  <div className="preview-buttons">
                    <div className="buttons-wrapper">
                      <a className="button size-2 style-2" href="#">
                        <span className="button-wrapper">
                          <span className="icon">
                            <img src="img/icon-1.png" alt="" />
                          </span>
                          <span className="text">Learn More</span>
                        </span>
                      </a>
                      <a className="button size-2 style-3" href="#">
                        <span className="button-wrapper">
                          <span className="icon">
                            <img src="img/icon-3.png" alt="" />
                          </span>
                          <span className="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-shortcode style-5">
                  <div className="icons">
                    <a className="entry">
                      <i className="fa fa-check" aria-hidden="true" />
                    </a>
                    <a className="entry open-popup" data-rel={3}>
                      <i className="fa fa-eye" aria-hidden="true" />
                    </a>
                    <a className="entry">
                      <i className="fa fa-heart-o" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="preview">
                    <div
                      className="swiper-container"
                      data-loop={1}
                      data-touch={0}
                    >
                      <div className="swiper-button-prev style-1" />
                      <div className="swiper-button-next style-1" />
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <img src="img/product-91.jpg" alt="" />
                        </div>
                        <div className="swiper-slide">
                          <img src="img/product-64.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-animate">
                    <div className="title">
                      <div className="shortcode-rate-wrapper">
                        <div className="rate-wrapper align-inline">
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star-o" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="h6 animate-to-green">
                        <a href="#">modern beat nine</a>
                      </div>
                    </div>
                    <div className="description">
                      <div className="simple-article text size-2">
                        Mollis nec consequat at In feugiat molestie tortor a
                        malesuada
                      </div>
                    </div>
                    <div className="price">
                      <div className="simple-article size-4 dark">$630.00</div>
                    </div>
                  </div>
                  <div className="preview-buttons">
                    <div className="buttons-wrapper">
                      <a className="button size-2 style-2" href="#">
                        <span className="button-wrapper">
                          <span className="icon">
                            <img src="img/icon-1.png" alt="" />
                          </span>
                          <span className="text">Learn More</span>
                        </span>
                      </a>
                      <a className="button size-2 style-3" href="#">
                        <span className="button-wrapper">
                          <span className="icon">
                            <img src="img/icon-3.png" alt="" />
                          </span>
                          <span className="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="product-shortcode style-5">
                  <div className="icons">
                    <a className="entry">
                      <i className="fa fa-check" aria-hidden="true" />
                    </a>
                    <a className="entry open-popup" data-rel={3}>
                      <i className="fa fa-eye" aria-hidden="true" />
                    </a>
                    <a className="entry">
                      <i className="fa fa-heart-o" aria-hidden="true" />
                    </a>
                  </div>
                  <div className="preview">
                    <div
                      className="swiper-container"
                      data-loop={1}
                      data-touch={0}
                    >
                      <div className="swiper-button-prev style-1" />
                      <div className="swiper-button-next style-1" />
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <img src="img/product-92.jpg" alt="" />
                        </div>
                        <div className="swiper-slide">
                          <img src="img/product-64.jpg" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-animate">
                    <div className="title">
                      <div className="shortcode-rate-wrapper">
                        <div className="rate-wrapper align-inline">
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star" aria-hidden="true" />
                          <i className="fa fa-star-o" aria-hidden="true" />
                        </div>
                      </div>
                      <div className="h6 animate-to-green">
                        <a href="#">modern beat nine</a>
                      </div>
                    </div>
                    <div className="description">
                      <div className="simple-article text size-2">
                        Mollis nec consequat at In feugiat molestie tortor a
                        malesuada
                      </div>
                    </div>
                    <div className="price">
                      <div className="simple-article size-4 dark">$630.00</div>
                    </div>
                  </div>
                  <div className="preview-buttons">
                    <div className="buttons-wrapper">
                      <a className="button size-2 style-2" href="#">
                        <span className="button-wrapper">
                          <span className="icon">
                            <img src="img/icon-1.png" alt="" />
                          </span>
                          <span className="text">Learn More</span>
                        </span>
                      </a>
                      <a className="button size-2 style-3" href="#">
                        <span className="button-wrapper">
                          <span className="icon">
                            <img src="img/icon-3.png" alt="" />
                          </span>
                          <span className="text">Add To Cart</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination relative-pagination" />
          </div>
        </div>
      </div>
      <div className="empty-space col-xs-b35 col-md-b70" />
      <div className="empty-space col-xs-b35 col-md-b70" />
      <div className="container">
        <div className="text-center">
          <div className="simple-article size-3 grey uppercase col-xs-b5">
            new arrivals
          </div>
          <div className="h2">something new for you</div>
          <div className="title-underline center">
            <span />
          </div>
        </div>
      </div>
      <div className="empty-space col-xs-b35 col-md-b70" />
      <div className="container">
        <div className="tabs-block">
          <div className="container">
            <div className="tabulation-menu-wrapper text-center">
              <div className="tabulation-title simple-input">all</div>
              <ul className="tabulation-toggle">
                <li>
                  <a className="tab-menu active">all</a>
                </li>
                <li>
                  <a className="tab-menu">sport</a>
                </li>
                <li>
                  <a className="tab-menu">professionals</a>
                </li>
                <li>
                  <a className="tab-menu">dj</a>
                </li>
                <li>
                  <a className="tab-menu">relax</a>
                </li>
                <li>
                  <a className="tab-menu">club</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="empty-space col-xs-b30 col-sm-b60" />
          <div className="tab-entry visible">
            <div className="slider-wrapper side-borders">
              <div className="swiper-button-prev hidden-xs hidden-sm" />
              <div className="swiper-button-next hidden-xs hidden-sm" />
              <div
                className="swiper-container"
                data-breakpoints={1}
                data-xs-slides={1}
                data-sm-slides={2}
                data-md-slides={3}
                data-lt-slides={4}
                data-slides-per-view={4}
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="product-shortcode style-5 small">
                      <div className="product-label green">best price</div>
                      <div className="icons">
                        <a className="entry">
                          <i className="fa fa-check" aria-hidden="true" />
                        </a>
                        <a className="entry open-popup" data-rel={3}>
                          <i className="fa fa-eye" aria-hidden="true" />
                        </a>
                        <a className="entry">
                          <i className="fa fa-heart-o" aria-hidden="true" />
                        </a>
                      </div>
                      <div className="preview">
                        <div
                          className="swiper-container"
                          data-loop={1}
                          data-touch={0}
                        >
                          <div className="swiper-button-prev style-1" />
                          <div className="swiper-button-next style-1" />
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img src="img/product-66.jpg" alt="" />
                            </div>
                            <div className="swiper-slide">
                              <img src="img/product-67.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="title">
                        <div className="simple-article size-1 color col-xs-b5">
                          <a href="#">Modern edition</a>
                        </div>
                        <div className="h6 animate-to-green">
                          <a href="#">modern beat nine</a>
                        </div>
                      </div>
                      <div className="description">
                        <div className="simple-article text size-2">
                          Mollis nec consequat at In feugiat molestie tortor a
                          malesuada
                        </div>
                      </div>
                      <div className="price">
                        <div className="simple-article size-4 dark">
                          $630.00
                        </div>
                      </div>
                      <div className="preview-buttons">
                        <div className="buttons-wrapper">
                          <a className="button size-2 style-2" href="#">
                            <span className="button-wrapper">
                              <span className="icon">
                                <img src="img/icon-1.png" alt="" />
                              </span>
                              <span className="text">Learn More</span>
                            </span>
                          </a>
                          <a className="button size-2 style-3" href="#">
                            <span className="button-wrapper">
                              <span className="icon">
                                <img src="img/icon-3.png" alt="" />
                              </span>
                              <span className="text">Add To Cart</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="product-shortcode style-5 small">
                      <div className="product-label red">20% discount</div>
                      <div className="icons">
                        <a className="entry">
                          <i className="fa fa-check" aria-hidden="true" />
                        </a>
                        <a className="entry open-popup" data-rel={3}>
                          <i className="fa fa-eye" aria-hidden="true" />
                        </a>
                        <a className="entry">
                          <i className="fa fa-heart-o" aria-hidden="true" />
                        </a>
                      </div>
                      <div className="preview">
                        <div
                          className="swiper-container"
                          data-loop={1}
                          data-touch={0}
                        >
                          <div className="swiper-button-prev style-1" />
                          <div className="swiper-button-next style-1" />
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img src="img/product-67.jpg" alt="" />
                            </div>
                            <div className="swiper-slide">
                              <img src="img/product-68.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="title">
                        <div className="simple-article size-1 color col-xs-b5">
                          <a href="#">Modern edition</a>
                        </div>
                        <div className="h6 animate-to-green">
                          <a href="#">modern beat nine</a>
                        </div>
                      </div>
                      <div className="description">
                        <div className="simple-article text size-2">
                          Mollis nec consequat at In feugiat molestie tortor a
                          malesuada
                        </div>
                      </div>
                      <div className="price">
                        <div className="simple-article size-4 dark">
                          <span className="color">$155.00</span>
                          &nbsp;&nbsp;&nbsp;
                          <span className="line-through">$350.00</span>
                        </div>
                      </div>
                      <div className="preview-buttons">
                        <div className="buttons-wrapper">
                          <a className="button size-2 style-2" href="#">
                            <span className="button-wrapper">
                              <span className="icon">
                                <img src="img/icon-1.png" alt="" />
                              </span>
                              <span className="text">Learn More</span>
                            </span>
                          </a>
                          <a className="button size-2 style-3" href="#">
                            <span className="button-wrapper">
                              <span className="icon">
                                <img src="img/icon-3.png" alt="" />
                              </span>
                              <span className="text">Add To Cart</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="product-shortcode style-5 small">
                      <div className="icons">
                        <a className="entry">
                          <i className="fa fa-check" aria-hidden="true" />
                        </a>
                        <a className="entry open-popup" data-rel={3}>
                          <i className="fa fa-eye" aria-hidden="true" />
                        </a>
                        <a className="entry">
                          <i className="fa fa-heart-o" aria-hidden="true" />
                        </a>
                      </div>
                      <div className="preview">
                        <div
                          className="swiper-container"
                          data-loop={1}
                          data-touch={0}
                        >
                          <div className="swiper-button-prev style-1" />
                          <div className="swiper-button-next style-1" />
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img src="img/product-68.jpg" alt="" />
                            </div>
                            <div className="swiper-slide">
                              <img src="img/product-69.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="title">
                        <div className="simple-article size-1 color col-xs-b5">
                          <a href="#">Modern edition</a>
                        </div>
                        <div className="h6 animate-to-green">
                          <a href="#">modern beat nine</a>
                        </div>
                      </div>
                      <div className="description">
                        <div className="simple-article text size-2">
                          Mollis nec consequat at In feugiat molestie tortor a
                          malesuada
                        </div>
                      </div>
                      <div className="price">
                        <div className="simple-article size-4 dark">
                          $630.00
                        </div>
                      </div>
                      <div className="preview-buttons">
                        <div className="buttons-wrapper">
                          <a className="button size-2 style-2" href="#">
                            <span className="button-wrapper">
                              <span className="icon">
                                <img src="img/icon-1.png" alt="" />
                              </span>
                              <span className="text">Learn More</span>
                            </span>
                          </a>
                          <a className="button size-2 style-3" href="#">
                            <span className="button-wrapper">
                              <span className="icon">
                                <img src="img/icon-3.png" alt="" />
                              </span>
                              <span className="text">Add To Cart</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="product-shortcode style-5 small">
                      <div className="icons">
                        <a className="entry">
                          <i className="fa fa-check" aria-hidden="true" />
                        </a>
                        <a className="entry open-popup" data-rel={3}>
                          <i className="fa fa-eye" aria-hidden="true" />
                        </a>
                        <a className="entry">
                          <i className="fa fa-heart-o" aria-hidden="true" />
                        </a>
                      </div>
                      <div className="preview">
                        <div
                          className="swiper-container"
                          data-loop={1}
                          data-touch={0}
                        >
                          <div className="swiper-button-prev style-1" />
                          <div className="swiper-button-next style-1" />
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img src="img/product-69.jpg" alt="" />
                            </div>
                            <div className="swiper-slide">
                              <img src="img/product-70.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="title">
                        <div className="simple-article size-1 color col-xs-b5">
                          <a href="#">Modern edition</a>
                        </div>
                        <div className="h6 animate-to-green">
                          <a href="#">modern beat nine</a>
                        </div>
                      </div>
                      <div className="description">
                        <div className="simple-article text size-2">
                          Mollis nec consequat at In feugiat molestie tortor a
                          malesuada
                        </div>
                      </div>
                      <div className="price">
                        <div className="simple-article size-4 dark">
                          $630.00
                        </div>
                      </div>
                      <div className="preview-buttons">
                        <div className="buttons-wrapper">
                          <a className="button size-2 style-2" href="#">
                            <span className="button-wrapper">
                              <span className="icon">
                                <img src="img/icon-1.png" alt="" />
                              </span>
                              <span className="text">Learn More</span>
                            </span>
                          </a>
                          <a className="button size-2 style-3" href="#">
                            <span className="button-wrapper">
                              <span className="icon">
                                <img src="img/icon-3.png" alt="" />
                              </span>
                              <span className="text">Add To Cart</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="product-shortcode style-5 small">
                      <div className="icons">
                        <a className="entry">
                          <i className="fa fa-check" aria-hidden="true" />
                        </a>
                        <a className="entry open-popup" data-rel={3}>
                          <i className="fa fa-eye" aria-hidden="true" />
                        </a>
                        <a className="entry">
                          <i className="fa fa-heart-o" aria-hidden="true" />
                        </a>
                      </div>
                      <div className="preview">
                        <div
                          className="swiper-container"
                          data-loop={1}
                          data-touch={0}
                        >
                          <div className="swiper-button-prev style-1" />
                          <div className="swiper-button-next style-1" />
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img src="img/product-70.jpg" alt="" />
                            </div>
                            <div className="swiper-slide">
                              <img src="img/product-70.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="title">
                        <div className="simple-article size-1 color col-xs-b5">
                          <a href="#">Modern edition</a>
                        </div>
                        <div className="h6 animate-to-green">
                          <a href="#">modern beat nine</a>
                        </div>
                      </div>
                      <div className="description">
                        <div className="simple-article text size-2">
                          Mollis nec consequat at In feugiat molestie tortor a
                          malesuada
                        </div>
                      </div>
                      <div className="price">
                        <div className="simple-article size-4 dark">
                          $630.00
                        </div>
                      </div>
                      <div className="preview-buttons">
                        <div className="buttons-wrapper">
                          <a className="button size-2 style-2" href="#">
                            <span className="button-wrapper">
                              <span className="icon">
                                <img src="img/icon-1.png" alt="" />
                              </span>
                              <span className="text">Learn More</span>
                            </span>
                          </a>
                          <a className="button size-2 style-3" href="#">
                            <span className="button-wrapper">
                              <span className="icon">
                                <img src="img/icon-3.png" alt="" />
                              </span>
                              <span className="text">Add To Cart</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination relative-pagination visible-xs visible-sm" />
              </div>
            </div>
          </div>
          <div className="tab-entry">
            <div className="slider-wrapper side-borders">
              <div className="swiper-button-prev hidden-xs hidden-sm" />
              <div className="swiper-button-next hidden-xs hidden-sm" />
              <div
                className="swiper-container"
                data-breakpoints={1}
                data-xs-slides={1}
                data-sm-slides={2}
                data-md-slides={3}
                data-lt-slides={4}
                data-slides-per-view={4}
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="product-shortcode style-5 small">
                      <div className="product-label green">best price</div>
                      <div className="icons">
                        <a className="entry">
                          <i className="fa fa-check" aria-hidden="true" />
                        </a>
                        <a className="entry open-popup" data-rel={3}>
                          <i className="fa fa-eye" aria-hidden="true" />
                        </a>
                        <a className="entry">
                          <i className="fa fa-heart-o" aria-hidden="true" />
                        </a>
                      </div>
                      <div className="preview">
                        <div
                          className="swiper-container"
                          data-loop={1}
                          data-touch={0}
                        >
                          <div className="swiper-button-prev style-1" />
                          <div className="swiper-button-next style-1" />
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img src="img/product-66.jpg" alt="" />
                            </div>
                            <div className="swiper-slide">
                              <img src="img/product-67.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="title">
                        <div className="simple-article size-1 color col-xs-b5">
                          <a href="#">Modern edition</a>
                        </div>
                        <div className="h6 animate-to-green">
                          <a href="#">modern beat nine</a>
                        </div>
                      </div>
                      <div className="description">
                        <div className="simple-article text size-2">
                          Mollis nec consequat at In feugiat molestie tortor a
                          malesuada
                        </div>
                      </div>
                      <div className="price">
                        <div className="simple-article size-4 dark">
                          $630.00
                        </div>
                      </div>
                      <div className="preview-buttons">
                        <div className="buttons-wrapper">
                          <a className="button size-2 style-2" href="#">
                            <span className="button-wrapper">
                              <span className="icon">
                                <img src="img/icon-1.png" alt="" />
                              </span>
                              <span className="text">Learn More</span>
                            </span>
                          </a>
                          <a className="button size-2 style-3" href="#">
                            <span className="button-wrapper">
                              <span className="icon">
                                <img src="img/icon-3.png" alt="" />
                              </span>
                              <span className="text">Add To Cart</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination relative-pagination visible-xs visible-sm" />
              </div>
            </div>
          </div>
          <div className="tab-entry">
            <div className="slider-wrapper side-borders">
              <div className="swiper-button-prev hidden-xs hidden-sm" />
              <div className="swiper-button-next hidden-xs hidden-sm" />
              <div
                className="swiper-container"
                data-breakpoints={1}
                data-xs-slides={1}
                data-sm-slides={2}
                data-md-slides={3}
                data-lt-slides={4}
                data-slides-per-view={4}
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="product-shortcode style-5 small">
                      <div className="product-label red">20% discount</div>
                      <div className="icons">
                        <a className="entry">
                          <i className="fa fa-check" aria-hidden="true" />
                        </a>
                        <a className="entry open-popup" data-rel={3}>
                          <i className="fa fa-eye" aria-hidden="true" />
                        </a>
                        <a className="entry">
                          <i className="fa fa-heart-o" aria-hidden="true" />
                        </a>
                      </div>
                      <div className="preview">
                        <div
                          className="swiper-container"
                          data-loop={1}
                          data-touch={0}
                        >
                          <div className="swiper-button-prev style-1" />
                          <div className="swiper-button-next style-1" />
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img src="img/product-67.jpg" alt="" />
                            </div>
                            <div className="swiper-slide">
                              <img src="img/product-68.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="title">
                        <div className="simple-article size-1 color col-xs-b5">
                          <a href="#">Modern edition</a>
                        </div>
                        <div className="h6 animate-to-green">
                          <a href="#">modern beat nine</a>
                        </div>
                      </div>
                      <div className="description">
                        <div className="simple-article text size-2">
                          Mollis nec consequat at In feugiat molestie tortor a
                          malesuada
                        </div>
                      </div>
                      <div className="price">
                        <div className="simple-article size-4 dark">
                          <span className="color">$155.00</span>
                          &nbsp;&nbsp;&nbsp;
                          <span className="line-through">$350.00</span>
                        </div>
                      </div>
                      <div className="preview-buttons">
                        <div className="buttons-wrapper">
                          <a className="button size-2 style-2" href="#">
                            <span className="button-wrapper">
                              <span className="icon">
                                <img src="img/icon-1.png" alt="" />
                              </span>
                              <span className="text">Learn More</span>
                            </span>
                          </a>
                          <a className="button size-2 style-3" href="#">
                            <span className="button-wrapper">
                              <span className="icon">
                                <img src="img/icon-3.png" alt="" />
                              </span>
                              <span className="text">Add To Cart</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination relative-pagination visible-xs visible-sm" />
              </div>
            </div>
          </div>
          <div className="tab-entry">
            <div className="slider-wrapper side-borders">
              <div className="swiper-button-prev hidden-xs hidden-sm" />
              <div className="swiper-button-next hidden-xs hidden-sm" />
              <div
                className="swiper-container"
                data-breakpoints={1}
                data-xs-slides={1}
                data-sm-slides={2}
                data-md-slides={3}
                data-lt-slides={4}
                data-slides-per-view={4}
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="product-shortcode style-5 small">
                      <div className="icons">
                        <a className="entry">
                          <i className="fa fa-check" aria-hidden="true" />
                        </a>
                        <a className="entry open-popup" data-rel={3}>
                          <i className="fa fa-eye" aria-hidden="true" />
                        </a>
                        <a className="entry">
                          <i className="fa fa-heart-o" aria-hidden="true" />
                        </a>
                      </div>
                      <div className="preview">
                        <div
                          className="swiper-container"
                          data-loop={1}
                          data-touch={0}
                        >
                          <div className="swiper-button-prev style-1" />
                          <div className="swiper-button-next style-1" />
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img src="img/product-68.jpg" alt="" />
                            </div>
                            <div className="swiper-slide">
                              <img src="img/product-69.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="title">
                        <div className="simple-article size-1 color col-xs-b5">
                          <a href="#">Modern edition</a>
                        </div>
                        <div className="h6 animate-to-green">
                          <a href="#">modern beat nine</a>
                        </div>
                      </div>
                      <div className="description">
                        <div className="simple-article text size-2">
                          Mollis nec consequat at In feugiat molestie tortor a
                          malesuada
                        </div>
                      </div>
                      <div className="price">
                        <div className="simple-article size-4 dark">
                          $630.00
                        </div>
                      </div>
                      <div className="preview-buttons">
                        <div className="buttons-wrapper">
                          <a className="button size-2 style-2" href="#">
                            <span className="button-wrapper">
                              <span className="icon">
                                <img src="img/icon-1.png" alt="" />
                              </span>
                              <span className="text">Learn More</span>
                            </span>
                          </a>
                          <a className="button size-2 style-3" href="#">
                            <span className="button-wrapper">
                              <span className="icon">
                                <img src="img/icon-3.png" alt="" />
                              </span>
                              <span className="text">Add To Cart</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination relative-pagination visible-xs visible-sm" />
              </div>
            </div>
          </div>
          <div className="tab-entry">
            <div className="slider-wrapper side-borders">
              <div className="swiper-button-prev hidden-xs hidden-sm" />
              <div className="swiper-button-next hidden-xs hidden-sm" />
              <div
                className="swiper-container"
                data-breakpoints={1}
                data-xs-slides={1}
                data-sm-slides={2}
                data-md-slides={3}
                data-lt-slides={4}
                data-slides-per-view={4}
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="product-shortcode style-5 small">
                      <div className="icons">
                        <a className="entry">
                          <i className="fa fa-check" aria-hidden="true" />
                        </a>
                        <a className="entry open-popup" data-rel={3}>
                          <i className="fa fa-eye" aria-hidden="true" />
                        </a>
                        <a className="entry">
                          <i className="fa fa-heart-o" aria-hidden="true" />
                        </a>
                      </div>
                      <div className="preview">
                        <div
                          className="swiper-container"
                          data-loop={1}
                          data-touch={0}
                        >
                          <div className="swiper-button-prev style-1" />
                          <div className="swiper-button-next style-1" />
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img src="img/product-69.jpg" alt="" />
                            </div>
                            <div className="swiper-slide">
                              <img src="img/product-70.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="title">
                        <div className="simple-article size-1 color col-xs-b5">
                          <a href="#">Modern edition</a>
                        </div>
                        <div className="h6 animate-to-green">
                          <a href="#">modern beat nine</a>
                        </div>
                      </div>
                      <div className="description">
                        <div className="simple-article text size-2">
                          Mollis nec consequat at In feugiat molestie tortor a
                          malesuada
                        </div>
                      </div>
                      <div className="price">
                        <div className="simple-article size-4 dark">
                          $630.00
                        </div>
                      </div>
                      <div className="preview-buttons">
                        <div className="buttons-wrapper">
                          <a className="button size-2 style-2" href="#">
                            <span className="button-wrapper">
                              <span className="icon">
                                <img src="img/icon-1.png" alt="" />
                              </span>
                              <span className="text">Learn More</span>
                            </span>
                          </a>
                          <a className="button size-2 style-3" href="#">
                            <span className="button-wrapper">
                              <span className="icon">
                                <img src="img/icon-3.png" alt="" />
                              </span>
                              <span className="text">Add To Cart</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination relative-pagination visible-xs visible-sm" />
              </div>
            </div>
          </div>
          <div className="tab-entry">
            <div className="slider-wrapper side-borders">
              <div className="swiper-button-prev hidden-xs hidden-sm" />
              <div className="swiper-button-next hidden-xs hidden-sm" />
              <div
                className="swiper-container"
                data-breakpoints={1}
                data-xs-slides={1}
                data-sm-slides={2}
                data-md-slides={3}
                data-lt-slides={4}
                data-slides-per-view={4}
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="product-shortcode style-5 small">
                      <div className="icons">
                        <a className="entry">
                          <i className="fa fa-check" aria-hidden="true" />
                        </a>
                        <a className="entry open-popup" data-rel={3}>
                          <i className="fa fa-eye" aria-hidden="true" />
                        </a>
                        <a className="entry">
                          <i className="fa fa-heart-o" aria-hidden="true" />
                        </a>
                      </div>
                      <div className="preview">
                        <div
                          className="swiper-container"
                          data-loop={1}
                          data-touch={0}
                        >
                          <div className="swiper-button-prev style-1" />
                          <div className="swiper-button-next style-1" />
                          <div className="swiper-wrapper">
                            <div className="swiper-slide">
                              <img src="img/product-70.jpg" alt="" />
                            </div>
                            <div className="swiper-slide">
                              <img src="img/product-70.jpg" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="title">
                        <div className="simple-article size-1 color col-xs-b5">
                          <a href="#">Modern edition</a>
                        </div>
                        <div className="h6 animate-to-green">
                          <a href="#">modern beat nine</a>
                        </div>
                      </div>
                      <div className="description">
                        <div className="simple-article text size-2">
                          Mollis nec consequat at In feugiat molestie tortor a
                          malesuada
                        </div>
                      </div>
                      <div className="price">
                        <div className="simple-article size-4 dark">
                          $630.00
                        </div>
                      </div>
                      <div className="preview-buttons">
                        <div className="buttons-wrapper">
                          <a className="button size-2 style-2" href="#">
                            <span className="button-wrapper">
                              <span className="icon">
                                <img src="img/icon-1.png" alt="" />
                              </span>
                              <span className="text">Learn More</span>
                            </span>
                          </a>
                          <a className="button size-2 style-3" href="#">
                            <span className="button-wrapper">
                              <span className="icon">
                                <img src="img/icon-3.png" alt="" />
                              </span>
                              <span className="text">Add To Cart</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-pagination relative-pagination visible-xs visible-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="empty-space col-xs-b35 col-md-b70" />
      <div className="empty-space col-xs-b35 col-md-b70" />
      <div className="row nopadding">
        <div className="col-md-6">
          <div
            className="banner-shortcode style-3 wide"
            style={{ backgroundImage: "url(img/background-14.jpg)" }}
          >
            <div className="valign-middle-cell">
              <div className="slider-product-preview hidden-xs">
                <img src="img/product-preview-15.png" alt="" />
              </div>
              <div className="valign-middle-content">
                <div className="simple-article size-3 light transparent uppercase col-xs-b5">
                  relax collection
                </div>
                <h3 className="h3 light">your perfect sound</h3>
                <div className="title-underline light left">
                  <span />
                </div>
                <div className="simple-article size-4 light transparent col-xs-b30">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesentir pulvinar ante et nisl scelerisque.
                </div>
                <a className="button size-2 style-1" href="#">
                  <span className="button-wrapper">
                    <span className="icon">
                      <img src="img/icon-1.png" alt="" />
                    </span>
                    <span className="text">learn more</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div
            className="banner-shortcode style-3 wide"
            style={{ backgroundImage: "url(img/background-15.jpg)" }}
          >
            <div className="valign-middle-cell">
              <div className="slider-product-preview hidden-xs">
                <img src="img/product-preview-12.png" alt="" />
              </div>
              <div className="valign-middle-content">
                <div className="simple-article size-3 light transparent uppercase col-xs-b5">
                  street collection
                </div>
                <h3 className="h3 light">noise is not a problem</h3>
                <div className="title-underline light left">
                  <span />
                </div>
                <div className="simple-article size-4 light transparent col-xs-b30">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Praesentir pulvinar ante et nisl scelerisque.
                </div>
                <a className="button size-2 style-1" href="#">
                  <span className="button-wrapper">
                    <span className="icon">
                      <img src="img/icon-1.png" alt="" />
                    </span>
                    <span className="text">learn more</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="empty-space col-xs-b35 col-md-b70" />
      <div className="empty-space col-xs-b35 col-md-b70" />
      <div className="container">
        <div className="text-center">
          <div className="simple-article size-3 grey uppercase col-xs-b5">
            accessories
          </div>
          <div className="h2">choosing in one style</div>
          <div className="title-underline center">
            <span />
          </div>
        </div>
      </div>
      <div className="empty-space col-xs-b35 col-md-b70" />
      <div className="container">
        <div className="small-items-line slider-wrapper hidden-pixel-y">
          <div className="row nopadding">
            {products.map((product) => {
              return (
                <>
                  <div className="col-sm-4 col-lg-2">
                    <div className="product-shortcode style-7">
                      <div className="preview">
                        <img src={product.thumbnail} alt="" />
                        <div className="preview-buttons valign-middle">
                          <div className="valign-middle-content">
                            <a className="button size-1 style-2" href="#">
                              <span className="button-wrapper">
                                <span className="icon">
                                  <img src="img/icon-1.png" alt="" />
                                </span>
                                <span className="text">Learn More</span>
                              </span>
                            </a>
                            <a className="button size-1 style-3" href="#">
                              <span className="button-wrapper">
                                <span className="icon">
                                  <img src="img/icon-3.png" alt="" />
                                </span>
                                <span className="text">Add To Cart</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="title">
                        <div className="simple-article size-1 color col-xs-b10">
                          <a href="#">{product.category}</a>
                        </div>
                        <div className="h6 animate-to-green">
                          <a href="#">{product.title}</a>
                        </div>
                      </div>
                      <div className="price">
                        <div className="simple-article size-2">
                          <span className="dark">${product.price}</span>
                        </div>
                      </div>
                      <div className="icons">
                        <a className="entry">
                          <i className="fa fa-check" aria-hidden="true" />
                        </a>
                        <a className="entry open-popup" data-rel={3}>
                          <i className="fa fa-eye" aria-hidden="true" />
                        </a>
                        <a className="entry">
                          <i className="fa fa-heart-o" aria-hidden="true" />
                        </a>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        <div className="empty-space col-xs-b30" />
        <div className="text-center">
          <a className="button size-2 style-3" href="products">
            <span className="button-wrapper">
              <span className="icon">
                <img src="img/icon-4.png" alt="" />
              </span>
              <span className="text">view all Products</span>
            </span>
          </a>
        </div>
      </div>
      <div className="empty-space col-xs-b35 col-md-b70" />
      <div className="empty-space col-xs-b35 col-md-b70" />
    </>
  );
}

export default Index;
