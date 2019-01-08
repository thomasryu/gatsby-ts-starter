import { css } from 'emotion'

export const componentButton = css`
  display: block;
  height: 40px;
  width: 100px;
  margin-bottom: 50px;
  background-color: red;
  border-radius: 5px;

  &:hover {
    opacity: 0.6;
  }
`
export const componentPressedButton = css`
  background-color: green;
`
