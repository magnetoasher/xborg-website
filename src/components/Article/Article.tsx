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
      <a href={link} className="article-image">
        <img src={image} alt="" />
      </a>
      <div className="article-content">
        <div className="row between middle">
          <div className="tag">{tag}</div>

          <div className="date">{date}</div>
        </div>
        <a href={link} className="title">
          {title}
        </a>
      </div>
    </article>
  );
};
