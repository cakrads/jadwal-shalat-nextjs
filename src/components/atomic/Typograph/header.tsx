import { ReactNode } from 'react';

interface Props {
  children?: ReactNode
}

export const H1 = ({ children }: Props) => {
  return (
    <h1 className="text-3xl font-extrabold">
      {children}
    </h1>
  );
};

export const H2 = ({ children }: Props) => {
  return (
    <h2 className="text-2xl font-extrabold">
      {children}
    </h2>
  );
};

export const H3 = ({ children }: Props) => {
  return (
    <h3 className="text-xl font-extrabold">
      {children}
    </h3>
  );
};
