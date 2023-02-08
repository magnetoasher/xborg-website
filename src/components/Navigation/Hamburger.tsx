export type HamburgerType = {
  active: boolean;
};

export const Hamburger = ({ active }: HamburgerType) => {
  return (
    <div
      className={`hamburger-menu row middle center ${
        active ? "open" : "close"
      }`}
    >
      <div className='hamburger-closed'>
        <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path d='M3 7H21' />
          <path d='M9.48999 12H21' />
          <path d='M3 12H5.99' />
          <path d='M3 17H21' />
        </svg>
      </div>
      <div className='hamburger-opened'>
        <svg viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path d='M7.75732 8.24219L16.2426 16.7275' />
          <path d='M7.75739 16.7275L16.2427 8.24219' />
        </svg>
      </div>
    </div>
  );
};
