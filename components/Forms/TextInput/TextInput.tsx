import React, { useEffect, useState, useRef } from 'react';

export type TextInputType = {
  id: string;
  onChange: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  value: string | number;
  label?: string;
  placeholder?: string;
  error?: string;
  className?: string;
  rightBtn?: React.ReactNode;
};

export const TextInput = ({
  id,
  label,
  placeholder,
  value,
  error,
  onChange,
  onFocus,
  onBlur,
  className,
  rightBtn,
}: TextInputType) => {
  const [errorIn, setErrorIn] = useState<boolean>(false);
  const btnRef = useRef<any>(null);

  const onTextChange = (el: any) => {
    if (onChange) onChange(el.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      setErrorIn(!!error);
    }, 300);
  }, [error]);

  useEffect(() => {
    if (btnRef.current) {
      const inputElement = document.getElementById(`input-${id}`);
      if (inputElement) {
        inputElement.style.paddingRight = `${
          btnRef.current.clientWidth + 12
        }px`;
      }
    }
  }, [btnRef.current, id]);

  return (
    <div
      className={`input-wrapper ${error ? ' has-error' : ''} ${
        className ?? ''
      }`}
    >
      {label && (
        <label className="input-label lexend-body-md l" htmlFor={`input-${id}`}>
          {label}
        </label>
      )}
      <div className="input-box">
        <input
          onChange={onTextChange}
          onFocus={onFocus}
          onBlur={onBlur}
          id={`input-${id}`}
          placeholder={placeholder ?? ''}
          value={value}
          autoComplete="off"
          type="text"
        />
        {rightBtn && (
          <div ref={btnRef} className="right-btn">
            {rightBtn}
          </div>
        )}
      </div>
      {error && (
        <div className={`input-error ${errorIn ? 'in' : 'out'}`}>{error}</div>
      )}
    </div>
  );
};
