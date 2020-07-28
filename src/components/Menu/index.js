import React from 'react';

import './styles.css';

import logo from '../../assets/logo.png';

import { Button } from '../Button';

const Menu = ()=> {
  return (
    <header>
      <nav className="Menu">
        <a href="/">
          <img className="Logo" src={logo} alt="RosiFlix"/>
        </a>
      
        <Button as="a" className="ButtonLink" href="/">
          Novo vídeo
        </Button>
      </nav>
    </header>
  );
};

export default Menu;
