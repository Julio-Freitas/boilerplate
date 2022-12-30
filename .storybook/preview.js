import { RouterContext } from 'next/dist/shared/lib/router-context';
import { GlobalStyle } from '../styles/reset';

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  }
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  )
];
