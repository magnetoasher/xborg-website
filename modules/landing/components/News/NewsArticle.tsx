import { BtnDark } from '@/components/Buttons';
import Link from 'next/link';
import { useRef, useState } from 'react';

export type NewsArticleProps = {};

export const NewsArticle = ({}: NewsArticleProps) => {
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
      className="news-article expand"
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
      <div className="date lexend-body-s l">13/07/2023</div>
      <div className="lexend-body-sl title">
        XBorg sells out $2m seed round.
      </div>

      <div className="lexend-body-md l description">
        The funds will facilitate the scaling and adoption efforts of XBorg’s
        infrastructure and applications to reach millions of players and fans
        worldwide.
      </div>

      <div className="flex">
        <BtnDark label="Read on BeInCrypto" href="" />
      </div>
    </div>
  );
};
