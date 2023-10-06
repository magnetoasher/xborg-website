import { useEffect, useRef, useState } from 'react';

import { isInViewPortObserver } from '@/modules/utils';

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
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current)
      isInViewPortObserver(ref.current, callbackIn, callbackOut, rootMargin);
  }, []);

  function callbackIn() {
    setActive(true);
    onAnimateIn?.();
  }

  function callbackOut() {
    // setActive(false);
    // onAnimateOut?.();
  }

  return (
    <div className={`${className} ${active ? 'in' : 'out'}`} ref={ref}>
      {children}
    </div>
  );
};
