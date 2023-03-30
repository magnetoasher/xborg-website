import { Images } from "../../../../assets/imgs/Images";
import { SectionDescription } from "../../../../components";
import { TeamTile, TeamTileType } from "../../../../components/Tile";

export const Team = () => {
  const team: TeamTileType[] = [
    {
      image: Images.aboutUs.team.member01,
      title: "Louis Regis",
      desc: "CEO",
      linkedin: "https://www.linkedin.com/in/louis-r%C3%A9gis-5116b6107/",
    },
    {
      image: Images.aboutUs.team.member02,
      title: "Anthony Lesoimier",
      desc: "CSO & Advisor",
      linkedin:
        "https://www.linkedin.com/in/anthony-lesoismier-geniaux-06254a11/",
    },
    {
      image: Images.aboutUs.team.member03,
      title: "Laureline",
      desc: "Lead Dev",
      linkedin:
        "https://www.linkedin.com/in/laureline-val%C3%A9rie-david-141410aa/",
    },
    {
      image: Images.aboutUs.team.member04,
      title: "Arthur",
      desc: "Software Engineer",
      linkedin: "https://www.linkedin.com/in/arturas-miceika",
    },
    {
      image: Images.aboutUs.team.member05,
      title: "Donatas",
      desc: "Software Engineer",
      linkedin: "https://www.linkedin.com/in/donatas-paskačius-b3a81013a/",
    },
    {
      image: Images.aboutUs.team.member06,
      title: "Gauthier",
      desc: "Project & Ops",
      linkedin: "https://www.linkedin.com/in/gauthiercollas/",
    },
    {
      image: Images.aboutUs.team.member07,
      title: "Paulius",
      desc: "Design Lead",
      linkedin: "https://www.linkedin.com/in/paulius-pipiras-48445868",
    },
    {
      image: Images.aboutUs.team.member09,
      title: "Julienas",
      desc: "ITOs",
      linkedin: "https://www.linkedin.com/in/julien-grandjanny-b00a46aa/",
    },
    {
      image: Images.aboutUs.team.member10,
      title: "Connor",
      desc: "Growth & Marketing",
      linkedin: "https://www.linkedin.com/in/connor-kirsten-188751164/",
    },
    {
      image: Images.aboutUs.team.member11,
      title: "Sam",
      desc: "XBorg Ventures",
      linkedin: "https://www.linkedin.com/in/sam-sheikh/",
    },
    {
      image: Images.aboutUs.team.member12,
      title: "Joao",
      desc: "Esports & XCS",
      linkedin: "https://www.linkedin.com/in/joaocostagoncalves/",
    },
    {
      image: Images.aboutUs.team.member13,
      title: "Hakim",
      desc: "Community & Councils",
      linkedin: "https://www.linkedin.com/in/hakim-messahli-b1a644241/",
    },
    {
      image: Images.aboutUs.team.member14,
      title: "Sean",
      desc: "Designer & Editor",
      linkedin: "",
    },
  ];
  return (
    <div className={`team expand`}>
      <div className={"section-head-container"}>
        <div className="row section-head">
          <div className="section-border" />
          <div className="row column expand">
            <h2 className="section-head-title">Meet our team</h2>

            <SectionDescription className="section-head-desc">
              The XBorg core team is a confluence of gaming enthusiasts and
              seasoned professionals in the realm of software engineering and
              blockchain technologies, all driven by an unwavering ardor for the
              gaming industry.
            </SectionDescription>
          </div>
        </div>
      </div>
      <div className="team-list row row-wrap center middle">
        {team.map((member: TeamTileType, index: number) => (
          <div className="team-tile-container" key={index}>
            <TeamTile {...member} />
          </div>
        ))}
      </div>
    </div>
  );
};
