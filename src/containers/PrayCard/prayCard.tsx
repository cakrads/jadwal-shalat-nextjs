import React from 'react';
import PrayCard from '@components/organism/PrayCard';
import useAction from './hooks/useAction';

const Component = (): JSX.Element => {

  const { data } = useAction();

  return (
    <PrayCard {...data}/>
  );
};

export default Component;
