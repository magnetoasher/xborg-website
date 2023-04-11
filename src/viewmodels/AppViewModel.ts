import { debounce } from "lodash";
import { sleep, timeConverter } from "../helpers/time";
import { SeedDataRowMappedType, SeedDataRowType } from "../redux/seed/types";
import { ScrollViewModel } from "./ScrollViewModel";

export class AppViewModel {
  constructor() {}

  listener: any;

  setCharAt(str: string, index: number, chr: string) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
  }

  remapSeed(seed: SeedDataRowType[]): SeedDataRowMappedType[] {
    let result: SeedDataRowMappedType[] = [];

    let capital = 0;
    for (let i = 0; i < seed.length; i++) {
      const date = timeConverter(seed[i].timestamp);

      capital += seed[i].capital;
      result.push({
        capital,
        index: seed[i].index,
        date,
      });
    }

    return result;
  }

  async stickyElement(
    parent: HTMLElement,
    child: HTMLElement,
    windowHeight: number,
    onScroll: (scrolled: number) => void,
    setHeight: (height: number) => void,
    setMobile: (isMobile: boolean) => void
  ) {
    const parentYCoordinate = parent.getBoundingClientRect().y;

    console.log("ADD LISTENERS", { parentYCoordinate, windowHeight });

    window.addEventListener("simplebar-scroll", (e: any) =>
      this.simplebarListener(
        e.detail.scrollTop,
        child,
        parent,
        windowHeight,
        parentYCoordinate,
        onScroll
      )
    );

    window.addEventListener("resize", () =>
      this.onStickyResize(
        parent,
        child,
        windowHeight,
        parentYCoordinate,
        onScroll,
        setHeight,
        setMobile
      )
    );
  }

  onStickyResize = debounce(
    async (
      parent: HTMLElement,
      child: HTMLElement,
      windowHeight: number,
      parentYCoordinate: number,
      onScroll: (scrolled: number) => void,
      setHeight: (height: number) => void,
      setMobile: (isMobile: boolean) => void
    ) => {
      console.log("ON STICKY RESIZE");
      setMobile(window.innerWidth <= 992);
      setHeight(window.innerHeight);

      window.removeEventListener("simplebar-scroll", (e: any) =>
        this.simplebarListener(
          e.detail.scrollTop,
          child,
          parent,
          windowHeight,
          parentYCoordinate,
          onScroll
        )
      );
      window.removeEventListener("resize", () =>
        this.onStickyResize(
          parent,
          child,
          windowHeight,
          parentYCoordinate,
          onScroll,
          setHeight,
          setMobile
        )
      );

      const scrollVM = new ScrollViewModel();

      scrollVM.scrollToSpecifiedScreen(0, 0);

      await sleep(300);

      child.style.transform = `translateY(0px)`;
      onScroll(0);
      this.stickyElement(
        parent,
        child,
        window.innerHeight,
        onScroll,
        setHeight,
        setMobile
      );
    },
    300
  );

  simplebarListener = (
    scrollTop: number,
    child: HTMLElement,
    parent: HTMLElement,
    windowHeight: number,
    parentYCoordinate: number,
    onScroll: (scrolled: number) => void
  ) => {
    console.log("DO STUFF");
    const childRect = child.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    // Center element
    const middle = windowHeight / 2 - childRect.height / 2;

    const startScrollFrom = parentRect.y - middle;
    const stopScrollAt =
      parentYCoordinate + parentRect.height - middle - childRect.height;

    if (startScrollFrom < childRect.height / 2 && stopScrollAt > scrollTop) {
      const moveY = scrollTop - parentYCoordinate + middle;

      if (moveY > 0) {
        child.style.transform = `translateY(${moveY}px)`;
        onScroll(moveY);
      }
    }
  };
}
