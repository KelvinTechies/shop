import { useEffect, useState } from "react";
import { fetchAllProducts } from "../../utils/app";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Rducx/cartSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getDatas = async () => {
      const response = await fetchAllProducts();
      setProducts(response.products);
    };
    getDatas();
  }, []);

  const dispatch = useDispatch();

  const addProductToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(product.title + " Has been Added to cart");
  };
  return (
    <>
      <div className="header-empty-space" />
      <div className="container">
        <div className="empty-space col-xs-b15 col-sm-b30" />
        <div className="breadcrumbs">
          <a href="#">home</a>
          <a href="#">accessories</a>
          <a href="#">gadgets</a>
          <a href="#">sport gadgets</a>
        </div>
        <div className="empty-space col-xs-b15 col-sm-b50 col-md-b100" />
        <div className="row">
          <div className="col-md-9 col-md-push-3">
            <div className="swiper-container rounded">
              <div className="swiper-button-prev style-1 hidden" />
              <div className="swiper-button-next style-1 hidden" />
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="banner-shortcode style-1">
                    <div
                      className="background"
                      style={{ backgroundImage: "url(img/thumbnail-14.jpg)" }}
                    />
                    <div className="description valign-middle">
                      <div className="valign-middle-content">
                        <div className="simple-article size-3 light fulltransparent">
                          DON'T MISS!
                        </div>
                        <div className="banner-title color">UP TO 70%</div>
                        <div className="h4 light">best android tv box</div>
                        <div className="empty-space col-xs-b25" />
                        <a className="button size-1 style-3" href="#">
                          <span className="button-wrapper">
                            <span className="icon">
                              <img src="img/icon-4.png" alt="" />
                            </span>
                            <span className="text">learn more</span>
                          </span>
                        </a>
                      </div>
                      <div className="empty-space col-xs-b60 col-sm-b0" />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="banner-shortcode style-1">
                    <div
                      className="background"
                      style={{ backgroundImage: "url(img/thumbnail-10.jpg)" }}
                    />
                    <div className="description valign-middle">
                      <div className="valign-middle-content">
                        <div className="simple-article size-3 light fulltransparent">
                          DON'T MISS!
                        </div>
                        <div className="banner-title color">UP TO 70%</div>
                        <div className="h4 light">best android tv box</div>
                        <div className="empty-space col-xs-b25" />
                        <a className="button size-1 style-3" href="#">
                          <span className="button-wrapper">
                            <span className="icon">
                              <img src="img/icon-4.png" alt="" />
                            </span>
                            <span className="text">learn more</span>
                          </span>
                        </a>
                      </div>
                      <div className="empty-space col-xs-b60 col-sm-b0" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination" />
            </div>
            <div className="empty-space col-xs-b35 col-md-b70" />
            <div className="align-inline spacing-1">
              <div className="h4">Sport gadgets</div>
            </div>
            <div className="align-inline spacing-1">
              <div className="simple-article size-1">
                SHOWING <b className="grey">15</b> OF{" "}
                <b className="grey">2 358</b> RESULTS
              </div>
            </div>
            <div className="align-inline spacing-1 hidden-xs">
              <a className="pagination toggle-products-view active">
                <img src="img/icon-14.png" alt="" />
                <img src="img/icon-15.png" alt="" />
              </a>
              <a className="pagination toggle-products-view">
                <img src="img/icon-16.png" alt="" />
                <img src="img/icon-17.png" alt="" />
              </a>
            </div>
            <div className="align-inline spacing-1 filtration-cell-width-1">
              <select className="SlectBox small">
                <option disabled="disabled" selected="selected">
                  Most popular products
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </div>
            <div className="align-inline spacing-1 filtration-cell-width-2">
              <select className="SlectBox small">
                <option disabled="disabled" selected="selected">
                  Show 30
                </option>
                <option value="volvo">30</option>
                <option value="saab">50</option>
                <option value="mercedes">100</option>
                <option value="audi">200</option>
              </select>
            </div>
            <div className="empty-space col-xs-b25 col-sm-b60" />
            <div className="products-content">
              <div className="products-wrapper">
                <div className="row nopadding">
                  {products.map((product) => {
                    return (
                      <>
                        <div className="col-sm-4">
                          <div className="product-shortcode style-1">
                            <div className="title">
                              <div className="simple-article size-1 color col-xs-b5">
                                <a href="#">{product.category}</a>
                              </div>
                              <div className="h6 animate-to-green">
                                <a href="#">{product.title}</a>
                              </div>
                            </div>
                            <div className="preview">
                              <img src={product.thumbnail} alt="" />
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
                                  <a
                                    onClick={() => addProductToCart(product)}
                                    className="button size-2 style-3"
                                    href="#"
                                  >
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
                            <div className="price">
                              <div className="simple-article size-4 dark">
                                ${product.price}
                              </div>
                            </div>
                            <div className="description">
                              <div className="simple-article text size-2">
                                {product.description}
                              </div>
                              <div className="icons">
                                <a className="entry">
                                  <i
                                    className="fa fa-check"
                                    aria-hidden="true"
                                  />
                                </a>
                                <a className="entry open-popup" data-rel={3}>
                                  <i className="fa fa-eye" aria-hidden="true" />
                                </a>
                                <a className="entry">
                                  <i
                                    className="fa fa-heart-o"
                                    aria-hidden="true"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="empty-space col-xs-b35 col-sm-b0" />
            <div className="row">
              <div className="col-sm-3 hidden-xs">
                <a className="button size-1 style-5" href="#">
                  <span className="button-wrapper">
                    <span className="icon">
                      <i className="fa fa-angle-left" aria-hidden="true" />
                    </span>
                    <span className="text">prev page</span>
                  </span>
                </a>
              </div>
              <div className="col-sm-6 text-center">
                <div className="pagination-wrapper">
                  <a className="pagination active">1</a>
                  <a className="pagination">2</a>
                  <a className="pagination">3</a>
                  <a className="pagination">4</a>
                  <span className="pagination">...</span>
                  <a className="pagination">23</a>
                </div>
              </div>
              <div className="col-sm-3 hidden-xs text-right">
                <a className="button size-1 style-5" href="#">
                  <span className="button-wrapper">
                    <span className="icon">
                      <i className="fa fa-angle-right" aria-hidden="true" />
                    </span>
                    <span className="text">prev page</span>
                  </span>
                </a>
              </div>
            </div>
            <div className="empty-space col-xs-b35 col-md-b70" />
            <div className="empty-space col-md-b70" />
          </div>
          <div className="col-md-3 col-md-pull-9">
            <div className="h4 col-xs-b10">popular categories</div>
            <ul className="categories-menu transparent">
              <li>
                <a href="#">laptops &amp; computers</a>
                <div className="toggle" />
                <ul>
                  <li>
                    <a href="#">laptops &amp; computers</a>
                    <div className="toggle" />
                    <ul>
                      <li>
                        <a href="#">laptops &amp; computers</a>
                      </li>
                      <li>
                        <a href="#">video &amp; photo cameras</a>
                      </li>
                      <li>
                        <a href="#">smartphones</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">video &amp; photo cameras</a>
                    <div className="toggle" />
                    <ul>
                      <li>
                        <a href="#">video &amp; photo cameras</a>
                      </li>
                      <li>
                        <a href="#">smartphones</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">smartphones</a>
                  </li>
                  <li>
                    <a href="#">tv &amp; audio</a>
                  </li>
                  <li>
                    <a href="#">gadgets</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">video &amp; photo cameras</a>
                <div className="toggle" />
                <ul>
                  <li>
                    <a href="#">laptops &amp; computers</a>
                    <div className="toggle" />
                    <ul>
                      <li>
                        <a href="#">laptops &amp; computers</a>
                      </li>
                      <li>
                        <a href="#">video &amp; photo cameras</a>
                      </li>
                      <li>
                        <a href="#">smartphones</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">video &amp; photo cameras</a>
                    <div className="toggle" />
                    <ul>
                      <li>
                        <a href="#">laptops &amp; computers</a>
                      </li>
                      <li>
                        <a href="#">smartphones</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">smartphones</a>
                  </li>
                  <li>
                    <a href="#">tv &amp; audio</a>
                  </li>
                  <li>
                    <a href="#">gadgets</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">smartphones</a>
                <div className="toggle" />
                <ul>
                  <li>
                    <a href="#">laptops &amp; computers</a>
                    <div className="toggle" />
                    <ul>
                      <li>
                        <a href="#">laptops &amp; computers</a>
                      </li>
                      <li>
                        <a href="#">video &amp; photo cameras</a>
                      </li>
                      <li>
                        <a href="#">smartphones</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">video &amp; photo cameras</a>
                    <div className="toggle" />
                    <ul>
                      <li>
                        <a href="#">video &amp; photo cameras</a>
                      </li>
                      <li>
                        <a href="#">smartphones</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">smartphones</a>
                  </li>
                  <li>
                    <a href="#">tv &amp; audio</a>
                  </li>
                  <li>
                    <a href="#">gadgets</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">tv &amp; audio</a>
                <div className="toggle" />
                <ul>
                  <li>
                    <a href="#">laptops &amp; computers</a>
                    <div className="toggle" />
                    <ul>
                      <li>
                        <a href="#">laptops &amp; computers</a>
                      </li>
                      <li>
                        <a href="#">video &amp; photo cameras</a>
                      </li>
                      <li>
                        <a href="#">smartphones</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">video &amp; photo cameras</a>
                    <div className="toggle" />
                    <ul>
                      <li>
                        <a href="#">video &amp; photo cameras</a>
                      </li>
                      <li>
                        <a href="#">smartphones</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">smartphones</a>
                  </li>
                  <li>
                    <a href="#">tv &amp; audio</a>
                  </li>
                  <li>
                    <a href="#">gadgets</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">gadgets</a>
                <div className="toggle" />
                <ul>
                  <li>
                    <a href="#">laptops &amp; computers</a>
                    <div className="toggle" />
                    <ul>
                      <li>
                        <a href="#">laptops &amp; computers</a>
                      </li>
                      <li>
                        <a href="#">video &amp; photo cameras</a>
                      </li>
                      <li>
                        <a href="#">smartphones</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">video &amp; photo cameras</a>
                    <div className="toggle" />
                    <ul>
                      <li>
                        <a href="#">video &amp; photo cameras</a>
                      </li>
                      <li>
                        <a href="#">smartphones</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">smartphones</a>
                  </li>
                  <li>
                    <a href="#">tv &amp; audio</a>
                  </li>
                  <li>
                    <a href="#">gadgets</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">car electronics</a>
                <div className="toggle" />
                <ul>
                  <li>
                    <a href="#">laptops &amp; computers</a>
                    <div className="toggle" />
                    <ul>
                      <li>
                        <a href="#">laptops &amp; computers</a>
                      </li>
                      <li>
                        <a href="#">video &amp; photo cameras</a>
                      </li>
                      <li>
                        <a href="#">smartphones</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">video &amp; photo cameras</a>
                    <div className="toggle" />
                    <ul>
                      <li>
                        <a href="#">video &amp; photo cameras</a>
                      </li>
                      <li>
                        <a href="#">smartphones</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">smartphones</a>
                  </li>
                  <li>
                    <a href="#">tv &amp; audio</a>
                  </li>
                  <li>
                    <a href="#">gadgets</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">video games &amp; consoles</a>
              </li>
              <li>
                <a href="#">software</a>
              </li>
              <li>
                <a href="#">offeci accessories</a>
              </li>
              <li>
                <a href="#">accessories</a>
              </li>
            </ul>
            <div className="empty-space col-xs-b25 col-sm-b50" />
            <div className="h4 col-xs-b25">Price</div>
            <div id="prices-range" />
            <div className="simple-article size-1">
              PRICE:{" "}
              <b className="grey">
                $<span className="min-price">40</span> - $
                <span className="max-price">300</span>
              </b>
            </div>
            <div className="empty-space col-xs-b25 col-sm-b50" />
            <div className="h4 col-xs-b25">Brands</div>
            <label className="checkbox-entry">
              <input type="checkbox" />
              <span>LG</span>
            </label>
            <div className="empty-space col-xs-b10" />
            <label className="checkbox-entry">
              <input type="checkbox" />
              <span>SAMSUNG</span>
            </label>
            <div className="empty-space col-xs-b10" />
            <label className="checkbox-entry">
              <input type="checkbox" />
              <span>Apple</span>
            </label>
            <div className="empty-space col-xs-b10" />
            <label className="checkbox-entry">
              <input type="checkbox" />
              <span>HTC</span>
            </label>
            <div className="empty-space col-xs-b10" />
            <label className="checkbox-entry">
              <input type="checkbox" />
              <span>Google</span>
            </label>
            <div className="empty-space col-xs-b25 col-sm-b50" />
            <div className="h4 col-xs-b25">Choose Color</div>
            <div className="color-selection size-1">
              <div className="entry active" style={{ color: "#a7f050" }} />
              <div className="entry" style={{ color: "#50e3f0" }} />
              <div className="entry" style={{ color: "#eee" }} />
              <div className="entry" style={{ color: "#4d900c" }} />
              <div className="entry" style={{ color: "#edb82c" }} />
              <div className="entry" style={{ color: "#7d3f99" }} />
              <div className="entry" style={{ color: "#3481c7" }} />
              <div className="entry" style={{ color: "#bf584b" }} />
            </div>
            <div className="empty-space col-xs-b25 col-sm-b50" />
            <div className="h4 col-xs-b25">Operation System</div>
            <label className="checkbox-entry">
              <input type="checkbox" />
              <span>Android</span>
            </label>
            <div className="empty-space col-xs-b10" />
            <label className="checkbox-entry">
              <input type="checkbox" />
              <span>IOS</span>
            </label>
            <div className="empty-space col-xs-b10" />
            <label className="checkbox-entry">
              <input type="checkbox" />
              <span>Windows Phone</span>
            </label>
            <div className="empty-space col-xs-b10" />
            <label className="checkbox-entry">
              <input type="checkbox" />
              <span>Symbian</span>
            </label>
            <div className="empty-space col-xs-b10" />
            <label className="checkbox-entry">
              <input type="checkbox" />
              <span>Blackberry OS</span>
            </label>
            <div className="empty-space col-xs-b25 col-sm-b50" />
            <div className="h4 col-xs-b25">Popular Tags</div>
            <div className="tags light clearfix">
              <a className="tag">headphoness</a>
              <a className="tag">accessories</a>
              <a className="tag">new</a>
              <a className="tag">wireless</a>
              <a className="tag">cables</a>
              <a className="tag">devices</a>
              <a className="tag">gadgets</a>
              <a className="tag">brands</a>
              <a className="tag">replacements</a>
              <a className="tag">cases</a>
              <a className="tag">cables</a>
              <a className="tag">professional</a>
            </div>
            <div className="empty-space col-xs-b25 col-sm-b50" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-3 col-xs-b25">
            <div className="h4 col-xs-b25">Hot Sale</div>
            <div className="product-shortcode style-4 rounded clearfix">
              <a className="preview" href="#">
                <img src="img/product-28.jpg" alt="" />
              </a>
              <div className="description">
                <div className="simple-article color size-1 col-xs-b5">
                  <a href="#">WIRELESS</a>
                </div>
                <h6 className="h6 col-xs-b10">
                  <a href="#">wireless headphones</a>
                </h6>
                <div className="simple-article dark">$98.00</div>
              </div>
            </div>
            <div className="col-xs-b10" />
            <div className="product-shortcode style-4 rounded clearfix">
              <a className="preview" href="#">
                <img src="img/product-29.jpg" alt="" />
              </a>
              <div className="description">
                <div className="simple-article color size-1 col-xs-b5">
                  <a href="#">CASES</a>
                </div>
                <h6 className="h6 col-xs-b10">
                  <a href="#">earphones case</a>
                </h6>
                <div className="simple-article dark">$12.00</div>
              </div>
            </div>
            <div className="col-xs-b10" />
            <div className="product-shortcode style-4 rounded clearfix">
              <a className="preview" href="#">
                <img src="img/product-30.jpg" alt="" />
              </a>
              <div className="description">
                <div className="simple-article color size-1 col-xs-b5">
                  <a href="#">CASES</a>
                </div>
                <h6 className="h6 col-xs-b10">
                  <a href="#">headphones case</a>
                </h6>
                <div className="simple-article">
                  <span className="color">$24.00</span>&nbsp;&nbsp;&nbsp;
                  <span className="line-through">$32.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-xs-b25">
            <div className="h4 col-xs-b25">Top Rated</div>
            <div className="product-shortcode style-4 rounded clearfix">
              <a className="preview" href="#">
                <img src="img/product-31.jpg" alt="" />
              </a>
              <div className="description">
                <div className="simple-article color size-1 col-xs-b5">
                  <a href="#">WIRELESS</a>
                </div>
                <h6 className="h6 col-xs-b10">
                  <a href="#">wireless headphones</a>
                </h6>
                <div className="simple-article dark">$98.00</div>
              </div>
            </div>
            <div className="col-xs-b10" />
            <div className="product-shortcode style-4 rounded clearfix">
              <a className="preview" href="#">
                <img src="img/product-32.jpg" alt="" />
              </a>
              <div className="description">
                <div className="simple-article color size-1 col-xs-b5">
                  <a href="#">CASES</a>
                </div>
                <h6 className="h6 col-xs-b10">
                  <a href="#">earphones case</a>
                </h6>
                <div className="simple-article dark">$12.00</div>
              </div>
            </div>
            <div className="col-xs-b10" />
            <div className="product-shortcode style-4 rounded clearfix">
              <a className="preview" href="#">
                <img src="img/product-33.jpg" alt="" />
              </a>
              <div className="description">
                <div className="simple-article color size-1 col-xs-b5">
                  <a href="#">CASES</a>
                </div>
                <h6 className="h6 col-xs-b10">
                  <a href="#">headphones case</a>
                </h6>
                <div className="simple-article dark">$4.00</div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-xs-b25">
            <div className="h4 col-xs-b25">Popular</div>
            <div className="product-shortcode style-4 rounded clearfix">
              <a className="preview" href="#">
                <img src="img/product-34.jpg" alt="" />
              </a>
              <div className="description">
                <div className="simple-article color size-1 col-xs-b5">
                  <a href="#">WIRELESS</a>
                </div>
                <h6 className="h6 col-xs-b10">
                  <a href="#">wireless headphones</a>
                </h6>
                <div className="simple-article dark">$98.00</div>
              </div>
            </div>
            <div className="col-xs-b10" />
            <div className="product-shortcode style-4 rounded clearfix">
              <a className="preview" href="#">
                <img src="img/product-35.jpg" alt="" />
              </a>
              <div className="description">
                <div className="simple-article color size-1 col-xs-b5">
                  <a href="#">CASES</a>
                </div>
                <h6 className="h6 col-xs-b10">
                  <a href="#">earphones case</a>
                </h6>
                <div className="simple-article dark">$12.00</div>
              </div>
            </div>
            <div className="col-xs-b10" />
            <div className="product-shortcode style-4 rounded clearfix">
              <a className="preview" href="#">
                <img src="img/product-36.jpg" alt="" />
              </a>
              <div className="description">
                <div className="simple-article color size-1 col-xs-b5">
                  <a href="#">CASES</a>
                </div>
                <h6 className="h6 col-xs-b10">
                  <a href="#">headphones case</a>
                </h6>
                <div className="simple-article dark">$4.00</div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-3 col-xs-b25">
            <div className="h4 col-xs-b25">Best Choice</div>
            <div className="product-shortcode style-4 rounded clearfix">
              <a className="preview" href="#">
                <img src="img/product-37.jpg" alt="" />
              </a>
              <div className="description">
                <div className="simple-article color size-1 col-xs-b5">
                  <a href="#">WIRELESS</a>
                </div>
                <h6 className="h6 col-xs-b10">
                  <a href="#">wireless headphones</a>
                </h6>
                <div className="simple-article dark">$98.00</div>
              </div>
            </div>
            <div className="col-xs-b10" />
            <div className="product-shortcode style-4 rounded clearfix">
              <a className="preview" href="#">
                <img src="img/product-38.jpg" alt="" />
              </a>
              <div className="description">
                <div className="simple-article color size-1 col-xs-b5">
                  <a href="#">CASES</a>
                </div>
                <h6 className="h6 col-xs-b10">
                  <a href="#">earphones case</a>
                </h6>
                <div className="simple-article dark">$12.00</div>
              </div>
            </div>
            <div className="col-xs-b10" />
            <div className="product-shortcode style-4 rounded clearfix">
              <a className="preview" href="#">
                <img src="img/product-39.jpg" alt="" />
              </a>
              <div className="description">
                <div className="simple-article color size-1 col-xs-b5">
                  <a href="#">CASES</a>
                </div>
                <h6 className="h6 col-xs-b10">
                  <a href="#">headphones case</a>
                </h6>
                <div className="simple-article dark">$4.00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="empty-space col-xs-b15 col-sm-b45" />
      <div className="empty-space col-md-b70" />
    </>
  );
}

export default Products;
