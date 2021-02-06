import React from 'react';
import useAction from './hooks/useAction';
import PrayTable from '@components/organism/PrayTable';

const Component = (): JSX.Element => {

  const generateProps = useAction();

  return (
    <PrayTable {...generateProps} />
  );
};

export default Component;
