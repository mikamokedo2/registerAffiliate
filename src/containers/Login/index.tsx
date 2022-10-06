import Icon from "../../components/Icon";
import LayoutWrapLogin from "../../components/wrapLogin";
import ConfirmPassword from "../../components/ConfirmPassword";
import { useFormik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { ReactFacebookLoginInfo } from "react-facebook-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import PhoneInput, { parsePhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import {
  confirmPinCodeCodeByPhone,
  confirmPinOTPByPhone,
  signupByPhone,
  registerSocialServices,
  registerSocialGetOtpServices,
  registerSocialConfirmOtpServices,
  loginBySocialServices,
  registerSocialActiveServices,
  loginWithUserPass,
} from "../../services/authencation";
import * as yup from "yup";
import "yup-phone";
import OTPForm from "../../components/OTPForm";
import Success from "../../components/Success";
import FormPopup from "../../components/FormPopup";
import { useNavigate, useSearchParams } from "react-router-dom";
import logo from "../../asset/logo.png";
import useKeyPress from "../../hook/Keypress";
import InputCustom from "../../components/Input";
import { ACCESS_TOKEN_KEY } from "../../utils/constant";
import request from "../../services/request";
import { AxiosRequestConfig } from "axios";
import Footer from "../../components/footer";
import LayoutHome from "../Home/LayoutHome";
// import { useAuth } from "../hook/AuthProvider";

const validationSchema = yup.object({
  phone: yup.string().phone('VN').required('Số điện thoại chưa đúng định dạng'),
  password: yup.string().required('Quên nhập mật khẩu'),
});

export const validationPhoneSchema = yup.object({
  phone: yup.string().phone('VN').required('Bạn chưa nhập số điện thoại'),
});

