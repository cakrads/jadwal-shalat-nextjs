import React from 'react';
import useAction from './hooks/useAction';
import { H3 } from '@components/atomic/Typograph';
import { Select } from '@components/molecules/Form';
import Button from '@components/atomic/Button';
import CALC_MEHTHOD from '@database/calcution-method.json';

const Component = (): JSX.Element => {

  const {
    calcMethod,
    setCalcMethod,
    onSubmit,
  } = useAction();

  return (
    <form onSubmit={onSubmit}>
      <H3> Pengaturan </H3>
      <Select
        formValue={calcMethod}
        label={'Metode Hitung Yang Digunakan: '}
        name="calcMethod"
        onChange={setCalcMethod}
        options={CALC_MEHTHOD}
      />
      <Button block>SIMPAN</Button>
    </form>
  );
};

export default Component;
