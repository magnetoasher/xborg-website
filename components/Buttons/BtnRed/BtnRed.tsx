import Link from 'next/link';

import { LoadingSpinner } from '@/components/Loader';

export const BtnRed = ({
  label,
  href,
  icon,
  className = '',
  target,
  onClick,
  disabled,
  loading,
  suffix,
  children,
}: any) => {
  return (
    <Link
      href={href}
      target={target}
      className={`btn btn-red flex middle center ${className}${
        disabled ? ' disabled' : ''
      }
      ${loading ? ' loading' : ''}`}
      onClick={onClick}
    >
      {loading && <LoadingSpinner />}
      {children ?? (
        <span className="flex middle center expand">
          {icon}
          {label}
          {suffix}
        </span>
      )}
    </Link>
  );
};
