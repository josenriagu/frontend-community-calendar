import styled from 'styled-components';

export const DateTimeDiv = styled.div`
  display: block;

  span {
    border-radius: 0px;
    color: black;
    div {
      color: black;
      input {
        border: 0.5px solid #716969;
        outline: none;
        border-radius: 5px;
        color: black;
        & ::-webkit-input-placeholder {
          /* Edge */
          color: #595959;
        }

        & :-ms-input-placeholder {
          /* Internet Explorer 10-11 */
          color: #595959;
        }

        & ::placeholder {
          color: #595959;
        }
      }
    }
  }

  /* padding: 2rem 0 2rem 0; */
  /* justify-content: space-around; */
`;
