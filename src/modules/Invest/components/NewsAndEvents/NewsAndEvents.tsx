import { Images } from "../../../../assets/imgs/Images";
import { Article, ObserverContainer } from "../../../../components";

export const NewsAndEvents = () => {
  const upcoming = [
    {
      tag: "Cyberlink",
      date: "Mar 30, 2023",
      title:
        "XBorg is partnering with Team BDS to create the most innovative esports project to date.",
    },
    {
      tag: "Cyberlink",
      date: "Mar 30, 2023",
      title:
        "XBorg is partnering with Team BDS to create the most innovative esports project to date.",
    },
    {
      tag: "Cyberlink",
      date: "Mar 30, 2023",
      title:
        "XBorg is partnering with Team BDS to create the most innovative esports project to date.",
    },
    {
      tag: "Cyberlink",
      date: "Mar 30, 2023",
      title:
        "XBorg is partnering with Team BDS to create the most innovative esports project to date.",
    },
    {
      tag: "Cyberlink",
      date: "Mar 30, 2023",
      title:
        "XBorg is partnering with Team BDS to create the most innovative esports project to date.",
    },
    {
      tag: "Cyberlink",
      date: "Mar 30, 2023",
      title:
        "XBorg is partnering with Team BDS to create the most innovative esports project to date.",
    },
    {
      tag: "Cyberlink",
      date: "Mar 30, 2023",
      title:
        "XBorg is partnering with Team BDS to create the most innovative esports project to date.",
    },
    {
      tag: "Cyberlink",
      date: "Mar 30, 2023",
      title:
        "XBorg is partnering with Team BDS to create the most innovative esports project to date.",
    },
  ];

  const past = [
    {
      tag: "Cyberlink",
      date: "Mar 30, 2023",
      title:
        "XBorg is partnering with Team BDS to create the most innovative esports project to date.",
    },
    {
      tag: "Cyberlink",
      date: "Mar 30, 2023",
      title:
        "XBorg is partnering with Team BDS to create the most innovative esports project to date.",
    },
    {
      tag: "Cyberlink",
      date: "Mar 30, 2023",
      title:
        "XBorg is partnering with Team BDS to create the most innovative esports project to date.",
    },
    {
      tag: "Cyberlink",
      date: "Mar 30, 2023",
      title:
        "XBorg is partnering with Team BDS to create the most innovative esports project to date.",
    },
    {
      tag: "Cyberlink",
      date: "Mar 30, 2023",
      title:
        "XBorg is partnering with Team BDS to create the most innovative esports project to date.",
    },
    {
      tag: "Cyberlink",
      date: "Mar 30, 2023",
      title:
        "XBorg is partnering with Team BDS to create the most innovative esports project to date.",
    },
  ];

  return (
    <div className="news-and-events w-full row column middle center">
      <h2>Upcoming</h2>
      <ObserverContainer className="articles-list row between">
        <Article
          image={Images.invest.news}
          tag={"tag"}
          date={"date"}
          title={"title"}
        />
        <Article
          image={Images.invest.news}
          tag={"tag"}
          date={"date"}
          title={"title"}
        />
        <Article
          image={Images.invest.news}
          tag={"tag"}
          date={"date"}
          title={"title"}
        />
      </ObserverContainer>

      <h2>Past</h2>
      <ObserverContainer className="articles-list row between">
        <Article
          image={Images.invest.news}
          tag={"tag"}
          date={"date"}
          title={"title"}
        />
        <Article
          image={Images.invest.news}
          tag={"tag"}
          date={"date"}
          title={"title"}
        />
        <Article
          image={Images.invest.news}
          tag={"tag"}
          date={"date"}
          title={"title"}
        />
      </ObserverContainer>
    </div>
  );
};
