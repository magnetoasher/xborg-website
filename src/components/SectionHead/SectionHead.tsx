import { useRef } from "react";
import { TextManipulation } from "../../viewmodels/textManipulation";
import { ObserverContainer } from "../ObserverContainer";

export type SectionHeadProps = {
  children?: any;
  title: any;
  beforeTitle?: string;
  logo?: any;
  smallerHeading?: boolean;
};

export const SectionHead = ({
  children,
  title,
  beforeTitle,
  logo,
  smallerHeading,
}: SectionHeadProps) => {
  const sectionTop = useRef(null);

  const textVM = new TextManipulation();
  return (
    <ObserverContainer
      className="section-head-container"
      onAnimateIn={() => {
        if (sectionTop) textVM.scrambleText(sectionTop);
      }}
    >
      <div className="row section-head">
        <div className="section-border" />
        <div className="row column expand">
          {logo && (
            <div className="logo-icon">
              <img src={logo} alt="" />
            </div>
          )}
          {beforeTitle && (
            <div className="section-head-top lexend-body-xl" ref={sectionTop}>
              {beforeTitle}
            </div>
          )}
          {smallerHeading ? (
            <h2 className="section-head-title vista-heading">{title}</h2>
          ) : (
            <h1 className="section-head-title vista-heading">{title}</h1>
          )}
        </div>
      </div>
      {children ?? ""}
    </ObserverContainer>
  );
};
