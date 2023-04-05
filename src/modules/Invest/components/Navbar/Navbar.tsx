import { Link } from "react-router-dom";
import { ButtonPrimary } from "../../../../components";
import { ScrollViewModel } from "../../../../viewmodels/ScrollViewModel";

export type NavbarProps = {
  active: number;
  setActive: (val: number) => void;
};

let isChanging = false;
export const Navbar = ({ active, setActive }: NavbarProps) => {
  const scrollVM = new ScrollViewModel();
  const openTab = (index: number) => (e: any) => {
    e.preventDefault();

    if (!isChanging) {
      isChanging = true;
      scrollVM.scrollToSpecifiedScreen(0, 0);

      setTimeout(() => {
        setActive(index);
        isChanging = false;
      }, 300);
    }
  };

  return (
    <div className="invest-navigation row between middle">
      <a href="" className="go-back">
        Back to xborg.com
      </a>

      <div className="sticky-tabs tabs">
        <div className="heads row middle">
          <div className={`head-item${active == 0 ? " active" : ""}`}>
            <Link to="" onClick={openTab(0)}>
              About XBorg
            </Link>
          </div>
          <div className={`head-item${active == 1 ? " active" : ""}`}>
            <Link to="" onClick={openTab(1)}>
              Why invest?
            </Link>
          </div>
          <div className={`head-item${active == 2 ? " active" : ""}`}>
            <Link to="" onClick={openTab(2)}>
              Events & News
            </Link>
          </div>
          <div className={`head-item${active == 3 ? " active" : ""}`}>
            <Link to="" onClick={openTab(3)}>
              FAQ
            </Link>
          </div>
        </div>
      </div>

      <ButtonPrimary label="Register interest" to="seed" />
    </div>
  );
};
