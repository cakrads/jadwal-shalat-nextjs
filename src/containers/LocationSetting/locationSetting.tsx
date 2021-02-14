import React from 'react';
import useAction from './hooks/useAction';
import { H3 } from '@components/atomic/Typograph';
import { Select } from '@components/molecules/Form';
import Button from '@components/atomic/Button';

const Component = (): JSX.Element => {

  const {
    _autoFindLocation,
    countyOptions,
    isLoading,
    newCity,
    setNewCity,
    onSubmit,
  } = useAction();

  const _renderAutoFind = (
    <div>
      <Button block isLoading={isLoading} onClick={_autoFindLocation} size="sm">
        TEMUKAN LOKASI SAYA
      </Button>
    </div>
  );

  const _renderManualFind = (
    <form onSubmit={onSubmit}>
      <Select
        formValue={newCity}
        label={'Pilih Lokasi Manual: '}
        name="city"
        onChange={setNewCity}
        options={countyOptions}
      />
      <Button block>GANTI LOKASI</Button>
    </form>
  );

  return (
    <>
      <H3> Pilih Lokasi </H3>
      {_renderAutoFind}
      <br />
      <br />
      <hr />
      <br />
      {_renderManualFind}
    </>
  );
};

export default Component;
