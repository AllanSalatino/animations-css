import styled, { css, keyframes } from "styled-components";

interface IStyledProps {
  isFoco: boolean;
}

const dropDown = keyframes`
  0%{
    top: -300px;
    opacity: 0;
  }
  100%{
    top: 0px;
    opacity: 1;
  }
`;

const onFoco = keyframes`
 0%{
    height: 35px;
  }
  100%{
    height: 50px;
  }
`;

const offFoco = keyframes`
 0%{
    height: 50px;
  }
  100%{
    height: 35px;
  }
`;

export const HeaderStyle = styled.header`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 160px;
  background-color: #aa340b;
  padding: 20px 0;

  animation: ${dropDown} 0.7s forwards;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 90%;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

    margin-bottom: 20px;
  }
`;

export const Logo = styled.img`
  width: 225px;
  image-rendering: optimizeQuality;
`;

export const SearchBar = styled.input`
  position: relative;
  width: 100%;
  padding: 7px 13px;
  border-radius: 6px;

  ::placeholder {
    color: #888888;
  }

  ${({ isFoco }: IStyledProps) =>
    css`
      animation: ${isFoco ? onFoco : offFoco} 0.3s forwards;
    `}

  outline: none;
`;

export const FormTag = styled.form`
  position: relative;
  display: flex;
  width: 100%;

  & > button {
    position: absolute;
    right: 10px;
    top: 8px;
  }
`;
