import React from "react";
import "./index.scss";
import Header from "../../components/header";
import { Tabs } from "antd";
import HomeDownLoad from "../../components/HomeDownLoad";
import RegisterContainer from "../Register";

const index = () => {
  return (
    <div>
      <Header />

      <div id="home-page">
        <div className="container">
          <div className="home-inner">
            <div className="left-size">
              <img src="/img/login-bg.png" />
            </div>
            <div className="right-size">
              <div className="tab">
                <Tabs defaultActiveKey="1" centered>
                  <Tabs.TabPane tab="Đã có tài khoản" key="1">
                    <HomeDownLoad />
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Chưa có tài khoản" key="2">
                    <RegisterContainer />
                    <div className="d-flex flex-column align-items-center mtt-5">
                      <div className="botton-sizem">
                        HOẶC TẢI ỨNG DỤNG vÀ ĐĂNG KÝ
                        <div className="mt-2 d-flex justify-content-center">
                          <div className="mrt-2">
                            <a
                              className="hover-opacity"
                              href="https://apps.apple.com/us/app/shopdi/id1625578140"
                            >
                              <img src="/img/ios.png" alt="app-store" />
                            </a>
                          </div>
                          <div className="mt-2-mobile">
                            <a
                              className="hover-opacity"
                              href="https://play.google.com/store/apps/details?id=io.shopdi.app"
                            >
                              <img src="/img/android.png" alt="google-play" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Tabs.TabPane>
                </Tabs>
              </div>
              <div className="footer">
                <footer>
                  <div className="d-flex">
                    <div className="col-footer">
                      <div>
                        <a title="shopdi" className="footer__logo" href="/">
                          <img
                            style={{ maxHeight: 50 }}
                            src="/img/logo-white.png"
                            alt="shopdi"
                          />
                        </a>

                        <div className="title">Công ty cổ phần SHOPDI</div>
                        <div
                          className="font-size12"
                          dangerouslySetInnerHTML={{
                            __html:
                              "134 đường số 7, KDC Citiland Center Hills,<br/>P. 7, Q. GV, Tp. HCM</br> Mã số thuế 0317185857<br />Giấy Chứng nhận đăng ký Doanh nghiệp<br /> lần đầu ngày 07/03/2022 cấp bởi <br />Phòng Đăng ký kinh doanh,<br />Sở Kế hoạch và Đầu tư TP.HCM",
                          }}
                        />

                        <div className="font-size12">
                          Người đại diện pháp luật: Đỗ Thị Bích Diệp
                        </div>

                        <a className="font-size12" href="tel:19003395">
                          Số điện thoại: 19003395
                        </a>

                        <a
                          href="mailto: Support@shopdi.com.vn"
                          className="font-size12"
                        >
                          Email: Support@shopdi.com.vn
                        </a>

                        <a
                          className="item mtt-3 d-block mb-0"
                          target="_blank"
                          href="http://online.gov.vn/Home/WebDetails/98122?AspxAutoDetectCookieSupport=1"
                          rel="noreferrer"
                        >
                          <img
                            style={{ maxHeight: 49 }}
                            src="/img/certification.png"
                            alt="certification"
                          />
                        </a>
                      </div>
                    </div>

                    <div className="d-flex flex-column col-footer">
                      <div className="title text-uppercase">
                        KẾT NỐI VỚI CHÚNG TÔI
                      </div>
                      <div className="d-flex flex-wrap">
                        <div className="footer-socials-item">
                          <a
                            className="hover-opacity"
                            href="https://www.facebook.com/shopdi.official"
                          >
                            <img
                              src="/img/facebook.png"
                              alt="facebook"
                              style={{ maxWidth: "32px" }}
                            />
                          </a>
                        </div>
                        <div className="footer-socials-item">
                          <a
                            className="hover-opacity"
                            href="https://www.youtube.com/channel/UCUEJ-fUE4-ONf-LVdizZSTg"
                          >
                            <img
                              src="/img/youtube.png"
                              alt="youtube"
                              style={{ maxWidth: "32px" }}
                            />
                          </a>
                        </div>

                        <div className="footer-socials-item">
                          <a
                            className="hover-opacity"
                            href="https://t.me/ShopdiOfficial"
                          >
                            <img
                              src="/img/tele.png"
                              alt="telegram"
                              style={{ maxWidth: "32px" }}
                            />
                          </a>
                        </div>
                        <div className="footer-socials-item">
                          <a
                            className="hover-opacity"
                            href="https://twitter.com/shopdi_official"
                          >
                            <img
                              src="/img/twitter.png"
                              alt="twitter"
                              style={{ maxWidth: "32px" }}
                            />
                          </a>
                        </div>
                        <div className="footer-socials-item">
                          <a href="" className="hover-opacity">
                            <img
                              src="/img/zalo.png"
                              alt="zalo"
                              style={{ maxWidth: "32px" }}
                            />
                          </a>
                        </div>
                      </div>
                      <div className="d-flex flex-column col-footer mtt-5">
                        <p className="title text-uppercase">
                          Phương thức thanh toán
                        </p>
                        <img
                          src="/img/payment.png"
                          alt="payment-gate"
                          style={{ maxWidth: "252px" }}
                        />
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
          <div className="footer-bottom d-flex align-items-center justify-content-center">
            <p className="mb-0 small-caption ml-5">
              © 2022. Bản quyền Công Ty Cổ Phần Shopdi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
