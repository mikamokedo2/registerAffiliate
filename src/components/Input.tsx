import React, { useState } from 'react';
import Icon from './Icon';

interface InputCustomProps {
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
  styles?: { [k: string]: string };
  error?: boolean;
  value?: string;
  name?: string;
  message?: string | false;
  disabled?: boolean;
  maxLength?: number;
  minLength?: number;
}
const InputCustom: React.FC<InputCustomProps> = ({
  placeholder,
  onChange,
  type,
  className,
  styles,
  error,
  value,
  name,
  message,
  disabled,
  maxLength,
  minLength,
}) => {
  const [showPass, setShowPass] = useState(false);
  return(
  <div>
    <div className='relative'>
    <input
      className={`input-text ${className} ${error ? 'error-input' : ''}`}
      placeholder={placeholder}
      onChange={onChange}
      style={styles}
      value={value}
      name={name}
      disabled={disabled}
      maxLength={maxLength}
      minLength={minLength}
      type={showPass ? type : 'password'}
    />
    <div
                className="icon-view-pass"
                onClick={() => setShowPass(!showPass)}
              >
                <Icon name={showPass ? 'eye' : 'eye-block'} />
              </div>
    </div>


              {message && error && <div className="text-red mt-2 font-size13">{message}</div>}
  </div>
)};

export default InputCustom;
