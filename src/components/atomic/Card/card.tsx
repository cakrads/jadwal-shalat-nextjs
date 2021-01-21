
const Card = ({children, className = ''}): JSX.Element => {
  return (
    <div className={`bg-glass px-5 py-4 pb-4 rounded-3xl ${className}`}>
      {children}
    </div>
  );
};

export default Card;
