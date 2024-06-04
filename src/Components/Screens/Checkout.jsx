import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

function Checkout() {
  const carts = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const placeOrder = () => {
    swal("Success!", "Your order has been placed successfully!", "success");
  };
  return (
    <>
      <div className="header-empty-space" />
      <div className="container">
        <div className="empty-space col-xs-b15 col-sm-b30" />
        <div className="breadcrumbs">
          <a href="#">home</a>
          <a href="#">checkout</a>
        </div>
        <div className="empty-space col-xs-b15 col-sm-b50 col-md-b100" />
        <div className="text-center">
          <div className="simple-article size-3 grey uppercase col-xs-b5">
            checkout
          </div>
          <div className="h2">check your info</div>
          <div className="title-underline center">
            <span />
          </div>
        </div>
      </div>
      <div className="empty-space col-xs-b35 col-md-b70" />
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xs-b50 col-md-b0">
            <h4 className="h4 col-xs-b25">billing details</h4>
            <select className="SlectBox">
              <option disabled="disabled" selected="selected">
                Choose country
              </option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <div className="empty-space col-xs-b20" />
            <div className="row m10">
              <div className="col-sm-6">
                <input
                  className="simple-input"
                  type="text"
                  defaultValue=""
                  placeholder="First name"
                />
                <div className="empty-space col-xs-b20" />
              </div>
              <div className="col-sm-6">
                <input
                  className="simple-input"
                  type="text"
                  defaultValue=""
                  placeholder="Last name"
                />
                <div className="empty-space col-xs-b20" />
              </div>
            </div>
            <input
              className="simple-input"
              type="text"
              defaultValue=""
              placeholder="Company name"
            />
            <div className="empty-space col-xs-b20" />
            <input
              className="simple-input"
              type="text"
              defaultValue=""
              placeholder="Street address"
            />
            <div className="empty-space col-xs-b20" />
            <div className="row m10">
              <div className="col-sm-6">
                <input
                  className="simple-input"
                  type="text"
                  defaultValue=""
                  placeholder="Appartment"
                />
                <div className="empty-space col-xs-b20" />
              </div>
              <div className="col-sm-6">
                <input
                  className="simple-input"
                  type="text"
                  defaultValue=""
                  placeholder="Town/City"
                />
                <div className="empty-space col-xs-b20" />
              </div>
            </div>
            <div className="row m10">
              <div className="col-sm-6">
                <input
                  className="simple-input"
                  type="text"
                  defaultValue=""
                  placeholder="State/Country"
                />
                <div className="empty-space col-xs-b20" />
              </div>
              <div className="col-sm-6">
                <input
                  className="simple-input"
                  type="text"
                  defaultValue=""
                  placeholder="Postcode/ZIP"
                />
                <div className="empty-space col-xs-b20" />
              </div>
            </div>
            <div className="row m10">
              <div className="col-sm-6">
                <input
                  className="simple-input"
                  type="text"
                  defaultValue=""
                  placeholder="Email"
                />
                <div className="empty-space col-xs-b20" />
              </div>
              <div className="col-sm-6">
                <input
                  className="simple-input"
                  type="text"
                  defaultValue=""
                  placeholder="Phone"
                />
                <div className="empty-space col-xs-b20" />
              </div>
            </div>
            <label className="checkbox-entry">
              <input type="checkbox" defaultChecked="" />
              <span>Privacy policy agreement</span>
            </label>
            <div className="empty-space col-xs-b50" />
            <label className="checkbox-entry checkbox-toggle-title">
              <input type="checkbox" />
              <span>ship to different address?</span>
            </label>
            <div className="checkbox-toggle-wrapper">
              <div className="empty-space col-xs-b25" />
              <select className="SlectBox">
                <option disabled="disabled" selected="selected">
                  Choose country
                </option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
              <div className="empty-space col-xs-b20" />
              <div className="row m10">
                <div className="col-sm-6">
                  <input
                    className="simple-input"
                    type="text"
                    defaultValue=""
                    placeholder="First name"
                  />
                  <div className="empty-space col-xs-b20" />
                </div>
                <div className="col-sm-6">
                  <input
                    className="simple-input"
                    type="text"
                    defaultValue=""
                    placeholder="Last name"
                  />
                  <div className="empty-space col-xs-b20" />
                </div>
              </div>
              <input
                className="simple-input"
                type="text"
                defaultValue=""
                placeholder="Company name"
              />
              <div className="empty-space col-xs-b20" />
              <input
                className="simple-input"
                type="text"
                defaultValue=""
                placeholder="Street address"
              />
              <div className="empty-space col-xs-b20" />
              <div className="row m10">
                <div className="col-sm-6">
                  <input
                    className="simple-input"
                    type="text"
                    defaultValue=""
                    placeholder="Appartment"
                  />
                  <div className="empty-space col-xs-b20" />
                </div>
                <div className="col-sm-6">
                  <input
                    className="simple-input"
                    type="text"
                    defaultValue=""
                    placeholder="Town/City"
                  />
                  <div className="empty-space col-xs-b20" />
                </div>
              </div>
              <div className="row m10">
                <div className="col-sm-6">
                  <input
                    className="simple-input"
                    type="text"
                    defaultValue=""
                    placeholder="State/Country"
                  />
                  <div className="empty-space col-xs-b20" />
                </div>
                <div className="col-sm-6">
                  <input
                    className="simple-input"
                    type="text"
                    defaultValue=""
                    placeholder="Postcode/ZIP"
                  />
                  <div className="empty-space col-xs-b20" />
                </div>
              </div>
            </div>
            <div className="empty-space col-xs-b30 col-sm-b60" />
            <textarea
              className="simple-input"
              placeholder="Note about your order"
              defaultValue={""}
            />
          </div>
          <div className="col-md-6">
            <h4 className="h4 col-xs-b25">your order</h4>
            {carts.map((cart) => {
              return (
                <>
                  <div className="cart-entry clearfix">
                    <a className="cart-entry-thumbnail" href="#">
                      <img style={{ width: 100 }} src={cart.thumbnail} alt="" />
                    </a>
                    <div className="cart-entry-description">
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <div className="h6">
                                <a href="#">{cart.title}</a>
                              </div>
                              <div className="simple-article size-1">
                                QUANTITY: {cart.quantity}
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
                                style={{ background: "#eee" }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              );
            })}

            <div className="order-details-entry simple-article size-3 grey uppercase">
              <div className="row">
                <div className="col-xs-6">cart subtotal</div>
                <div className="col-xs-6 col-xs-text-right">
                  <div className="color">$1195.00</div>
                </div>
              </div>
            </div>
            <div className="order-details-entry simple-article size-3 grey uppercase">
              <div className="row">
                <div className="col-xs-6">shipping and handling</div>
                <div className="col-xs-6 col-xs-text-right">
                  <div className="color">free shipping</div>
                </div>
              </div>
            </div>
            <div className="order-details-entry simple-article size-3 grey uppercase">
              <div className="row">
                <div className="col-xs-6">order total</div>
                <div className="col-xs-6 col-xs-text-right">
                  <div className="color">$1195.00</div>
                </div>
              </div>
            </div>
            <div className="empty-space col-xs-b50" />
            <h4 className="h4 col-xs-b25">payment method</h4>

            <div className="empty-space col-xs-b10" />
            <div className="simple-article size-2">
              * Etiam mollis tristique mi ac ultrices. Morbi vel neque eget
              lacus sollicitudin facilisis. Lorem ipsum dolor sit amet semper
              ante vehicula ociis natoq.
            </div>
            <div className="empty-space col-xs-b30" />
            <div onClick={placeOrder} className="button block size-2 style-3">
              <span className="button-wrapper">
                <span className="icon">
                  <img src="img/icon-4.png" alt="" />
                </span>
                <span className="text">place order</span>
              </span>
              <input type="submit" />
            </div>
          </div>
        </div>
      </div>
      <div className="empty-space col-xs-b35 col-md-b70" />
    </>
  );
}

export default Checkout;
