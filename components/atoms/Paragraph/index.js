import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: ${props => props.fontSize || '1em'};
  color: ${props => props.color || '#000000'};
  margin: 0;
`;

export default Paragraph;
