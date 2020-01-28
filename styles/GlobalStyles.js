// Create global styles using styled components to be injected into components.
import { createGlobalStyle } from 'styled-components';
import { screens } from '../components/~reusables';

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe
  h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
    display: block;
  }
  :root {
    font-size: 62.5%;
  }
  *,  *::after, *::before {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body{
    line-height: 1.5;
    background-color: '#ffffff' ;
    color: '#000000';
    text-align: left;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Montserrat', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h2 {
    font-size: 5rem;
    margin-top: 1rem;
    font-weight: 400;
    color: white;
  }
  h3 {
    font-size: calc(2.0 * 2.4rem);
    margin-bottom: 0;
    font-weight: 400;
    color: white;
    @media ${screens.mobile} {
      font-size: calc(1.2 * 2.4rem);
    }
  }
  h4 {
    font-size: 3rem;
    margin: 1.5rem 0 0 0;
    font-family: 'Playfair Display', sans-serif;
    color: white;
  }
  h5 {
    font-size: 2.5rem;
    font-weight: bold;
    margin: 0;
  }
  h6 {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
    @media ${screens.mobile} {
      font-size: 1.7rem;
    }
  }
  p, span {
    font-size: 1.6rem;
    @media ${screens.mobile} {
      font-size: 1.4rem;
    }
  }
  a {
    text-decoration: none;
    font-size: 1.6rem
  }
  strong {
    font-weight: bold;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

export default GlobalStyle;
