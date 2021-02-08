import React from 'react';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import { SecondaryBackground } from '@components/atomic/Background';
import Icon from '@components/atomic/Icon';

interface IBottomSheet {
  children?: React.ReactNode,
  fullScreen?: boolean,
  isOpen?: boolean,
  onClose?: () => void,
}

const BottomSheet = (props: IBottomSheet): JSX.Element => {

  if (typeof window === 'undefined')
    return <></>;

  const { isOpen, onClose, children, fullScreen = false } = props;

  let topShadow = false;
  let minHeight = '80vh';
  let roundedTop = 'rounded-t-3xl';

  if (fullScreen) {
    topShadow = true;
    minHeight = '100vh';
    roundedTop = '';
  }

  return (
    <SwipeableBottomSheet
      bodyStyle={{ background:'none' }}
      fullScreen={fullScreen}
      onChange={onClose}
      open={isOpen}
      overlayStyle={{ background:'none' }}
      topShadow={topShadow}
    >
      <div
        className={`overflow-hidden relative max-w-lg mx-auto ${roundedTop}`}
        style={{ minHeight }}
      >
        <SecondaryBackground className={roundedTop}/>
        <div className={`container bg-glass p-5 pt-1 ${roundedTop}`} style={{ minHeight }}>
          <header className="text-center mb-5 leading-4">
            <Icon color={'text-blue-400'} icon="DRAGABLE_ICON" size={'sm-long'} />
          </header>
          <main>
            {children}
          </main>
        </div>
      </div>
    </SwipeableBottomSheet>
  );
};

export default BottomSheet;
