import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import "./index.scss";
import { useMediaQuery } from "react-responsive";


interface DownloadAppProps{
  title:string;

}

const DownloadApp:React.FC<DownloadAppProps> = ({title}) => {
  const [link, setLink] = useState(1);
  const isMobile = useMediaQuery({
    query: "(max-width: 991px)",
  });

  return (
    <div className="d-flex flex-column align-items-center" id="down-app">
      <div className="botton-sizem">{title}</div>
      {!isMobile ? <>
            <div className={`d-flex justify-content-center ${title ? "mt-2" : ""}`}>
            <div
              className={`mrt-2 button-download ${link === 1 ? "active" : ""}`}
              onClick={() => setLink(1)}
            >
              <img src="/img/ios.png" alt="app-store" />
            </div>
            <div
              className={`mt-2-mobile button-download ${link === 2 ? "active" : ""}`}
              onClick={() => setLink(2)}
            >
              <img src="/img/android.png" alt="google-play" />
            </div>
          </div>
          <div className="mtt-4 qr-code">
            <QRCodeSVG
              value={
                link === 1
                  ? "https://apps.apple.com/us/app/shopdi/id1625578140"
                  : "https://play.google.com/store/apps/details?id=io.shopdi.app"
              }
            />
          </div>
      </> : 
      <>
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
    </>
      }

    </div>
  );
};

export default DownloadApp;
