import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Icon } from 'antd';

import { doLogout } from '../../../redux/actions/logout';
import { NavBarDiv } from './index.styled';
import { Logo } from '../../atoms/Logo';
import { Button } from '../../atoms/Button';

const NavBarDashboard = ({ doLogout }) => {
  const logout = () => doLogout();
  return (
    <NavBarDiv>
      <Logo />
      <nav>
        <Link href="/">
          <a>
            <Button>
              Home
            </Button>
          </a>
        </Link>
        <div>
          <a>
            <Button onClick={logout}>
              Logout
            </Button>
          </a>
        </div>
        <Icon type="bell" className="bell" />
        <div className="imgHolder" />
        <Icon type="down" className="down" />
      </nav>
    </NavBarDiv>
  );
};

NavBarDashboard.propTypes = {
  doLogout: PropTypes.func,
};

export default connect(state => state, { doLogout })(NavBarDashboard);
