import { BtnRed } from '@/components/Buttons';
import { ObserverContainer } from '@/components/ObserverContainer';
import { splitLines } from '@/modules/utils/utils';
import { useEffect, useRef } from 'react';

export const Launching = () => {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (ref.current) {
      splitLines(ref.current);
    }
  }, []);

  return (
    <div className="landing-launching">
      <div className="container flex column middle center">
        <ObserverContainer className="flex column">
          <div className="lexend-body-s">We are launching</div>
          <h2
            className="integralfc-h1 flex column reveal-from-bottom"
            ref={ref}
          >
            Launching in Q4 2023
          </h2>
        </ObserverContainer>

        <div className="flex column">
          <p className="lexend-body-sm l">
            Register interest now to stand a chance at earning a whitelist spot.
          </p>

          <p className="lexend-body-sm l interest">
            $7m of $XBG interest already
          </p>

          <div className="flex">
            <BtnRed label="Register Interest" href="" />
          </div>
        </div>
      </div>
    </div>
  );
};
