import React from "react";

type RadioInputType = {
  id: string;
  label?: string;
  placeholder?: string;
  value: boolean;
  error?: string;
  onChange: (value: string) => void;
};

export const RadioInput = (props: RadioInputType) => {
  const { id, label, placeholder, value, error, onChange } = props;
  const onTextChange = () => {
    if (onChange) onChange(id);
  };
  return (
    <div className={`input-wrapper${error ? " has-error" : ""}`}>
      <div className="input-container radio-container row">
        <label className="radio input-label row top" htmlFor={`input-${id}`}>
          <input
            onChange={onTextChange}
            id={`input-${id}`}
            placeholder={placeholder ?? ""}
            name={`input-radio-${id}`}
            type="radio"
            className="invisible"
            checked={value}
          />

          <div className="radio-mask"></div>

          {label && <span className="radio-label">{label}</span>}
        </label>
      </div>
      {error && <div className="input-error">{error}</div>}
    </div>
  );
};
