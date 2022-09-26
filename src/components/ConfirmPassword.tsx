import Icon from '../components/Icon';
import InputCustom from '../components/Input';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';

const validationSchema = yup.object({
  password: yup
    .string()
    .required('Bạn quên nhập mật khẩu')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()-=+[\];':",.<>`~/])(?=.{8,})/,
      'Mật khẩu it nhất 8 ký tự bao gồm chữ in hoa, in thường , số và ký tự đặc biệt',
    ),
  confirmPassword: yup
    .string()
    .required('Bạn quên xác nhận mật khẩu')
    .oneOf([yup.ref('password'), null], 'Mật khẩu không trùng khớp'),
});

interface ConfirmPassword {
  onSubmit: (password: string) => void;
  type: 'pin' | 'password' | 'register';
  isLoading?: boolean;
  error?: string;
}

const ConfirmPassword: React.FC<ConfirmPassword> = ({
  onSubmit,
  type,
  isLoading,
  error,
}) => {
  const [showPass, setShowPass] = useState(false);



  const formik = useFormik({
    validationSchema,
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      onSubmit(values.password);
    },
  });
  return (
    <div>
      {type === 'pin' && (
        <>
          <div className="d-flex justify-content-center mb-4">
            <img src="/svg/protect.svg" alt="protect" />
          </div>
          <div className="mb-5 text-center">
            Xin vui lòng thiết lập mã PIN để bảo vệ tài khoản của bạn
          </div>
        </>
      )}
      {/* {type === 'password' && <div className="mb-5">Vui lòng tạo mật khẩu tài khoản</div>} */}
      <div
        className="text-center"
        dangerouslySetInnerHTML={{ __html: "Hãy chọn mật khẩu để đăng nhập</br> trước khi hoàn tất"}}
      />
      <div className="password-field">
        <InputCustom
          className="w-100 font-size16 input-login"
          type={showPass ? 'text' : 'password'}
          placeholder="Nhập mật khẩu"
          onChange={formik.handleChange}
          name="password"
          error={formik.touched.password && Boolean(formik.errors.password)}
          message={formik.touched.password && formik.errors.password}
        />
        <div className="icon-view-pass" onClick={() => setShowPass(!showPass)}>
          <Icon name={showPass ? 'eye' : 'eye-block'} />
        </div>
      </div>
      <div className="password-field">
        <InputCustom
          className="w-100 font-size16 input-login"
          type={showPass ? 'text' : 'password'}
          placeholder="Nhập lại mật khẩu"
          onChange={formik.handleChange}
          name="confirmPassword"
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
          message={
            formik.touched.confirmPassword && formik.errors.confirmPassword
          }
        />
        <div className="icon-view-pass" onClick={() => setShowPass(!showPass)}>
          <Icon name={showPass ? 'eye' : 'eye-block'} />
        </div>
      </div>

      {error && (
        <div className="text-red mt-2 font-size13 text-center">{error}</div>
      )}

      <button
        type="button"
        className="button button-primary size-l w-100 mt-5"
        onClick={() => formik.handleSubmit()}
        disabled={isLoading}
      >
        {isLoading ? 'Đang xử lý' : "Xác nhận"}
      </button>
    </div>
  );
};

export default ConfirmPassword;
