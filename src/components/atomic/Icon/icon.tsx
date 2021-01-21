import * as ICONS from './assets';

const Icon = (props): JSX.Element => {

  const {
    color = 'text-black',
    className = '',
    icon = 'gear',
    size = 'md',
  } = props;

  const iconSize = {
    'lg': 'h-6 w-6',
    'md': 'h-5 w-5',
    'sm': 'h-3 w-3',
    'xl': 'h-1 w-1',
    'xs': 'h-1 w-1',
  };

  return (
    <span className={`${color} ${iconSize[size]} inline-block ${className}`}>
      {ICONS[icon]()}
    </span>
  );
};

export default Icon;
