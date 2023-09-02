import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  :root{
    --offwhite-bg: ##FAF9F6;
    --black: #00000;
    --deep-dark: #1E1E1E;
    --gray-2: #363636;
  }
  html{
    font-size: 10px;
    font-family: 'Roboto Mono';
    background-color: var(--offwhite-bg);
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
  img, svg{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  button{
    outline: none
  }
  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }
/* Smooth Scroll  */
  [data-scrollbar] {
    height: 100vh;
    overflow: hidden;
    background-color: var(--black);
    .scroll-content {
      background-color: var(--offwhite-bg);
    }
    .scrollbar-track.scrollbar-track-y {
      background: var(--deep-dark);
      .scrollbar-thumb-y {
        background: var(--black);
      }
    }
  }
`;
export default GlobalStyles;