const LoginContainer = () => {
  const shortPhoneRef = useRef<any>();
  const router = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const onEnter = useKeyPress('Enter');
  const [addPhone, setAddPhone] = useState(false);
  const [addOtp, setAddOtp] = useState(false);
  const [pinCode, setPinCode] = useState('');
  const [isPinCodeValid, setIsPinCodeValid] = useState(true);
  const [accessToken, seAccessToken] = useState('');
  const [typeLogin, setTypeLogin] = useState(0);
  const [step, setStep] = useState(1);
  const [token, setToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');

  const loginSuccess = (token: string, refresh_token: string) => {
    localStorage.setItem('_u', token);
    localStorage.setItem('_uRefresh', refreshToken);
    request.interceptors.request.use(
      (config: AxiosRequestConfig<string>) => {
        const token = localStorage.getItem('_u');
        if (config && config.headers) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error: string) => {
        throw error;
      },
    );
    router("/dashboard");
  };
  const formikAddPhone = useFormik({
    initialValues: {
      phone: '',
      shortPhone: '+84',
    },
    validationSchema: validationPhoneSchema,
    onSubmit: async () => {
      setIsPinCodeValid(true);
      setPinCode('');
      setError('');
      const number = parsePhoneNumber(formikAddPhone.values.phone);
      const data = await registerSocialGetOtpServices({
        phone: formikAddPhone.values.phone,
        regionCode: number?.country ?? 'VN',
        access_token: accessToken,
        type: typeLogin,
      });
      if (data.data.status) {
        setAddPhone(false);
        setAddOtp(true);
      } else {
        setError(data.data.message);
      }
    },
  });

  const handlePinChange = (pinCode: string) => {
    setPinCode(pinCode);
    setIsPinCodeValid(true);
    setError('');
  };
  const requestOTp = async () => {
    setError('');
    const number = parsePhoneNumber(formikAddPhone.values.phone);
    const data = await registerSocialGetOtpServices({
      phone: formikAddPhone.values.phone,
      regionCode: number?.country ?? 'VN',
      access_token: accessToken,
      type: typeLogin,
    });
    if (data.data.status) {
      setAddPhone(false);
      setAddOtp(true);
    } else {
      setError(data.data.message);
    }
  };

  const checkPinCode = async () => {
    setError('');
    setIsLoading(true);
    const number = parsePhoneNumber(formikAddPhone.values.phone);
    const data = await registerSocialConfirmOtpServices({
      phone: formikAddPhone.values.phone,
      regionCode: number?.country ?? 'VN',
      access_token: accessToken,
      type: typeLogin,
      code: pinCode,
    });
    setIsLoading(false);
    if (data.data.status) {
      setAddOtp(false);
      setStep(2);
    } else {
      setError(data.data.message);
      setIsPinCodeValid(false);
    }
  };

  const formik = useFormik({
    validationSchema,
    initialValues: {
      phone: '',
      password: '',
      shortPhone: '+84',
    },
    onSubmit: async (values) => {
      const number = parsePhoneNumber(values.phone);
      setError('');
      setIsLoading(true);
      const data = await loginWithUserPass({
        username: values.phone,
        regionCode: number?.country ?? 'VN',
        password: values.password,
      });
      setIsLoading(false);
      if (data.data.status) {
        loginSuccess(data.data.data.token, data.data.data.refresh_token);
      } else {
        setError(data.data.message);
      }
    },
  });
  useEffect(() => {
    const request = async () => {
      const number = parsePhoneNumber(formik.values.phone);
      setError('');
      setIsLoading(true);
      const data = await loginWithUserPass({
        username: formik.values.phone,
        regionCode: number?.country ?? 'VN',
        password: formik.values.password,
      });
      setIsLoading(false);
      if (data.data.status) {
        loginSuccess(data.data.data.token, data.data.data.refresh_token);
      } else {
        setError(data.data.message);
      }
    };

    if (onEnter && !isLoading) {
      request();
    }
  }, [onEnter]);

  const onChangeShortPhoneInput = (e: any) => {
    if (!addPhone) {
      formik.setFieldValue('shortPhone', e);
    } else {
      formikAddPhone.setFieldValue('shortPhone', e);
    }
  };
  const onChangePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!addPhone) {
      formik.setFieldValue('phone', `${formik.values.shortPhone}${value}`);
    } else {
      formikAddPhone.setFieldValue(
        'phone',
        `${formik.values.shortPhone}${value}`,
      );
    }
  };

  const responseFacebook = async (response: ReactFacebookLoginInfo) => {
    if (!response.accessToken) {
      return;
    }
    setError('');
    setIsLoading(true);
    try {
      const data = await loginBySocialServices({
        access_token: response.accessToken,
        type: 1,
      });
      if (data.data.status) {
        loginSuccess(data.data.data.token, data.data.data.refresh_token);
      } else {
        seAccessToken(response.accessToken);
        setTypeLogin(1);
        switch (data.data.data.type) {
          case 1:
            setAddPhone(true);
            break;
          case 2: {
            loginSuccess(data.data.data.token, data.data.data.refresh_token);
            break;
          }

          case 3:
            setError(data.data.message);
            break;

          default:
            break;
        }
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const responseGoogle = async (response: any) => {
    if (response.accessToken) {
      setError('');
      setIsLoading(true);
      try {
        const data = await loginBySocialServices({
          access_token: response.accessToken,
          type: 2,
        });
        if (data.data.status) {
          loginSuccess(data.data.data.token, data.data.data.refresh_token);
        } else {
          seAccessToken(response.accessToken);
          setTypeLogin(2);
          switch (data.data.data.type) {
            case 1:
              setAddPhone(true);
              break;
            case 2: {
              loginSuccess(data.data.data.token, data.data.data.refresh_token);
              break;
            }

            case 3:
              setError(data.data.message);
              break;

            default:
              break;
          }
        }

        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    if (shortPhoneRef.current) {
      shortPhoneRef.current.disabled = true;
    }
  }, []);

  const onCreatePinCode = async (code: string) => {
    setError('');
    setIsLoading(true);
    const number = parsePhoneNumber(formikAddPhone.values.phone);
    const data = await registerSocialActiveServices({
      access_token: accessToken,
      type: typeLogin,
      phone: formikAddPhone.values.phone,
      regionCode: number?.country ?? 'VN',
      code: pinCode,
      password: code,
    });
    setIsLoading(false);
    if (data.data.status) {
      setStep(3);
      setToken(data.data.data.token);
      setRefreshToken(data.data.data.refresh_token);
    } else {
      setError(data.data.message);
    }
  };
  const onBack = () => {
    loginSuccess(token, refreshToken);
  };

  return (
    <LayoutHome>
    <LayoutWrapLogin>
      {addPhone && (
        <FormPopup
          button="Xác nhận"
          onCancel={() => {
            setAddPhone(false);
          }}
          onConfirm={() => formikAddPhone.handleSubmit()}
          title="Thêm số điện thoại"
          showButton
          width={600}
          zIndex={90}
          isLoading={isLoading}
        >
          <div>
            <div className="relative">
              <div
                className={`input-phone ${
                  formikAddPhone.touched.phone &&
                  Boolean(formikAddPhone.errors.phone)
                    ? 'error-input'
                    : ''
                }`}
              >
                <PhoneInput
                  defaultCountry="VN"
                  value={formikAddPhone.values.shortPhone}
                  onChange={onChangeShortPhoneInput}
                  international
                  name="shortPhone"
                  ref={shortPhoneRef}
                />
                <input
                  name="phone"
                  placeholder="Nhập số điện thoại"
                  className="input-short"
                  onChange={onChangePhoneInput}
                />
              </div>
              {formikAddPhone.touched.phone &&
                Boolean(formikAddPhone.errors.phone) && (
                  <div className="text-red mt-2 font-size13">
                    {formikAddPhone.values.phone === ''
                      ? "Quên nhập số điện thoại"
                      : "Sai định dạng"}
                  </div>
                )}
            </div>
          </div>
          {error && <div className="text-red mt-2 font-size13">{error}</div>}
        </FormPopup>
      )}

      {addOtp && (
        <FormPopup
          button="Xác nhận"
          onCancel={() => {
            setAddOtp(false);
          }}
          onConfirm={() => null}
          title="Thêm số điện thoại"
          showButton={false}
          width={600}
          zIndex={90}
        >
          <OTPForm
            phone={formikAddPhone.values.phone}
            isEmail={false}
            isPinCodeValid={isPinCodeValid}
            pinCode={pinCode}
            handlePinChange={handlePinChange}
            checkPinCode={checkPinCode}
            requestNewCode={requestOTp}
            isLoading={isLoading}
            error={error}
          />
        </FormPopup>
      )}
      <div className="mobile-view">
      <div className="title heading-2">Đăng nhập</div>
      <div className="login-wrap" style={{ minHeight: '400px' }}>
        {step === 1 && (
          <div>
            <div className="mb-3 phone-input-main">
              <div
                className={`input-phone ${
                  formik.touched.phone && Boolean(formik.errors.phone)
                    ? 'error-input'
                    : ''
                }`}
              >
                <PhoneInput
                  defaultCountry="VN"
                  value={formik.values.shortPhone}
                  onChange={onChangeShortPhoneInput}
                  international
                  name="shortPhone"
                  ref={shortPhoneRef}
                />
                <input
                  name="Số điện thoại"
                  placeholder="Nhập số điện thoại"
                  className="input-short"
                  onChange={onChangePhoneInput}
                />
              </div>
              {formik.touched.phone && Boolean(formik.errors.phone) && (
                <div className="text-red mt-2 font-size13">
                  {formik.values.phone === ''
                    ? "Quên nhập số điện thoại"
                    : "Sai định dạng"}
                </div>
              )}
            </div>

            <div className="password-field">
              <InputCustom
                className="w-100 font-size16 input-login input-login-password"
                placeholder="Nhập mật khẩu"
                onChange={formik.handleChange}
                name="password"
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                message={formik.touched.password && formik.errors.password}
              />
            </div>
            <div
              className={`d-flex ${
                error ? 'justify-content-between' : 'justify-content-end'
              }`}
            >
              {error && (
                <div className="text-red mt-3 font-size13">{error}</div>
              )}
            </div>

            <button
              type="button"
              className="button button-primary size-l w-100 mtt-5"
              onClick={() => formik.handleSubmit()}
              disabled={isLoading}
            >
              {isLoading ? "Đang xử lý" : "Đăng nhập"}
            </button>
            {/* <div className="d-flex mt-5 justify-content-center">
              <div className="text-or">Đăng nhập bằng mạng xã hội</div>
            </div> */}
            {/* <div className="d-flex justify-content-center">
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_ID ?? ''}
                render={(renderProps) => (
                  <button
                    className="button-social google"
                    type="button"
                    onClick={renderProps.onClick}
                    disabled={isLoading}
                  >
                    <Icon name="google-icon" />
                    &nbsp; Google
                  </button>
                )}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy="single_host_origin"
              />

              <FacebookLogin
                appId={process.env.REACT_APP_FACEBOOK_ID ?? ''}
                callback={responseFacebook}
                render={(renderProps) => (
                  <button
                    className="button-social google"
                    type="button"
                    onClick={renderProps.onClick}
                    disabled={isLoading}
                  >
                    <Icon name="facebook-icon" />
                    &nbsp; Facebook
                  </button>
                )}
                // scope="pages_show_list,pages_messaging,pages_manage_metadata,pages_read_engagement"
                version="3.3"
                cookie
                xfbml
              />
            </div> */}
            <div className="mt-5 text-center mb-5">
              <span className="text-white">Bạn chưa có tài khoản</span>&nbsp;
   
                <a className="text-blue" href="/">
                  <span>Đăng ký</span>
                </a>
           
            </div>
          </div>
        )}
        {step === 2 && (
          <ConfirmPassword
            onSubmit={onCreatePinCode}
            type="register"
            isLoading={isLoading}
            error={error}
          />
        )}
        {step === 3 && <Success isRegister onBack={onBack} />}
      </div>
      </div>
    </LayoutWrapLogin>
    </LayoutHome>
  );
};

export default LoginContainer;