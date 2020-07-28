import React from 'react';

import { Main } from './styles';

import Menu from '../Menu';
import Footer from '../Footer';

const PageDefault = ({ children }) => {
  return (
    <>
      <Menu />
        <Main>
          {children}
        </Main>
      <Footer />
    </>
  );
};

export default PageDefault;
