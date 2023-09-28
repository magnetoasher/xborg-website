import React, { useEffect, useState } from 'react';

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
}: TextInputType) => {
  const [errorIn, setErrorIn] = useState<boolean>(false);

  const onTextChange = (el: any) => {
    if (onChange) onChange(el.target.value);
  };

  useEffect(() => {
    setTimeout(() => {
      setErrorIn(!!error);
    }, 300);
  }, [error]);

  return (
    <div
      className={`input-wrapper${error ? ' has-error' : ''} ${className ?? ''}`}
    >
      <div className="input-container flex column">
        {label && (
          <label
            className="input-label lexend-heading-l l"
            htmlFor={`input-${id}`}
          >
            {label}
          </label>
        )}
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
      </div>
      {error && (
        <div className={`input-error ${errorIn ? 'in' : 'out'}`}>{error}</div>
      )}
    </div>
  );
};
