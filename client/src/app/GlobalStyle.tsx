import { createGlobalStyle } from "styled-components";
import "normalize.css";

export const GlobalStyle = createGlobalStyle`
:root {
  /* box */
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #242424;

  /* content */
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);

  font-synthesis: none;
  text-align: center;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

body {
  /* flex */
  display: flex;
  justify-content: center;

  /* box */
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  /* box */
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  background-color: #1a1a1a;
  cursor: pointer;
  /* content */
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  /* effects */
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  button {
    background-color: #f9f9f9;
  }
}

`;

export default GlobalStyle;
