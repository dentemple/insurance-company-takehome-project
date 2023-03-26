import styled from 'styled-components'

export interface ButtonProps {}

export const Button = styled.button<ButtonProps>`
  /* box */
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  /* content */
  color: #000;
  font-size: 1rem;
  font-weight: 600;
  /* interaction */
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`

export default Button
