import { Article, ObserverContainer } from "../../../../components";
import { pastarticles, upcomingarticles } from "../../../../localdata/articles";
import { Head } from "../Head";
import { Navbar } from "../Navbar";

export const NewsAndEvents = () => {
  return (
    <div className="news-and-events w-full row column middle center">
      <Head />
      <Navbar active={3} />
      <h2>Upcoming</h2>
      <ObserverContainer className="articles-list row center">
        {upcomingarticles.map((item, index) => (
          <Article {...item} key={index} />
        ))}
      </ObserverContainer>

      <h2>Past</h2>
      <ObserverContainer className="articles-list row center">
        {pastarticles.map((item, index) => (
          <Article {...item} key={index} />
        ))}
      </ObserverContainer>
    </div>
  );
};
