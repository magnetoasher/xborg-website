import React from "react";

type TextInputType = {
  id: string;
  onChange: (value: string) => void;
  value: string | number;
  label?: string;
  placeholder?: string;
  error?: string;
  className?: string;
};

export const TextInput = ({
  id,
  placeholder,
  value,
  error,
  onChange,
  className,
}: TextInputType) => {
  const onTextChange = (el: any) => {
    if (onChange) onChange(el.target.value);
  };
  return (
    <div
      className={`input-wrapper${error ? " has-error" : ""} ${className ?? ""}`}
    >
      <input
        onChange={onTextChange}
        id={`input-${id}`}
        placeholder={placeholder ?? ""}
        value={value}
        autoComplete="off"
        type="text"
      />
      {error && <div className="input-error">{error}</div>}
    </div>
  );
};
