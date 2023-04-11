import { useEffect, useRef } from "react";
import { TextManipulation } from "../../viewmodels/textManipulation";
import { ObserverContainer } from "../../components";
import { sleep } from "../../helpers/time";

export type SectionDescriptionType = {
  children: any;
  className: string;
  onAnimateIn?: () => void;
  onAnimateFinish?: (el: HTMLElement) => void;
  keep?: boolean;
};

export const SectionDescription = ({
  children,
  className,
  onAnimateIn,
  onAnimateFinish,
  keep = false,
}: SectionDescriptionType) => {
  let innerHTMLClone = "";
  const ref = useRef(null);

  const textVM = new TextManipulation();

  useEffect(() => {
    const desc = ref.current as unknown as HTMLElement;

    if (keep) textVM.breakText(desc);
  }, []);

  return (
    <ObserverContainer
      onAnimateIn={async () => {
        const desc = ref.current as unknown as HTMLElement;
        innerHTMLClone = desc?.innerHTML ?? "";

        if (desc) {
          onAnimateIn?.();
          if (!keep) textVM.breakText(desc);
          await sleep(100);
          await textVM.fromBottom(desc, 8);
          if (!keep) desc.innerHTML = innerHTMLClone;
          await sleep(100);

          onAnimateFinish?.(desc);
        }
      }}
      onAnimateOut={() => {
        const desc = ref.current;
        if (desc) {
          textVM.hideText(desc);
        }
      }}
      className={"section-description"}
    >
      <p className={`${className} reveal-from-bottom`} ref={ref}>
        {children}
      </p>
    </ObserverContainer>
  );
};
