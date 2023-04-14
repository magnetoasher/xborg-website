import React, { useEffect, useState } from "react";
import { AppViewModel } from "../../viewmodels/AppViewModel";
import { TagProps, Tag } from "../Tag";

export type SortGroupProps = {
  list: TagProps[];
  onTagChange?: (list: string[]) => void;
  title?: string;
  className?: string;
  displayAll?: boolean | number;
  singleSelect?: boolean;
};

export const SortGroup = ({
  title,
  list,
  className,
  displayAll,
  singleSelect = false,
  onTagChange,
}: SortGroupProps) => {
  const [selected, setSelected] = useState<string[]>([]);

  const appVM = new AppViewModel();

  useEffect(() => {
    onTagChange?.(selected);
  }, [selected]);

  return (
    <div className={`sort-group ${className ?? ""}`}>
      {title && <div className="sort-group-title">{title}</div>}
      <div className="list row middle">
        {displayAll && (
          <Tag
            value={""}
            label={`All ${
              typeof displayAll == "number" ? `(${displayAll})` : ""
            }`}
            active={selected.length == 0}
            onClick={() => setSelected([])}
          />
        )}

        {list.map((item, index) => (
          <Tag
            key={index}
            value={item.value}
            label={item.label}
            active={!!selected.find((x) => x == item.value)}
            onClick={() =>
              appVM.onTagChange(
                item.value,
                list,
                selected,
                setSelected,
                singleSelect
              )
            }
          />
        ))}
      </div>
    </div>
  );
};
