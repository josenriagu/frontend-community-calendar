import React from 'react';
import { Spin, Icon as AntIcon } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { colors } from '../../~reusables';


const spinnerStyle = {
  alignSelf: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
export default function PageLoader({ size, color }) {
  const fontSize = size || 100;
  const spinnerColor = color || colors.primary;
  const antIcon = <AntIcon type="loading" style={{ fontSize, color: spinnerColor }} spin />;

  return (
    <LoaderDiv>
      <Spin indicator={antIcon} style={spinnerStyle} />
    </LoaderDiv>
  );
}

export const LoaderContainer = styled.div`
    position: relative;
`;

export const LoaderDiv = styled.div`
      display: flex;
      position: absolute;
      z-index: 10000000;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      background:rgba(0,0,0,0.2);
`;

PageLoader.propTypes = {
  size: PropTypes.number,
  color: PropTypes.bool,
};
