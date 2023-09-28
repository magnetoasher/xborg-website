import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MouseEvent, useEffect, useState } from 'react';

export type TabsType = {
  data: SingleTab[];
  addQueryParam?: boolean;
  headClassName?: string;
  onTabChange?: (i: number) => void;
};

export type SingleTab = {
  label: string;
  content: any;
  hidden?: boolean;
};

let isChanging = false;
export const Tabs = ({
  data,
  headClassName,
  onTabChange,
  addQueryParam = false,
}: TabsType) => {
  const router = useRouter();
  const filteredData = data.filter((item) => !item.hidden);
  const [active, setActive] = useState<number>(-1);

  useEffect(() => {
    if (addQueryParam) {
      if (router.query.t) {
        const newActive = parseInt(router.query.t as string);
        setActive(newActive);
      } else {
        router.query.t = '0';
        router.replace(router);
        setActive(0);
      }
    }
  }, []);

  const change = (index: number) => (e: MouseEvent) => {
    e.preventDefault();

    if (!isChanging) {
      isChanging = true;

      setActive(-1);
      onTabChange?.(index);

      setTimeout(() => {
        if (addQueryParam) {
          router.query.t = index.toString();
          router.replace(router);
        }

        setActive(index);
        isChanging = false;
      }, 300);
    }
  };

  return (
    <div className="tabs flex column top">
      <div
        className={`heads flex lexend-heading-xxs${
          headClassName ? ' ' + headClassName : ''
        }`}
      >
        {filteredData.map((tab: SingleTab, index: number) => {
          return (
            <div
              className={`head-item ${
                active === index ? 'active' : 'inactive'
              }`}
              key={index}
            >
              <Link href="" className="flex" onClick={change(index)}>
                {tab.label}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="body">
        <AnimatePresence mode="wait" initial={false}>
          {filteredData.map((tab: SingleTab, index: number) => {
            if (active === index)
              return (
                <motion.div
                  className="body-item"
                  key={index}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                >
                  {tab.content}
                </motion.div>
              );

            return null;
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};
