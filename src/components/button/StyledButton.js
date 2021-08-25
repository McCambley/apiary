import styled, { css } from 'styled-components';

const Button = styled.button`
  width: 100%;
  border-radius: 40px;
  border: 2px solid #ff9900;
  color: #ff9900;
  background-color: #ffffff;
  height: 70px;
  font-size: 24px;
  line-height: 32px;
  cursor: pointer;
  transition: color 0.3s ease, background-color 0.3s ease;
  :hover {
    background-color: red;
  }

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`;
// .projects__button:hover {
//   color: #ffffff;
//   background-color: #ff9900;
// }

export default Button;
