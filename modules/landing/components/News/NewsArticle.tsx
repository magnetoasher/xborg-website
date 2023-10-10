import { BtnDark } from '@/components/Buttons';
import Link from 'next/link';
import { useRef, useState } from 'react';

export type NewsArticleProps = {
  title: string;
  description: string;
  date: string;
  href: string;
};

export const NewsArticle = ({
  title,
  description,
  date,
  href,
}: NewsArticleProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState<{
    y: number;
    x: number;
    visible: boolean;
  }>({
    y: 0,
    x: 0,
    visible: false,
  });

  return (
    <div
      className="news-article expand flex column"
      onMouseMove={(e) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          setMouse({
            x,
            y,
            visible: true,
          });
        }
      }}
      onMouseLeave={() => {
        setMouse({ x: mouse.x, y: mouse.y, visible: false });
      }}
      ref={ref}
    >
      <div
        className={`shadow ${mouse.visible ? 'in' : 'out'}`}
        style={{
          top: mouse.y,
          left: mouse.x,
        }}
      />
      <div className="date lexend-body-s l">{date}</div>
      <div className="lexend-body-sl title">{title}</div>

      <div className="lexend-body-md l description">{description}</div>

      <div className="flex">
        <BtnDark label="Read more" href={href} />
      </div>
    </div>
  );
};
