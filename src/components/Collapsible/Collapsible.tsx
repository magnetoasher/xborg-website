import React from "react";
import ReactCollapsible from "react-collapsible";

export type CollapsibleProps = {
  children: any;
  trigger: string;
  className?: string;
  tag?: string;
};

export const Collapsible = ({
  children,
  trigger,
  className,
  tag,
}: CollapsibleProps) => {
  return (
    <div className={`collapsible-container${tag ? " with-tag" : ""}`}>
      {tag && <div className="collapsible-tag">{tag}</div>}
      <ReactCollapsible
        trigger={trigger}
        className={`collapsible${className ? " " + className : ""}`}
      >
        <div className="lexend-body-s">{children}</div>
      </ReactCollapsible>
    </div>
  );
};
