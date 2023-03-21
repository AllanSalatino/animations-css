import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 160px;
  background-color: #aa340b;
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
  width: 232px;
  image-rendering: optimizeQuality;
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 7px 13px;
  border-radius: 6px;
  ::placeholder {
    color: gray;
  }

  outline: none;
`;
