import { useContext } from 'react';
import { AppContext } from '@context/store';
import { H3 } from '@components/atomic/Typograph/header';
import Icon from '@components/atomic/Icon';
import { CONFIG_ACTIONS } from '@context/actionsConst';

const Header = (): JSX.Element => {
  const [ globalState, dispatch ] = useContext(AppContext);
  const { config = {} } = globalState;
  const { bottomSheet = '' } = config;

  const onOpen = () => {
    if (bottomSheet !== '') return '';

    dispatch({
      data: {},
      type: CONFIG_ACTIONS.SET_BOTTOM_SHEET.SHOW_PRAY_SETTING,
    });
  };

  return (
    <header className="flex justify-between mb-5">
      <H3>JADWAL SHALAT</H3>
      <Icon icon="GEAR" onClick={onOpen} />
    </header>
  );
};

export default Header;
