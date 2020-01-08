import React from 'react';
import { Icon as AntIcon } from 'antd';
import PropTypes from 'prop-types';

const Icon = ({ color, type }) => (
  <AntIcon
    type={type}
    theme="twoTone"
    twoToneColor={color}
    data-testid="icon-id"
  />
);

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  color: PropTypes.string,
};

Icon.defaultProps = {
  color: '#000000',
};

export default Icon;
