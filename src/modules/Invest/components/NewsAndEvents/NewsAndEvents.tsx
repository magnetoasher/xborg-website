import { useEffect } from "react";
import { Article, ObserverContainer } from "../../../../components";
import { pastarticles, upcomingarticles } from "../../../../localdata/articles";
import { AppViewModel } from "../../../../viewmodels/AppViewModel";
import { Head } from "../Head";
import { Navbar } from "../Navbar";

export const NewsAndEvents = () => {
  const appVM = new AppViewModel();

  useEffect(() => {
    appVM.scrollBellowHeader();
  }, []);
  return (
    <div className="news-and-events w-full row column middle center">
      <Head />
      <Navbar active={3} />
      <h2 className="vista-heading">Upcoming</h2>
      <ObserverContainer className="articles-list row center">
        {upcomingarticles.map((item, index) => (
          <Article {...item} key={index} />
        ))}
      </ObserverContainer>

      <h2 className="vista-heading">Past</h2>
      <ObserverContainer className="articles-list row center">
        {pastarticles.map((item, index) => (
          <Article {...item} key={index} />
        ))}
      </ObserverContainer>
    </div>
  );
};
