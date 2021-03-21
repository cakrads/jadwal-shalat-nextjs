import React from 'react';
import useAction from './hooks/useAction';
import Button from '@components/atomic/Button';

const SubHeader = (): JSX.Element => {

  const {
    isLoading, isLocationSet, locationTitle, _chooseLocation, _changeLocation
  } = useAction();

  const LocationFound = ()=> {
    return (
      <>
        <div className="py-1 w-full">
          <div> {locationTitle} </div>
        </div>
        <div className="flex-shrink-0">
          <Button border="pill" isLoading={isLoading} onClick={_changeLocation} size="sm"> Ganti Lokasi </Button>
        </div>
      </>
    );
  };

  const LocationMiss = ()=> {
    return (
      <Button block border="pill" isLoading={isLoading} onClick={_chooseLocation} size="sm">
        PILIH LOKASI ANDA
      </Button>
    );
  };

  return (
    <div className="flex space-x-4 items-center justify-between mb-3 h-10">
      {
        isLocationSet
          ? <LocationFound/>
          : <LocationMiss/>
      }
    </div>
  );
};

export default SubHeader;
