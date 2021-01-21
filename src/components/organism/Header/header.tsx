import {H3} from '@components/atomic/Typograph/header';
import Icon from '@components/atomic/Icon';

const Header = (): JSX.Element => {
  return (
    <header className="flex justify-between mb-5">
      <H3>JADWAL SHALAT</H3>
      <Icon icon="GEAR" />
    </header>
  );
};

export default Header;
