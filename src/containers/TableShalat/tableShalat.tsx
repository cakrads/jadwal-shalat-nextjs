import React from 'react';
import useAction from './hooks/useAction';
import TableShalat from '@components/organism/TableShalat';

const Component = (): JSX.Element => {

  const { _changeIndex, data, } = useAction();

  const generateProps = {
    ...data,
    onChangeIndex: _changeIndex
  };

  return (
    <TableShalat {...generateProps} />
  );
};

export default Component;
