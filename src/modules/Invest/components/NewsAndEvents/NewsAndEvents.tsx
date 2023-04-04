import { Images } from "../../../../assets/imgs/Images";
import { ObserverContainer } from "../../../../components";

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
      <ObserverContainer className="list">
        {upcoming.map((item, index) => (
          <div
            className="list-item row"
            key={index}
            style={{
              transitionDelay: index * 100 + "ms",
            }}
          >
            <div className="image">
              <img src={Images.invest.news} alt="" />
            </div>
            <div className="desc">
              <div className="article-top row middle between">
                <div className="tag">{item.tag}</div>
                <div className="date">{item.date}</div>
              </div>
              <div className="title">{item.title}</div>
            </div>
          </div>
        ))}
      </ObserverContainer>

      <h2>Past</h2>
      <ObserverContainer className="list">
        {past.map((item, index) => (
          <div
            className="list-item row"
            key={index}
            style={{
              transitionDelay: index * 100 + "ms",
            }}
          >
            <div className="image">
              <img src={Images.invest.news} alt="" />
            </div>
            <div className="desc">
              <div className="article-top row middle between">
                <div className="tag">{item.tag}</div>
                <div className="date">{item.date}</div>
              </div>
              <div className="title">{item.title}</div>
            </div>
          </div>
        ))}
      </ObserverContainer>
    </div>
  );
};
