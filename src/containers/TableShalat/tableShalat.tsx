import React from 'react';
import useAction from './hooks/useAction';
import TableShalat from '@components/organism/TableShalat';

const Component = (): JSX.Element => {

  const generateProps = useAction();

  return (
    <TableShalat {...generateProps} />
  );
};

export default Component;
