import Menu, { CustomLink } from "./style";
import { AnchorHTMLAttributes } from "react";

export interface CustomAnchorProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  animation?: number;
  isHamburguerMenu?: boolean;
}

export const MenuSlide = ({ isHamburguerMenu }: any) => {
  const rotas = [
    {
      categoria: {
        class: "perfumes-originais",
        name: "Perfumes Originais",
        animation: 0.5,
      },
    },
    {
      categoria: {
        class: "inspiracao",
        name: "Inspiração",
        animation: 0.55,
      },
    },
    {
      categoria: {
        class: "miniaturas-originais",
        name: "Miniaturas Originais",
        animation: 0.6,
      },
    },
    {
      categoria: {
        class: "victorias-secrets",
        name: "Victoria's Secrets",
        animation: 0.65,
      },
    },
    {
      categoria: {
        class: "decants",
        name: "Decants",
        animation: 0.7,
      },
    },
    {
      categoria: {
        class: "feminino",
        name: "Feminino",
        animation: 0.75,
      },
    },
    {
      categoria: {
        class: "masculino",
        name: "Masculino",
        animation: 0.8,
      },
    },
    {
      categoria: {
        class: "contato",
        name: "Contato",
        animation: 0.85,
      },
    },
    {
      categoria: {
        class: "sobre",
        name: "Sobre",
        animation: 0.9,
      },
    },
  ];
  return (
    <>
      <Menu isHamburguerMenu={isHamburguerMenu}>
        {rotas.map((rota, index) => {
          return (
            <CustomLink
              key={index}
              href={rota.categoria?.class}
              target="_blank"
              className={rota.categoria?.class}
              isHamburguerMenu={isHamburguerMenu}
              animation={rota.categoria?.animation}
            >
              {rota.categoria?.name}
            </CustomLink>
          );
        })}
      </Menu>
    </>
  );
};
