import React, { useState } from 'react';
import { getLocationFromStorage, getLocationFromGeoLocation } from '@api/location';
import Button from '@components/atomic/Button';

const SubHeader = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState({coors:[], value:''});

  React.useEffect(()=> {
    _getLocation();
  }, []);


  const _getLocation = async ()=> {
    const response: any = await getLocationFromStorage();
    setLocation(response.data);
  };

  const _chooseLocation = async () => {
    setIsLoading(true);

    try {
      if (location?.value === '' || !location?.value) {
        const response: any = await getLocationFromGeoLocation();
        setLocation(response.data);
        alert(response.message);
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const LocationFound = ()=> {
    return (
      <>
        <div className="py-1 w-full">
          <marquee> {location.value} </marquee>
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
    <div className="flex space-x-4 items-center justify-between mb-3">
      {!location?.value || location?.value === '' ? <LocationMiss/> : <LocationFound/>}
    </div>
  );
};

export default SubHeader;
