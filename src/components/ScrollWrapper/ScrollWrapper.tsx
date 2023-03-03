import { useState, useRef, useEffect } from "react";
import SimpleBar from "simplebar-react";
import { ParallaxProvider } from "react-scroll-parallax";
import { ParallaxProviderProps } from "react-scroll-parallax/dist/components/ParallaxProvider/types";
import { ScrollViewModel } from "../../viewmodels/ScrollViewModel";

export type ScrollWrapperType = {
  children: any;
  overrideScroll?: boolean;
  transparentNavbar?: boolean;
};

export const ScrollWrapper = ({
  children,
  overrideScroll = true,
  transparentNavbar = true,
}: ScrollWrapperType) => {
  const [scrollWrap, setScrollWrap] = useState<HTMLElement | undefined>(
    undefined
  );

  const parentRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<SimpleBar>(null);

  const scrollVM = new ScrollViewModel();

  useEffect(() => {
    const parent = parentRef.current;

    if (parent?.clientHeight && scrollRef) {
      const bar = scrollRef?.current;
      const wrapper = bar?.getScrollElement() as HTMLElement;

      setScrollWrap(wrapper);

      // if (overrideScroll) scrollVM.rewriteDefaultScrolling();
    }
  }, []);

  const parallaxProviderProps: ParallaxProviderProps = {
    scrollContainer: scrollWrap,
    scrollAxis: "vertical",
  };

  return (
    <div
      className={`simplebar-container expand row${
        !transparentNavbar ? " navbar-bg" : ""
      }`}
      ref={parentRef}
    >
      <SimpleBar className="simplebar-init expand" ref={scrollRef}>
        {scrollWrap && (
          <>
            <ParallaxProvider {...parallaxProviderProps}>
              {children}
            </ParallaxProvider>
          </>
        )}
      </SimpleBar>
    </div>
  );
};
