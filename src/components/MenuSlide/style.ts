import styled, { css, keyframes } from "styled-components";

interface IStyledProps {
  isHamburguerMenu: boolean;
}

const open = keyframes`
  0%{
    right: -300px;
    opacity: 0;
  }
  100%{
    right: 0;
    opacity: 1;
  }
`;

const close = keyframes`
  0%{
    right: 0;
    opacity: 1;
  }
  100%{
    right: -300px;
    opacity: 0;
  }
`;
const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 160px;
  right: 0;
  z-index: 100;
  height: 100vh;
  width: 80%;
  max-width: 300px;
  background-color: white;

  ${({ isHamburguerMenu }: IStyledProps) =>
    css`
      animation: ${isHamburguerMenu ? open : close} 0.3s forwards;
    `}

  .carros, .motos, .leilao, .login, .cadastrar {
    width: 80%;
    text-align: start;
    color: #aa340b;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
    border-bottom: 2px solid #cdcdcd;
    padding: 20px 0px;
    transition: 0.3s;
    :hover {
      color: var(--blue);
      border-bottom: 4px solid var(--blue);
    }
  }
`;

export default Menu;
