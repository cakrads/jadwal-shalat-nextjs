import * as ICONS from './assets';

interface IIcon{
  color?: string,
  className?: string,
  icon?: string,
  size?: string,
  onClick?: () => any
}

const Icon = (props: IIcon): JSX.Element => {

  const {
    color = 'text-black',
    className = '',
    icon = 'gear',
    size = 'md',
  } = props;

  const iconSize = {
    'lg': 'h-6 w-6',
    'md': 'h-5 w-5',
    'md-long': 'h-5 w-16',
    'sm': 'h-3 w-3',
    'sm-long': 'h-3 w-16',
    'xl': 'h-8 w-8',
    'xs': 'h-1 w-1',
  };

  return (
    <span {...props} className={`${color} ${iconSize[size]} inline-block ${className}`}>
      {ICONS[icon]()}
    </span>
  );
};

export default Icon;
