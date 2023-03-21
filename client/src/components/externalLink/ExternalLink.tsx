import styled from "styled-components";

export const ExternalLink = styled.a`
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;

  &:hover {
    color: #535bf2;
  }

  @media (prefers-color-scheme: light) {
    &:hover {
      color: #747bff;
    }
  }
`;

export default ExternalLink;
