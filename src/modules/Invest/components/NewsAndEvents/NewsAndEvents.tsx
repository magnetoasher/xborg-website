import { Article, ObserverContainer } from "../../../../components";
import { pastarticles, upcomingarticles } from "../../../../localdata/articles";
import { Head } from "../Head";

export const NewsAndEvents = () => {
  return (
    <div className="news-and-events w-full row column middle center">
      <Head />
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
