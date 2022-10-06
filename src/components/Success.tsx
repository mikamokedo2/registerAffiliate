import Icon from '../components/Icon';
import React from 'react';
import DownloadApp from "./downloadApp";
interface SuccessProps {
  isRegister: boolean;
  onBack: () => void;
  isLoading?:boolean;
}

const Success: React.FC<SuccessProps> = ({ isRegister, onBack,isLoading }) => {


  return (
    <div className="d-flex justify-content-center align-items-center flex-column">
      <div className="mb-4">
        <Icon name="regis-success" />
      </div>
      <div className="text-center mb-3 heading-01">
        <br /> {isRegister ? "Đăng ký thành công" : "Đổi mật khẩu thành công"}
      </div>
      {/* {isRegister ? (
        <div className="text-center">Đăng nhập để nhận ưu đãi dành cho thành viên mới</div>
      ) : (
        <div className="text-center">Việc thay đổi mật khẩu của bạn sẽ khiến bạn đăng xuất khỏi tất cả các thiết bị. Hãy nhập lại mật khẩu mới.</div>
      )} */}
      <div className="text-center">Bạn có thể dùng tài khoản này để<br/> đăng nhập vào trang quản lý</div>
      <button type="button" className="button button-primary size-m w-100 mt-3 mb-3" onClick={onBack} disabled={isLoading}>
        {/* {isRegister ? 'Tìm hiểu SHOPDI ngay!' : 'Về trang chủ Shopdi'} */}
        {isLoading ? "Đang xử lý" : "Đăng nhập"}
      </button>

      <div className="text-center mtt-3">hoặc tải và sử dụng App Shopdi</div>
      <div className="mt3-5">
        <DownloadApp title=""/>
      </div>

    </div>
  );
};

export default Success;
