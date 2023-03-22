import { useState } from "react";
import { MenuSlide } from "../MenuSlide";
import { Hamburguer } from "./style";

export const MenuHamburguer = () => {
  const [isHamburguerMenu, setIsHamburguerMenu] = useState<boolean>(false);

  const HamburgerMenuStatus = () => {
    if (isHamburguerMenu) {
      setIsHamburguerMenu(false);
    } else {
      setIsHamburguerMenu(true);
    }
  };

  return (
    <>
      <Hamburguer
        onClick={() => HamburgerMenuStatus()}
        isHamburguerMenu={isHamburguerMenu}
      >
        <section className="bar1" />
        <section className="bar2" />
        <section className="bar3" />
      </Hamburguer>
      <MenuSlide isHamburguerMenu={isHamburguerMenu} />
    </>
  );
};
