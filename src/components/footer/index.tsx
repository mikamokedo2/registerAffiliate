import React from "react";
import "./index.scss";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="d-flex wrap-col-footer justify-content-around">
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
            {/* <StyledTextDescripton>
              Giấy CNĐKDN: 0317185857
              <br />
              Ngày cấp: 07/03/2022
            </StyledTextDescripton> */}
            {/* <div className="mt-2">
                <img
                  style={{ maxHeight: 49 }}
                  src="/img/certification.png"
                  alt="certification"
                />
              </div> */}
            <div className="font-size12">
              Người đại diện pháp luật: Đỗ Thị Bích Diệp
            </div>

            <a className="font-size12" href="tel:19003395">
              Số điện thoại: 19003395
            </a>

            <a href="mailto: Support@shopdi.com.vn" className="font-size12">
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

        {/* <div className="d-flex flex-column col-footer">
          <div className="title text-uppercase">Hỗ trợ khách hàng</div>

          <a href="tel:19003395" className="item">
            Hotline và Chat trực tuyến (24/7)
          </a>

          <a href="mailto:Support@shopdi.com.vn" className="item">
            Trung tâm hỗ trợ
          </a>

          <a className="item" href="/huong-dan">
            Hướng dẫn đặt hàng và thanh toán
          </a>

          <a href="/quy-che-hoat-dong" className="item">
            Quy chế hoạt động website
          </a>

          <a href="/dieu-khoan-dich-vu" className="item">
            Điều khoản sử dụng
          </a>
        </div>
        <div className="d-flex flex-column col-footer">
          <div className="title text-uppercase">Về Shopdi</div>

          <a href="/shopdi-xu" className="item">
            Chính sách đổi Shopdi xu
          </a>

          <a className="item" href="/chinh-sach-bao-mat">
            Chính sách bảo mật thanh toán
          </a>

          <a href="/chinh-sach-quyen-rieng-tu" className="item">
            Chính sách quyền riêng tư
          </a>

          <a href="/chinh-sach-doi-tra-hang" className="item">
            Chính sách kiểm hàng, đổi trả và hoàn tiền
          </a>
        </div> */}

        <div className="d-flex flex-column col-footer">
          {/* <div className="title text-uppercase">{t.downLoadApp}</div>
            <div className="mt-2 flex-column-mobile">
              <div className="mr-2">
                <Link
                  prefetch={false}
                  href="https://apps.apple.com/us/app/shopdi/id1625578140"
                >
                  <a className="hover-opacity">
                    <img src="/img/ios.png" alt="app-store" />
                  </a>
                </Link>
              </div>
              <div className="mt-2-mobile">
                <Link
                  prefetch={false}
                  href="https://play.google.com/store/apps/details?id=io.shopdi.app"
                >
                  <a className="hover-opacity">
                    <img src="/img/android.png" alt="google-play" />
                  </a>
                </Link>
              </div>
            </div> */}

          <div className="title text-uppercase">KẾT NỐI VỚI CHÚNG TÔI</div>
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
              <a className="hover-opacity" href="https://t.me/ShopdiOfficial">
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
            {/* <div className="footer-socials-item">
                <Link prefetch={false} href="https://shopdi.medium.com/">
                  <a className="hover-opacity">
                    <img src="/img/medium.png" alt="medium" />
                  </a>
                </Link>
              </div> */}
          </div>
        </div>
        {/* <div className="d-flex flex-column col-footer">
            <p className="title text-uppercase">Phương thức thanh toán</p>
            <img
              src="/img/payment.png"
              alt="payment-gate"
              style={{ maxWidth: '120px' }}
            />
          </div> */}
      </div>
      <div className="footer-bottom d-flex align-items-center">
        <p className="mb-0 small-caption ml-5">
          © 2022. Bản quyền Công Ty Cổ Phần Shopdi
        </p>
      </div>
    </footer>
  );
};
export default Footer;
