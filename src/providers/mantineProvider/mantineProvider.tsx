import React, { createContext } from 'react';
import { MantineProvider as MantineOriginalProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';

interface ContextValues {
  toggle: ( a?: 'dark' | 'light' ) => void;
  scheme: 'dark' | 'light';
};
const contextDefaultValues: ContextValues = {
  toggle: () => {},
  scheme: 'dark'
}
export const MantineSchemeContext = createContext< ContextValues >(contextDefaultValues);

interface Props {
  children: JSX.Element | JSX.Element[]; 
}
const MantineProvider = ( { children }: Props ) => {
  const [ colorScheme, setColorScheme ] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'dark',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  const value = {
    toggle: toggleColorScheme,
    scheme: colorScheme
  }

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineOriginalProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <MantineSchemeContext.Provider value={ value }>
          { children }
        </MantineSchemeContext.Provider>
      </MantineOriginalProvider>
    </ColorSchemeProvider>
  );
}

export default MantineProvider