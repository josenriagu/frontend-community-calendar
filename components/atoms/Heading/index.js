import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const fontSize = ({ level }) => `${0.75 + (1 * (1 / level))}em`;

const fontStyle = css`
  font-size: ${fontSize};
  font-weight: ${props => (props.weight ? props.weight : 500)};
  color: ${props => (props.color ? props.color : '#000000')};
  margin: 0;
`;

const Heading = styled(({
  level, children, ...props
}) => React.createElement(`h${level}`, props, children))`${fontStyle}`;

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
};

Heading.defaultProps = {
  level: 1,
};

export default Heading;
