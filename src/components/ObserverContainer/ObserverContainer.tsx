import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { GlobalState } from "../../reducer";
import { ScrollViewModel } from "../../viewmodels/ScrollViewModel";

export type ObserverContainerType = {
  children: any;
  className: string;
  onAnimateIn?: () => void;
  onAnimateOut?: () => void;
  rootMargin?: string;
};

export const ObserverContainer = ({
  children,
  className,
  onAnimateIn,
  onAnimateOut,
  rootMargin,
}: ObserverContainerType) => {
  const ref = useRef(null);
  const loaded = useSelector((state: GlobalState) => state.site.loaded);
  const [active, setActive] = useState<boolean>(false);
  const scrollVM = new ScrollViewModel();

  useEffect(() => {
    if (ref.current && loaded) {
      scrollVM.isInViewPortObserver(
        ref.current,
        callbackIn,
        callbackOut,
        rootMargin
      );
    }
  }, [loaded]);

  function callbackIn() {
    setActive(true);
    onAnimateIn?.();
  }

  function callbackOut() {
    setActive(false);
    onAnimateOut?.();
  }

  return (
    <div className={`${className} ${active ? "in" : "out"}`} ref={ref}>
      {children}
    </div>
  );
};
