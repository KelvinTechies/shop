function Contact() {
  return (
    <>
      <div className="header-empty-space" />
      <div
        className="block-entry fixed-background"
        style={{ backgroundImage: "url(img/background-26.jpg)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <div className="cell-view simple-banner-height text-center">
                <div className="empty-space col-xs-b35 col-sm-b70" />
                <h1 className="h1 light">contact us</h1>
                <div className="title-underline center">
                  <span />
                </div>
                <div className="simple-article light transparent size-4">
                  In feugiat molestie tortor a malesuada. Etiam a venenatis
                  ipsum. Proin pharetra elit at feugiat commodo vel placerat
                  tincidunt sapien nec
                </div>
                <div className="empty-space col-xs-b35 col-sm-b70" />
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
            our contacts
          </div>
          <div className="h2">we ready for your questions</div>
          <div className="title-underline center">
            <span />
          </div>
        </div>
      </div>
      <div className="empty-space col-sm-b15 col-md-b50" />
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="icon-description-shortcode style-1">
              <img className="icon" src="img/icon-25.png" alt="" />
              <div className="title h6">address</div>
              <div className="description simple-article size-2">
                1st, new york, usa
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="icon-description-shortcode style-1">
              <img className="icon" src="img/icon-23.png" alt="" />
              <div className="title h6">phone</div>
              <div
                className="description simple-article size-2"
                style={{ lineHeight: 26 }}
              >
                <a href="tel:+35235551238745">+3 (523) 555 123 8745</a>
                <br />
                <a href="tel:+35235557585238">+3 (523) 555 758 5238</a>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="icon-description-shortcode style-1">
              <img className="icon" src="img/icon-28.png" alt="" />
              <div className="title h6">email</div>
              <div className="description simple-article size-2">
                <a href="mailto:iamkelvincole@gmail.com">
                  iamkelvincole@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-sm-3">
            <div className="icon-description-shortcode style-1">
              <img className="icon" src="img/icon-26.png" alt="" />
              <div className="title h6">Follow us</div>
              <div className="follow light">
                <a className="entry" href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a className="entry" href="#">
                  <i className="fa fa-twitter" />
                </a>
                <a className="entry" href="#">
                  <i className="fa fa-linkedin" />
                </a>
                <a className="entry" href="#">
                  <i className="fa fa-google-plus" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="empty-space col-xs-b25 col-sm-b50" />

      <div className="empty-space col-xs-b25 col-sm-b50" />
      <div className="container">
        <h4 className="h4 text-center col-xs-b25">have a questions?</h4>
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <form className="contact-form">
              <div className="row m5">
                <div className="col-sm-6">
                  <input
                    className="simple-input col-xs-b20"
                    type="text"
                    defaultValue=""
                    placeholder="Name"
                    name="name"
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    className="simple-input col-xs-b20"
                    type="text"
                    defaultValue=""
                    placeholder="Email"
                    name="email"
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    className="simple-input col-xs-b20"
                    type="text"
                    defaultValue=""
                    placeholder="Phone"
                    name="phone"
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    className="simple-input col-xs-b20"
                    type="text"
                    defaultValue=""
                    placeholder="Subject"
                    name="subject"
                  />
                </div>
                <div className="col-sm-12">
                  <textarea
                    className="simple-input col-xs-b20"
                    placeholder="Your message"
                    name="message"
                    defaultValue={""}
                  />
                </div>
                <div className="col-sm-12">
                  <div className="text-center">
                    <div className="button size-2 style-3">
                      <span className="button-wrapper">
                        <span className="icon">
                          <img src="img/icon-4.png" alt="" />
                        </span>
                        <span className="text">send message</span>
                      </span>
                      <input type="submit" />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="empty-space col-xs-b35 col-md-b70" />
      <div className="empty-space col-xs-b35 col-md-b70" />
    </>
  );
}

export default Contact;
