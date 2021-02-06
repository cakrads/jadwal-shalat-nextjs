import React from 'react';
import CardShalat from '@components/organism/PrayCard';
import useAction from './hooks/useAction';

const Component = (): JSX.Element => {

  const { data } = useAction();

  return (
    <CardShalat {...data}/>
  );
};

export default Component;
