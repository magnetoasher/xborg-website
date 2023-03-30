import React, { useEffect, useRef } from "react";
import { TextManipulation } from "../../viewmodels/textManipulation";
import { ObserverContainer } from "../../components";

export type SectionDescriptionType = {
  children: any;
  className: string;
  onAnimateIn?: () => void;
};

export const SectionDescription = ({
  children,
  className,
  onAnimateIn,
}: SectionDescriptionType) => {
  const ref = useRef(null);

  const textVM = new TextManipulation();

  useEffect(() => {
    if (ref.current) textVM.breakText(ref.current);
  }, []);

  return (
    <ObserverContainer
      onAnimateIn={() => {
        const desc = ref.current;

        if (desc) {
          setTimeout(() => {
            textVM.fromBottom(desc, 8);
          }, 100);
        }

        onAnimateIn?.();
      }}
      onAnimateOut={() => {
        const desc = ref.current;
        if (desc) {
          textVM.hideText(desc);
        }
      }}
      className={""}
    >
      <p className={`${className} reveal-from-bottom`} ref={ref}>
        {children}
      </p>
    </ObserverContainer>
  );
};
