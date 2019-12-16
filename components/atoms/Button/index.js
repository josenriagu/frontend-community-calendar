import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
`;

export const Button = () => {
  return (
    <div data-testid='count'>
      some
    </div>
  )
}

