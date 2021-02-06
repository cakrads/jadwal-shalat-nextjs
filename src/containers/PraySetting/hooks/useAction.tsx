import { useContext } from 'react';
import { AppContext } from '@context/store';

export default function useAction() {
  const { globalState } = useContext(AppContext);
  const { config } = globalState;

  return {
    config
  };
}
