import styled from 'styled-components';

const Label = styled.label`
  font-size: ${props => props.fontSize || '0.6em'};
  color: ${props => props.color || '#000000'};
`;

export default Label;
