import { MouseEvent, useState } from "react";
import { Link } from "react-router-dom";

export type TabsType = {
  data: SingleTab[];
};

export type SingleTab = {
  label: string;
  content: any;
};

export const Tabs = ({ data }: TabsType) => {
  const [active, setActive] = useState<number>(0);

  const onTabChange = (index: number) => (e: MouseEvent) => {
    e.preventDefault();
    setActive(index);
  };

  return (
    <div className='tabs'>
      <div className='heads row'>
        {data.map((tab: SingleTab, index: number) => (
          <div
            className={`head-item ${active === index ? "active" : "inactive"}`}
            key={index}
          >
            <Link to='' className='row' onClick={onTabChange(index)}>
              {tab.label}
            </Link>
          </div>
        ))}
      </div>
      <div className='body'>
        {data.map((tab: SingleTab, index: number) => (
          <div
            className={`body-item ${active === index ? "active" : "inactive"}`}
            key={index}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};
