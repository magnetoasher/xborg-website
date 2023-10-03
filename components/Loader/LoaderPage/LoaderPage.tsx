import { useSelector } from 'react-redux';

export const LoaderPage = () => {
  return (
    <div className="loader-page flex middle center">
      <svg
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="brand"
      >
        <path d="M9.38247 0V2.83234L6.73014 4.83048H2.65326L0 2.83234V0L4.69124 3.49281L9.38247 0Z" />
        <path d="M9.38247 9.99992V7.16758L6.73014 5.16943H2.65326L0 7.16758V9.99992L4.69124 6.50711L9.38247 9.99992Z" />
      </svg>
    </div>
  );
};