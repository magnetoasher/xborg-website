import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { GlobalState } from "../../reducer";
import { ScrollViewModel } from "../../viewmodels/ScrollViewModel";
import { ButtonPrimary } from "../ButtonPrimary";
import { Hamburger } from "./Hamburger";

type SingleLinkType = {
  to: string;
  label: string;
};

type NavigationProps = {
  navbarBtn: any;
};

export const Navigation = ({ navbarBtn }: NavigationProps) => {
  const loaded = useSelector((state: GlobalState) => state.site.loaded);
  const [active, setActive] = useState<boolean>(false);

  const scrollVM = new ScrollViewModel();

  const links: SingleLinkType[] = [
    { to: "", label: "About us" },
    { to: "xborg-app", label: "XBorg app" },
    { to: "xtreme-championship-series", label: "Xtreme Championship Series" },
    { to: "seed-round", label: "XBorg seed round" },
  ];

  return (
    <div
      className={`navigation-container container row center middle ${
        loaded ? "in" : "out"
      }`}
    >
      <nav
        className={`navigation-links lexend-body-xs2 expand row center${
          active ? " active" : ""
        }`}
      >
        <svg
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="brand"
        >
          <path d="M9.38247 0V2.83234L6.73014 4.83048H2.65326L0 2.83234V0L4.69124 3.49281L9.38247 0Z" />
          <path d="M9.38247 9.99992V7.16758L6.73014 5.16943H2.65326L0 7.16758V9.99992L4.69124 6.50711L9.38247 9.99992Z" />
        </svg>
        {links.map((link: SingleLinkType, index: number) => (
          <NavLink
            key={index}
            to={link.to}
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => {
              scrollVM.scrollToSpecifiedScreen(0, 500);
              setActive(false);
            }}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
      {navbarBtn == undefined ? (
        <div className="early-access">
          <ButtonPrimary label="Register interest" to="seed" />
        </div>
      ) : (
        navbarBtn
      )}
      <div
        className="hamburger-menu row middle center"
        onClick={() => setActive(!active)}
      >
        <Hamburger active={active} />
      </div>
    </div>
  );
};
