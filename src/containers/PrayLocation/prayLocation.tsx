import React from 'react';
import useAction from './hooks/useAction';
import Button from '@components/atomic/Button';

const SubHeader = (): JSX.Element => {

  const {
    isLoading, location, _chooseLocation,
  } = useAction();

  const LocationFound = ()=> {
    return (
      <>
        <div className="py-1 w-full">
          <marquee> {location.title} </marquee>
        </div>
        <div className="flex-shrink-0">
          <Button border="pill" isLoading={isLoading} onClick={_chooseLocation} size="sm"> Ganti Lokasi </Button>
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
        !location?.title || location?.title === '' || location?.coords?.length === 0
          ? <LocationMiss/>
          : <LocationFound/>
      }
    </div>
  );
};

export default SubHeader;
