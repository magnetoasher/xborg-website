import { GlobalState } from '@/reducer';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export const LoaderPage = () => {
  const [state, setState] = useState<'loading' | 'out' | 'hidden'>('loading');

  const site = useSelector((state: GlobalState) => state.site);

  useEffect(() => {
    if (site.loaded) {
      setState('out');

      setTimeout(() => {
        setState('hidden');
      }, 500);
    }
  }, [site]);

  if (state === 'hidden') return null;

  return (
    <div className={`loader-page flex middle center ${state}`}>
      <svg
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="brand"
        preserveAspectRatio="none"
      >
        <path d="M9.38247 0V2.83234L6.73014 4.83048H2.65326L0 2.83234V0L4.69124 3.49281L9.38247 0Z" />
        <path d="M9.38247 9.99992V7.16758L6.73014 5.16943H2.65326L0 7.16758V9.99992L4.69124 6.50711L9.38247 9.99992Z" />
      </svg>
    </div>
  );
};
