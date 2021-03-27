import useAction from './hooks/useAction';
import { H3 } from '@components/atomic/Typograph/header';
import Icon from '@components/atomic/Icon';

const Header = (): JSX.Element => {
  const { _onOpen } = useAction();

  return (
    <header className="flex justify-between mb-5">
      <H3>JADWAL SHALATKU</H3>
      <Icon icon="GEAR" onClick={_onOpen} />
    </header>
  );
};

export default Header;
