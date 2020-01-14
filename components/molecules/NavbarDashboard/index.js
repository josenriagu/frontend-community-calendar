import React from 'react';

import { Icon } from 'antd';
import { NavBarDiv } from './index.styled';
import { Logo } from '../../atoms/Logo';

const NavBarDashboard = () => (
  <NavBarDiv>
    <Logo />
    <nav>
      <Icon type="bell" className="bell" />
      <div className="imgHolder" />
      <Icon type="down" className="down" />
    </nav>
  </NavBarDiv>
);

export default NavBarDashboard;
