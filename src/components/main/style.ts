import styled, { keyframes } from "styled-components";

const opacity = keyframes`
  0% {
    opacity: 0;
  }
  65%{
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
export const MainTag = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  z-index: -10;

  animation: ${opacity} 1s forwards;
`;

export const Background = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  top: 160px;

  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;

  animation: ${opacity} 1s forwards;
`;
