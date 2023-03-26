import styled from 'styled-components'

export const InputButton = styled.input`
  margin: 1rem 0;
  padding: 1rem 0;
  width: 100%;
  cursor: pointer;

  &:invalid {
    background: red;
  }
`

export default InputButton
