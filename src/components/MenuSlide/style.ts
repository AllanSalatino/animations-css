import styled, { css, keyframes } from "styled-components";
import { CustomAnchorProps } from ".";

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

const opacity = keyframes`
  0%{
    right: -300px;
  }
  100%{
    right: 0px;
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

  .perfumes-originais, .inspiracao, .miniaturas-originais, .victorias-secrets, .decants, .feminino, .masculino, .contato, .sobre {
    width: 80%;
    text-align: start;
    color: #aa340b;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    border-bottom: 2px solid #cdcdcd;
    padding: 15px 0px;
    transition: 0.3s;

    :hover {
      color: green;
      border-bottom: 2px solid green;
    }
  }
`;

export const CustomLink = styled.a<CustomAnchorProps>`
  position: relative;
  ${({ animation, isHamburguerMenu }: any) =>
    css`
      animation: ${isHamburguerMenu && opacity} ${animation}s forwards;
    `}
`;

export default Menu;
