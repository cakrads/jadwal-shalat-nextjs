import { ReactNode } from 'react';

interface Props {
  children?: ReactNode,
  className?: string,
}

export const H1 = ({ children, className }: Props) => {
  return (
    <h1 className={`text-3xl font-extrabold mb-2 ${className}`}>
      {children}
    </h1>
  );
};

export const H2 = ({ children, className }: Props) => {
  return (
    <h2 className={`text-2xl font-extrabold mb-2 ${className}`}>
      {children}
    </h2>
  );
};

export const H3 = ({ children, className }: Props) => {
  return (
    <h3 className={`text-xl font-extrabold mb-2 ${className}`}>
      {children}
    </h3>
  );
};

export const FormLabel = ({ children, className }: Props) => {
  return (
    <label className={`text-sm block font-bold mb-1 ${className}`}>
      {children}
    </label>
  );
};
