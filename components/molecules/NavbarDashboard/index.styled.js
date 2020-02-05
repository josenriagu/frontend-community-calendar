import styled from 'styled-components';

export const NavBarDiv = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 1rem 2.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  main {
      display: none;
      @media (max-width: 500px) {
        display: flex;
        flex-direction: column;
        align-items:flex-start
      }
      div{
        display:flex;
        flex-direction:column
      }
      
    }
  nav {
    display: flex;
    justify-content: space-between;
    @media (max-width: 500px) {
        background-color: red;
        display: none;
      }
      @media (max-width: 300px) {
        background-color: red;
        display: none;
      }
    a {
      padding-right: 2rem;
      button {
        background-color: #9c0d38;
      }
    }
    .imgHolder {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      background-color: gray;
    }
    .bell {
      font-size: 1.6rem;
      padding: 0.5rem 1rem 0 0;
    }
    .down {
      font-size: 0.5rem;
      padding: 1.5rem 0 0 0.5rem;
    }
  }
`;
