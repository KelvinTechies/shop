import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";
import { deleteFrmCart } from "../Rducx/cartSlice";

function Header({ children }) {
  const carts = useSelector((state) => state.cart.cartItems);
  const totalQty = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  return (
    <>
      <header>
        <div className="header-top">
          <div className="content-margins">
            <div className="row">
              <div className="col-md-5 hidden-xs hidden-sm">
                <div className="entry">
                  <b>contact us:</b>{" "}
                  <a href="tel:+35235551238745">+3 (523) 555 123 8745</a>
                </div>
                <div className="entry">
                  <b>email:</b>{" "}
                  <a href="mailto:office@exzo.com">office@exzo.com</a>
                </div>
              </div>
              <div className="col-md-7 col-md-text-right">
                <div className="entry">
                  <a className="open-popup" data-rel="1">
                    <b>login</b>
                  </a>
                  &nbsp; or &nbsp;
                  <a className="open-popup" data-rel="2">
                    <b>register</b>
                  </a>
                </div>
                <div className="entry language">
                  <div className="title">
                    <b>en</b>
                  </div>
                  <div className="language-toggle header-toggle-animation">
                    <a href="index1.html">fr</a>
                    <a href="index1.html">ru</a>
                    <a href="index1.html">it</a>
                    <a href="index1.html">sp</a>
                  </div>
                </div>
                <div className="entry hidden-xs hidden-sm">
                  <a href="#">
                    <i className="fa fa-heart-o" aria-hidden="true"></i>
                  </a>
                </div>
                <div className="entry hidden-xs hidden-sm cart">
                  <a href="cart.html">
                    <b className="hidden-xs">Your bag</b>
                    <span className="cart-icon">
                      <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                      <span className="cart-label">{totalQty}</span>
                    </span>
                    <span className="cart-title hidden-xs">$1195.00</span>
                  </a>
                  <div className="cart-toggle hidden-xs hidden-sm">
                    <div className="cart-overflow">
                      {carts.map((cart) => {
                        return (
                          <>
                            <div className="cart-entry clearfix">
                              <a className="cart-entry-thumbnail" href="#">
                                <img
                                  style={{ width: 200 }}
                                  src={cart.thumbnail}
                                  alt=""
                                />
                              </a>
                              <div className="cart-entry-description">
                                <table>
                                  <tr>
                                    <td>
                                      <div className="h6">
                                        <a href="#">{cart.title}</a>
                                      </div>
                                      <div className="simple-article size-1">
                                        QUANTITY:{cart.quantity}
                                      </div>
                                    </td>
                                    <td>
                                      <div className="simple-article size-3 grey">
                                        ${cart.price}
                                      </div>
                                      <div className="simple-article size-1">
                                        TOTAL: ${cart.totalPrice}
                                      </div>
                                    </td>
                                    <td>
                                      <div
                                        className="cart-color"
                                        style={{ background: "#eee;" }}
                                      ></div>
                                    </td>
                                    <td>
                                      <div
                                        className="button-close"
                                        onClick={() =>
                                          dispatch(
                                            deleteFrmCart({ id: cart.id })
                                          )
                                        }
                                      ></div>
                                    </td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                    <div className="empty-space col-xs-b40"></div>
                    <div className="row">
                      <div className="col-xs-6">
                        <div className="cell-view empty-space col-xs-b50">
                          <div className="simple-article size-5 grey">
                            TOTAL <span className="color">$1195.00</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-6 text-right">
                        <a className="button size-2 style-3" href="checkout">
                          <span className="button-wrapper">
                            <span className="icon">
                              <img src="img/icon-4.png" alt="" />
                            </span>
                            <span className="text">proceed to checkout</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hamburger-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="content-margins">
            <div className="row">
              <div className="col-xs-3 col-sm-1">
                <a id="logo" href="index1.html">
                  <img src="img/logo-2.png" alt="" />
                </a>
              </div>
              <div className="col-xs-9 col-sm-11 text-right">
                <div className="nav-wrapper">
                  <div className="nav-close-layer"></div>
                  <nav>
                    <ul>
                      <li className="active">
                        <a href="/">Home</a>
                        <div className="menu-toggle"></div>
                        <ul>
                          <li className="active">
                            <a href="index1.html">Homepage 1</a>
                          </li>
                          <li>
                            <a href="index2.html">Homepage 2</a>
                          </li>
                          <li>
                            <a href="index3.html">Homepage 3</a>
                          </li>
                          <li>
                            <a href="index4.html">Homepage 4</a>
                          </li>
                          <li>
                            <a href="index5.html">Homepage 5</a>
                          </li>
                          <li>
                            <a href="index6.html">Homepage 6</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="about1.html">about us</a>
                      </li>
                      <li className="megamenu-wrapper">
                        <a href="products1.html">products</a>
                        <div className="menu-toggle"></div>
                        <div className="megamenu">
                          <div className="links">
                            <a className="active" href="products1.html">
                              Products Landing 1
                            </a>
                            <a href="products2.html">Products Landing 2</a>
                            <a href="products3.html">Products Landing 3</a>
                            <a href="product.html">Product Detail</a>
                          </div>
                          <div className="content">
                            <div className="row nopadding">
                              <div className="col-xs-6">
                                <div className="product-shortcode style-5">
                                  <div className="product-label green">
                                    best price
                                  </div>
                                  <div className="icons">
                                    <a className="entry">
                                      <i
                                        className="fa fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                    <a
                                      className="entry open-popup"
                                      data-rel="3"
                                    >
                                      <i
                                        className="fa fa-eye"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                    <a className="entry">
                                      <i
                                        className="fa fa-heart-o"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                  </div>
                                  <div className="preview">
                                    <div
                                      className="swiper-container"
                                      data-loop="1"
                                    >
                                      <div className="swiper-button-prev style-1"></div>
                                      <div className="swiper-button-next style-1"></div>
                                      <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                          <img
                                            src="img/product-59.jpg"
                                            alt=""
                                          />
                                        </div>
                                        <div className="swiper-slide">
                                          <img
                                            src="img/product-61.jpg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content-animate">
                                    <div className="title">
                                      <div className="shortcode-rate-wrapper">
                                        <div className="rate-wrapper align-inline">
                                          <i
                                            className="fa fa-star"
                                            aria-hidden="true"
                                          ></i>
                                          <i
                                            className="fa fa-star"
                                            aria-hidden="true"
                                          ></i>
                                          <i
                                            className="fa fa-star"
                                            aria-hidden="true"
                                          ></i>
                                          <i
                                            className="fa fa-star"
                                            aria-hidden="true"
                                          ></i>
                                          <i
                                            className="fa fa-star-o"
                                            aria-hidden="true"
                                          ></i>
                                        </div>
                                      </div>
                                      <div className="h6 animate-to-green">
                                        <a href="product.html">
                                          modern beat nine
                                        </a>
                                      </div>
                                    </div>
                                    <div className="description">
                                      <div className="simple-article text size-2">
                                        Mollis nec consequat at In feugiat
                                        molestie tortor a malesuada
                                      </div>
                                    </div>
                                    <div className="price">
                                      <div className="simple-article size-4 dark">
                                        $630.00
                                      </div>
                                    </div>
                                  </div>
                                  <div className="preview-buttons">
                                    <div className="buttons-wrapper">
                                      <a
                                        className="button size-2 style-2"
                                        href="product.html"
                                      >
                                        <span className="button-wrapper">
                                          <span className="icon">
                                            <img src="img/icon-1.png" alt="" />
                                          </span>
                                          <span className="text">
                                            Learn More
                                          </span>
                                        </span>
                                      </a>
                                      <a
                                        className="button size-2 style-3"
                                        href="#"
                                      >
                                        <span className="button-wrapper">
                                          <span className="icon">
                                            <img src="img/icon-3.png" alt="" />
                                          </span>
                                          <span className="text">
                                            Add To Cart
                                          </span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xs-6">
                                <div className="product-shortcode style-5">
                                  <div className="product-label green">
                                    best price
                                  </div>
                                  <div className="icons">
                                    <a className="entry">
                                      <i
                                        className="fa fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                    <a
                                      className="entry open-popup"
                                      data-rel="3"
                                    >
                                      <i
                                        className="fa fa-eye"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                    <a className="entry">
                                      <i
                                        className="fa fa-heart-o"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                  </div>
                                  <div className="preview">
                                    <div
                                      className="swiper-container"
                                      data-loop="1"
                                    >
                                      <div className="swiper-button-prev style-1"></div>
                                      <div className="swiper-button-next style-1"></div>
                                      <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                          <img
                                            src="img/product-60.jpg"
                                            alt=""
                                          />
                                        </div>
                                        <div className="swiper-slide">
                                          <img
                                            src="img/product-61.jpg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content-animate">
                                    <div className="title">
                                      <div className="shortcode-rate-wrapper">
                                        <div className="rate-wrapper align-inline">
                                          <i
                                            className="fa fa-star"
                                            aria-hidden="true"
                                          ></i>
                                          <i
                                            className="fa fa-star"
                                            aria-hidden="true"
                                          ></i>
                                          <i
                                            className="fa fa-star"
                                            aria-hidden="true"
                                          ></i>
                                          <i
                                            className="fa fa-star"
                                            aria-hidden="true"
                                          ></i>
                                          <i
                                            className="fa fa-star-o"
                                            aria-hidden="true"
                                          ></i>
                                        </div>
                                      </div>
                                      <div className="h6 animate-to-green">
                                        <a href="product.html">
                                          modern beat nine
                                        </a>
                                      </div>
                                    </div>
                                    <div className="description">
                                      <div className="simple-article text size-2">
                                        Mollis nec consequat at In feugiat
                                        molestie tortor a malesuada
                                      </div>
                                    </div>
                                    <div className="price">
                                      <div className="simple-article size-4 dark">
                                        $630.00
                                      </div>
                                    </div>
                                  </div>
                                  <div className="preview-buttons">
                                    <div className="buttons-wrapper">
                                      <a
                                        className="button size-2 style-2"
                                        href="product.html"
                                      >
                                        <span className="button-wrapper">
                                          <span className="icon">
                                            <img src="img/icon-1.png" alt="" />
                                          </span>
                                          <span className="text">
                                            Learn More
                                          </span>
                                        </span>
                                      </a>
                                      <a
                                        className="button size-2 style-3"
                                        href="#"
                                      >
                                        <span className="button-wrapper">
                                          <span className="icon">
                                            <img src="img/icon-3.png" alt="" />
                                          </span>
                                          <span className="text">
                                            Add To Cart
                                          </span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="services1.html">Services</a>
                      </li>
                      <li>
                        <a href="blog3.html">blog</a>
                        <div className="menu-toggle"></div>
                        <ul>
                          <li>
                            <a href="blog3.html">Blog Landing Pages</a>
                            <div className="menu-toggle"></div>
                            <ul>
                              <li>
                                <a href="blog3.html">Blog Landing 1</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href="blogdetail1.html">Blog Detail Pages</a>
                            <div className="menu-toggle"></div>
                            <ul>
                              <li>
                                <a href="blogdetail1.html">Blog Detail 1</a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="gallery1.html">gallery</a>
                        <div className="menu-toggle"></div>
                        <ul>
                          <li>
                            <a href="gallery1.html">Gallery 1</a>
                          </li>
                          <li>
                            <a href="gallery2.html">Gallery 2</a>
                          </li>
                        </ul>
                      </li>
                      <li className="megamenu-wrapper">
                        <a href="#">Pages</a>
                        <div className="menu-toggle"></div>
                        <div className="megamenu">
                          <div className="links">
                            <a className="active" href="checkout1">
                              Checkout 1
                            </a>
                            <a href="checkout2.html">Checkout 2</a>
                            <a href="cart.html">Cart</a>
                            <a href="elements.html">Elements</a>
                          </div>
                          <div className="content">
                            <div className="row nopadding">
                              <div className="col-xs-6">
                                <div className="product-shortcode style-5">
                                  <div className="product-label green">
                                    best price
                                  </div>
                                  <div className="icons">
                                    <a className="entry">
                                      <i
                                        className="fa fa-check"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                    <a
                                      className="entry open-popup"
                                      data-rel="3"
                                    >
                                      <i
                                        className="fa fa-eye"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                    <a className="entry">
                                      <i
                                        className="fa fa-heart-o"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                  </div>
                                  <div className="preview">
                                    <div
                                      className="swiper-container"
                                      data-loop="1"
                                    >
                                      <div className="swiper-button-prev style-1"></div>
                                      <div className="swiper-button-next style-1"></div>
                                      <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                          <img
                                            src="img/product-61.jpg"
                                            alt=""
                                          />
                                        </div>
                                        <div className="swiper-slide">
                                          <img
                                            src="img/product-59.jpg"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="content-animate">
                                    <div className="title">
                                      <div className="shortcode-rate-wrapper">
                                        <div className="rate-wrapper align-inline">
                                          <i
                                            className="fa fa-star"
                                            aria-hidden="true"
                                          ></i>
                                          <i
                                            className="fa fa-star"
                                            aria-hidden="true"
                                          ></i>
                                          <i
                                            className="fa fa-star"
                                            aria-hidden="true"
                                          ></i>
                                          <i
                                            className="fa fa-star"
                                            aria-hidden="true"
                                          ></i>
                                          <i
                                            className="fa fa-star-o"
                                            aria-hidden="true"
                                          ></i>
                                        </div>
                                      </div>
                                      <div className="h6 animate-to-green">
                                        <a href="product.html">
                                          modern beat nine
                                        </a>
                                      </div>
                                    </div>
                                    <div className="description">
                                      <div className="simple-article text size-2">
                                        Mollis nec consequat at In feugiat
                                        molestie tortor a malesuada
                                      </div>
                                    </div>
                                    <div className="price">
                                      <div className="simple-article size-4 dark">
                                        $630.00
                                      </div>
                                    </div>
                                  </div>
                                  <div className="preview-buttons">
                                    <div className="buttons-wrapper">
                                      <a
                                        className="button size-2 style-2"
                                        href="product.html"
                                      >
                                        <span className="button-wrapper">
                                          <span className="icon">
                                            <img src="img/icon-1.png" alt="" />
                                          </span>
                                          <span className="text">
                                            Learn More
                                          </span>
                                        </span>
                                      </a>
                                      <a
                                        className="button size-2 style-3"
                                        href="#"
                                      >
                                        <span className="button-wrapper">
                                          <span className="icon">
                                            <img src="img/icon-3.png" alt="" />
                                          </span>
                                          <span className="text">
                                            Add To Cart
                                          </span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-xs-6">
                                <div
                                  className="banner-shortcode style-3 rounded-image text-center"
                                  style={{
                                    backgroundImage:
                                      "url(img/background-11.jpg)",
                                  }}
                                >
                                  <div className="valign-middle-cell">
                                    <div className="valign-middle-content">
                                      <div className="simple-article size-5 light transparent uppercase col-xs-b5">
                                        <span className="color">30%</span>
                                        DISCOUNT
                                      </div>
                                      <h3 className="h3 light col-xs-b15">
                                        all models from relax seriece
                                      </h3>
                                      <div className="simple-article size-3 light transparent col-xs-b30">
                                        Vivamus in tempor eros. Phasellus
                                        rhoncus in nunc sit amet mattis. Integer
                                        in ipsum vestibulum, molestie arcu ac
                                      </div>
                                      <a
                                        className="button size-2 style-1"
                                        href="#"
                                      >
                                        <span className="button-wrapper">
                                          <span className="icon">
                                            <img src="img/icon-1.png" alt="" />
                                          </span>
                                          <span className="text">
                                            learn more
                                          </span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li>
                        <a href="contact1.html">contact</a>
                      </li>
                    </ul>
                    <div className="navigation-title">
                      Navigation
                      <div className="hamburger-icon active">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </nav>
                </div>
                <div className="header-bottom-icon toggle-search">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </div>
                <div className="header-bottom-icon visible-rd">
                  <i className="fa fa-heart-o" aria-hidden="true"></i>
                </div>
                <div className="header-bottom-icon visible-rd">
                  <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                  <span className="cart-label">5</span>
                </div>
              </div>
            </div>
            <div className="header-search-wrapper">
              <div className="header-search-content">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3">
                      <form>
                        <div className="search-submit">
                          <i className="fa fa-search" aria-hidden="true"></i>
                          <input type="submit" />
                        </div>
                        <input
                          className="simple-input style-1"
                          type="text"
                          value=""
                          placeholder="Enter keyword"
                        />
                      </form>
                    </div>
                  </div>
                </div>
                <div className="button-close"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {children}
      <Outlet />
    </>
  );
}

export default Header;
