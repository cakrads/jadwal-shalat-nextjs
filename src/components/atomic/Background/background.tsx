export const PrimaryBackground = (props) => {

  const {customStyles = {}, className = ''} = props;

  return (
    <div className={`w-full absolute bg-gradient-primary ${className}`}
      style={{
        minHeight: '280vh',
        zIndex: -1,
        ...customStyles,
      }}/>
  );
};

export const SecondaryBackground = (props) => {

  const {customStyles = {}, className = ''} = props;

  return (
    <div className={`w-full absolute bg-gradient-secondary ${className}`}
      style={{
        minHeight: '280vh',
        zIndex: -1,
        ...customStyles,
      }}/>
  );
};
