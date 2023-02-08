import { ReactElement, useState } from "react";
import { Sidebar } from "../Sidebar";
import { MouseParallaxContainer } from "react-parallax-mouse";
import { ScrollViewModel } from "../../viewmodels/ScrollViewModel";
import { ScrollWrapper } from "../ScrollWrapper";

export type LayoutType = {
  components: ReactElement<any, any>[];
  className?: string;
  overrideScroll?: boolean;
};

export type LayoutChildType = {
  isActiveScreen: boolean;
};

export const Layout = ({
  components,
  className,
  overrideScroll,
}: LayoutType) => {
  const [refs, setRefs] = useState<any[]>([]);
  const [activeScreen, setScreen] = useState<number>(0);

  const scrollVM = new ScrollViewModel();

  function handleRef(ref: HTMLDivElement, index: number) {
    if (ref && !refs[index]) {
      setRefs([...refs, { current: ref }]);
      scrollVM.isInViewPortObserver(ref, () => setScreen(index));
    }
  }

  return (
    <ScrollWrapper overrideScroll={overrideScroll}>
      <div className={`flex flex-col${className ? " " + className : ""}`}>
        <Sidebar total={refs.length} active={activeScreen} />
        <div className='app-content'>
          {components.map((component, index) => {
            return (
              <div
                key={index}
                ref={(ref: HTMLDivElement) => handleRef(ref, index)}
              >
                <MouseParallaxContainer
                  globalFactorX={0.1}
                  globalFactorY={0.1}
                  resetOnLeave
                  containerStyle={{
                    overflow: "initial",
                  }}
                  className={`expand page-section container row page-section-${index}`}
                  key={"section-" + index}
                >
                  {component}
                </MouseParallaxContainer>
              </div>
            );
          })}
        </div>
      </div>
    </ScrollWrapper>
  );
};
