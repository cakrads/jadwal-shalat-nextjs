import { ReactNode } from 'react';

interface Props {
  children?: ReactNode
}

export const ListItem = ({ children }: Props) => {
  return (
    <div>
      {children}
    </div>
  );
};

