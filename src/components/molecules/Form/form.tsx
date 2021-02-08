import { FormLabel } from '@components/atomic/Typograph';

export const Fieldset = ({children}): JSX.Element => {
  return (
    <fieldset className={'mb-5'}>
      {children}
    </fieldset>
  );
};

export const Select = (props): JSX.Element => {

  const {
    label, name, options, formValue, onChange
  } = props;

  const _handleChange = (e) => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <Fieldset>
      <FormLabel>{label}</FormLabel>
      <select
        className={'w-full'}
        id={name}
        name={name}
        onChange={_handleChange}
        value={formValue}
      >
        {
          options.map((item, key) => {
            return (
              <option key={key} value={item.value}>
                {item.title}
              </option>
            );
          })
        }
      </select>
    </Fieldset>
  );
};
