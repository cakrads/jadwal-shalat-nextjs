
const ListItem = ({children, active = false}): JSX.Element => {
  return (
    <div className={`
      flex space-x-2 items-center justify-between px-5 py-3
      border-b border-gray-50
      ${active && 'bg-white bg-opacity-50'} hover:bg-white hover:bg-opacity-50 cursor-pointer
      last:border-0
    `}>
      {children}
    </div>
  );
};

export default ListItem;
