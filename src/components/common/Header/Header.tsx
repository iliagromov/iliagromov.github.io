import React, { FC } from 'react';
import { Link } from "gatsby";

import './style.sass';

const Header: FC = () => {
    return (
  
      <header className="header">
        <div className="wrapper">
          <div className="header-content">
            <nav className="header__navbar">
              <Link className="header__navbar-link page__subtitle" to="/">
                Ilia
                <span className="page_bold">Gromov</span>
              </Link>
              <div className="header__navbar-link">
                <Link to="/"> Навыки</Link>
              </div>
              <div className="header__navbar-link">
                <Link to="/projects">Проекты</Link>
              </div>
              <div className="header__navbar-link">
                <Link to="/about">Обо мне</Link>
              </div>
            </nav>
          </div>
        </div>
       
      </header>

  );
}


export default Header;

