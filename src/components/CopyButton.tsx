import React, { useState, useEffect } from 'react';
import Icon from './Icon';

interface ButtonCopyProps {
  element: React.RefObject<HTMLDivElement>;
  black?:boolean;
}

const ButtonCopy: React.FC<ButtonCopyProps> = ({ element,black }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopied = () => {
    if (element.current) {
      const text = element.current.innerText;
      navigator.clipboard.writeText(text);
      setCopySuccess(true);
    }
  };

  useEffect(() => {
    let timeOut: any = 0;
    if (copySuccess) {
      timeOut = setTimeout(() => {
        setCopySuccess(false);
      }, 5000);
    }
    return () => clearTimeout(timeOut);
  }, [copySuccess]);

  return (
    <div>
      {copySuccess ? (
        <div>
          <Icon name="check-circle" size={16} />
          <span className="heading-06 ml-1">Sao chép</span>
        </div>
      ) : (
        <div className="cursor-pointer" onClick={handleCopied}>
          <Icon name={black ? "copy-black" : "copy-blue"} />
        </div>
      )}
    </div>
  );
};

export default ButtonCopy;
