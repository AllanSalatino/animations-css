import * as S from "./style";
import logotipo from "../../assets/logo-aflordapele.jpeg";
import { MenuHamburguer } from "../MenuHamburguer";
export const Header = () => {
  return (
    <S.HeaderStyle>
      <S.Container>
        <div>
          <S.Logo src={logotipo} alt="Logotipo" />
          <MenuHamburguer />
        </div>
        <S.SearchBar placeholder="Busque por perfumes aqui.." />
      </S.Container>
    </S.HeaderStyle>
  );
};
