import { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

export type TabsType = {
  data: SingleTab[];
  onTabChange?: (i: number) => void;
};

export type SingleTab = {
  label: string;
  content: any;
};

let isChanging = false;
export const Tabs = ({ data, onTabChange }: TabsType) => {
  const [active, setActive] = useState<number>(0);
  let refs: any[] = [];

  const change = (index: number) => (e: MouseEvent) => {
    e.preventDefault();

    if (!isChanging) {
      isChanging = true;

      setActive(-1);
      onTabChange?.(index);

      setTimeout(() => {
        setActive(index);
        isChanging = false;
      }, 300);
    }
  };

  return (
    <div className="tabs">
      <div className="heads row lexend-body-xxs">
        {data.map((tab: SingleTab, index: number) => (
          <div
            className={`head-item ${active === index ? "active" : "inactive"}`}
            key={index}
          >
            <Link to="" className="row" onClick={change(index)}>
              {tab.label}
            </Link>
          </div>
        ))}
      </div>
      <div className="body">
        {data.map((tab: SingleTab, index: number) => (
          <CSSTransition
            key={index}
            in={active === index}
            nodeRef={refs[index]}
            timeout={300}
            classNames="body-item"
            unmountOnExit
          >
            <div className="body-item">{tab.content}</div>
          </CSSTransition>
        ))}
      </div>
    </div>
  );
};
