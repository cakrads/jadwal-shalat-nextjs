import Icon from '@components/atomic/Icon';

const Button = (props): JSX.Element => {

  const {
    block = false,
    children,
    type = 'primary',
    size = 'md',
    border = 'simple',
    disabled = false,
    className = '',
    isLoading = false,
  } = props;

  const btnStyle = {
    'primary': 'bg-blue-400 hover:bg-blue-500 text-white',
    'secondary': 'bg-green-400 hover:bg-green-500 text-white',
  };

  const btnSize = {
    'lg': 'py-3 px-5 text-lg',
    'md': 'py-2 px-4',
    'sm': 'py-1 px-3 text-sm',
  };

  const btnBorder = {
    'pill': 'rounded-full active:outline-none active:ring-1 focus:outline-none focus:ring-1',
    'simple': 'rounded focus:outline-none focus:ring-1',
  };

  const btnBlock = block ? 'w-full' : '';

  const LoadingIcon = ()=>{
    return (
      <Icon className="mr-1" icon="SPINNER" size={size}/>
    );
  };

  return (
    <button
      className={`${btnStyle[type]} ${btnSize[size]} ${btnBorder[border]} ${btnBlock} ${className}`}
      disabled={disabled || isLoading}
      onClick={props.onClick}
    >
      {isLoading && <LoadingIcon />} {children}
    </button>
  );
};

export default Button;
