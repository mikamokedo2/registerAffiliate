import React from "react";
import { QRCodeSVG } from "qrcode.react";
import { useMediaQuery } from "react-responsive";
import DownloadApp from "./downloadApp";

const HomeDownLoad = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 991px)",
  });

  return (
    <div className="wrap-have-account">
      <div className="title-downapp">Nếu bạn đã tải ứng dụng</div>
      <div className="qr-code">
        <QRCodeSVG value={"123"} />
      </div>
      <div className="heading-01 mtt-5">Mở app và quét QR</div>
      {isMobile && (
        <button
          type="button"
          className="button button-primary size-m w-100 mtt-5"
        >
          Mở App nhận ngay ưu đãi
        </button>
      )}

      <div className="mtt-5">
        <DownloadApp title="HOẶC TẢI ỨNG DỤNG"/>
      </div>
    </div>
  );
};

export default HomeDownLoad;
