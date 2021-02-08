import React from 'react';
import useRepository from './hooks/useRepository';
import BottomSheet from '@components/molecules/BottomSheet';
import PraySetting from '@containers/PraySetting';
import { BOTTOM_SHEET_TYPE } from '@context/actionsConst';

const BottomSheetContainer = (): JSX.Element => {

  const { isOpen, onClose, containerType } = useRepository();

  const _renderBottomSheetContainer = () => {
    if (containerType === BOTTOM_SHEET_TYPE.PRAY_SETTING) {
      return <PraySetting />;
    } else {
      return <></>;
    }
  };

  return (
    <>
      <BottomSheet
        isOpen={isOpen}
        onClose={onClose}
      >
        {_renderBottomSheetContainer()}
      </BottomSheet>
    </>
  );
};

export default BottomSheetContainer;
