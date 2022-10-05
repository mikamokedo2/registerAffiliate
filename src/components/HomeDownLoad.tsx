import React from 'react'
import { QRCodeSVG } from 'qrcode.react';

const HomeDownLoad = () => {
  return (
    <div className='wrap-have-account'>
    <div className='title-downapp'>Nếu bạn đã tải ứng dụng</div>
    <div className='qr-code'>
    <QRCodeSVG value={"123"} />
    </div>
    <div className='heading-01 mtt-5'>Mở app và quét QR</div>
    <div className='mtt-5'>
        <div className='botton-sizem'>HOẶC TẢI ỨNG DỤNG</div>
           
            <div className="mt-2 flex-column-mobile">
              <div className="mrt-2">
   
                  <a className="hover-opacity" href="https://apps.apple.com/us/app/shopdi/id1625578140">
                    <img src="/img/ios.png" alt="app-store" />
                  </a>
             
              </div>
              <div className="mt-2-mobile">

                  <a className="hover-opacity" href="https://play.google.com/store/apps/details?id=io.shopdi.app">
                    <img src="/img/android.png" alt="google-play" />
                  </a>
            
              </div>
            </div>
    </div>
    </div>
  )
}

export default HomeDownLoad
