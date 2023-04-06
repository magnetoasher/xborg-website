export type ArticleProps = {
  image: any;
  tag: string;
  date: string;
  title: string;
};

export const Article = ({ image, tag, date, title }: ArticleProps) => {
  return (
    <article className="article">
      <div className="article-image">
        <img src={image} alt="" />
      </div>
      <div className="row between middle">
        <div className="tag">{tag}</div>

        <div className="date">{date}</div>
      </div>
      <div className="title">{title}</div>
    </article>
  );
};
