import React from "react";

export type TagProps = {
  type?: TAG_TYPE;
  label: string;
  value: string;
  active?: boolean;
  onClick?: (val: string) => void;
  icon?: any;
};

export enum TAG_TYPE {
  SORT_GROUP = "sort-group",
  BRIGHT = "bright",
  GRAY = "gray",
}

export const Tag = ({
  type = TAG_TYPE.SORT_GROUP,
  label,
  value,
  active,
  onClick,
  icon,
}: TagProps) => {
  return (
    <a
      href=""
      className={`flex middle center tag-${type} ${
        active ? "active" : "inactive"
      }`}
      onClick={(e) => {
        e.preventDefault();
        onClick?.(value);
      }}
    >
      {icon}
      {label}
    </a>
  );
};
