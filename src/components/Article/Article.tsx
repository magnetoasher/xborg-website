export type ArticleProps = {
  image: any;
  tag: string;
  date: string;
  title: string;
  link: string;
};

export const Article = ({ image, tag, date, title, link }: ArticleProps) => {
  return (
    <article className="article">
      <a href={link} target="_blank" className="article-image">
        <img src={image} alt="" />
      </a>
      <div className="article-content">
        <div className="row between middle">
          <div className="tag lexend-body-s">{tag}</div>

          <div className="date lexend-body-xxs">{date}</div>
        </div>
        <a href={link} className="title lexend-body-s">
          {title}
        </a>
      </div>
    </article>
  );
};
