import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Icon } from 'antd';

import { doLogout } from '../../../redux/actions/logout';
import { NavBarDiv } from './index.styled';
import { Logo } from '../../atoms/Logo';
import { Button } from '../../atoms/Button';

const NavBarDashboard = ({ doLogout }) => {
  const [click, setClick] = useState(false);

  const setToggle = () => {
    setClick(!click);
    console.log('clicked');
  };

  const logout = () => doLogout();
  return (
    <NavBarDiv>
      <Logo />
      <nav>
        <Link href="/">
          <a>
            <Button>Home</Button>
          </a>
        </Link>
        <div>
          <a>
            <Button onClick={logout}>Logout</Button>
          </a>
        </div>
        <Icon type="bell" className="bell" />
        <div className="imgHolder" />
        <Icon type="down" className="down" />
      </nav>
      <main className="nav-menu">
        <Icon type="menu" onClick={setToggle} className={click ? 'hide-bar' : null} />
        {click
        && (
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/">
            <a>Logout</a>
          </Link>
          <Link href="#">
            <a>User profile</a>
          </Link>
        </div>
        )}
      </main>
    </NavBarDiv>
  );
};

NavBarDashboard.propTypes = {
  doLogout: PropTypes.func,
};

export default connect(state => state, { doLogout })(NavBarDashboard);
