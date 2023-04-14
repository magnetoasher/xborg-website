import { useState, useRef, useEffect } from "react";
import SimpleBar from "simplebar-react";
import { ParallaxProvider } from "react-scroll-parallax";
import { ParallaxProviderProps } from "react-scroll-parallax/dist/components/ParallaxProvider/types";

export type ScrollWrapperType = {
  children: any;
  transparentNavbar?: boolean;
};

export const ScrollWrapper = ({
  children,
  transparentNavbar = true,
}: ScrollWrapperType) => {
  const [scrollWrap, setScrollWrap] = useState<HTMLElement | undefined>(
    undefined
  );

  const parentRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<SimpleBar>(null);

  useEffect(() => {
    const parent = parentRef.current;

    if (parent?.clientHeight && scrollRef) {
      const bar = scrollRef?.current;
      const wrapper = bar?.getScrollElement() as HTMLElement;

      setScrollWrap(wrapper);

      const wheeled = (event: any) => {
        event.preventDefault();

        wrapper.scrollTop += event.deltaY;
        wrapper.scrollLeft += event.deltaX;
      };

      let os = navigator.userAgent;

      if (os.search("Mac") !== -1) {
        wrapper.addEventListener("wheel", wheeled, {
          passive: false,
          capture: true,
        });
      }
      // actual render code is in the `scrolled` handler because
      // there are other wheel events in the code that adjust the scroll position
      wrapper.addEventListener("scroll", () => {
        // Create the event
        const event = new CustomEvent("simplebar-scroll", {
          detail: wrapper,
        });

        // Dispatch/Trigger/Fire the event
        window.dispatchEvent(event);
      });
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
