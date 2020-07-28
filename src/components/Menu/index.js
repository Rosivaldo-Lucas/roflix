import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.png';

import { Button } from '../Button';

const Menu = ()=> {
  return (
    <header>
      <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={logo} alt="RosiFlix"/>
        </Link>
      
        <Button as={Link} className="ButtonLink" to="/cadastro/video">
          Novo vídeo
        </Button>
      </nav>
    </header>
  );
};

export default Menu;
