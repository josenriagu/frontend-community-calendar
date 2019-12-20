import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const Button = styled.button`
    background-color: ${props => props.background || '#CE5374'};
    border: none;
    color: ${props => props.fontColor || 'white'};
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 5px;
    ${props => props.large && css`
    width: 348px;
    height: 58px;
    `};
    ${props => props.medium && css`
    width: 114px;
    height: 40px;
    `};
    ${props => props.small && css`
    width: 83px;
    height: 33px;
    `};
    
    font-weight: 600;
    font-size: 20px;
  `;

Button.propTypes = {
  fontColor: PropTypes.string,
  large: PropTypes.string,
  medium: PropTypes.string,
  small: PropTypes.string,
};
