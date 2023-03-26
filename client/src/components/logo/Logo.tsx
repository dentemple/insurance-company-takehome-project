import styled from "styled-components";
import { logoSpin } from "src/assets/keyframes";

export interface LogoProps {}

export const Logo = styled.img<LogoProps>`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  &.react:hover {
    filter: drop-shadow(0 0 2em #61dafbaa);
  }

  @media (prefers-reduced-motion: no-preference) {
    &.react {
      animation: ${logoSpin} infinite 20s linear;
    }
  }
`;

export default Logo;
