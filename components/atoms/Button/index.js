import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const Button = styled.button`
    background-color: ${props => props.background || '#CE5374'};
    border: none;
    color: ${props => props.fontColor || 'white'};
    padding: .5rem .3rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: .4rem;
    cursor: pointer;
    ${props => props.large && css`

    font-weight: 600;
    font-size: 20px;
    `};
    ${props => props.medium && css`

    font-weight: 500;
    font-size: 20px;
    `};
    ${props => props.small && css`

    font-weight: 400;
    font-size: 15px;
    `};
  `;

Button.propTypes = {
  fontColor: PropTypes.string,
  large: PropTypes.string,
  medium: PropTypes.string,
  small: PropTypes.string,
};
