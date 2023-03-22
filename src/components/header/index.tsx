import * as S from "./style";
import logotipo from "../../assets/logo-aflordapele.jpeg";
import { MenuHamburguer } from "../MenuHamburguer";
import { useState } from "react";
import { SlMagnifier } from "react-icons/sl";

export const Header = () => {
  const [isFoco, setIsFoco] = useState<boolean>(false);

  window.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
      setIsFoco(false);
    }
  });

  window.addEventListener("click", (event) => {
    const eventTarget = event.target;
    const inputSearch = document.getElementsByClassName("searchBar");

    if (eventTarget != inputSearch[0]) {
      setIsFoco(false);
    }
  });

  return (
    <S.HeaderStyle>
      <S.Container>
        <div>
          <S.Logo src={logotipo} alt="Logotipo" />
          <MenuHamburguer />
        </div>
        <S.FormTag>
          <S.SearchBar
            isFoco={isFoco}
            className="searchBar"
            onClick={() => setIsFoco(true)}
            placeholder="Busque por perfumes aqui.."
          />
          {!isFoco && (
            <button onClick={(e) => e.preventDefault()}>
              <SlMagnifier style={{ color: "#363636", fontSize: "16px" }} />
            </button>
          )}
        </S.FormTag>
      </S.Container>
    </S.HeaderStyle>
  );
};
