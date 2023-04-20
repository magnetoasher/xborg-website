import { debounce } from "lodash";
import { Dispatch, SetStateAction } from "react";
import { TagProps } from "../components/Tag";
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
        child.style.transform = `translate3d(0,${moveY}px,0)`;
        onScroll(moveY);
      }
    }
  };

  stickyNavbar = (nav: HTMLElement, navParent: HTMLElement) => {
    window.addEventListener("simplebar-scroll", (e) =>
      this.handleNavbarScroll(nav, navParent)
    );
    window.addEventListener("resize", (e) =>
      this.handleNavbarResize(nav, navParent)
    );
  };

  handleNavbarScroll = (nav: HTMLElement, navParent: HTMLElement) => {
    const mainNav = document.getElementsByClassName("navigation-container")[0];
    const navY = navParent.getBoundingClientRect().y;
    if (navY + 80 <= 0) {
      nav.classList.add("sticky");
      mainNav.classList.add("hidden-nav");
    } else {
      nav.classList.remove("sticky");
      mainNav.classList.remove("hidden-nav");
    }
  };

  handleNavbarResize = debounce((nav: HTMLElement, navParent: HTMLElement) => {
    window.removeEventListener("simplebar-scroll", () =>
      this.handleNavbarScroll(nav, navParent)
    );
    window.removeEventListener("resize", () =>
      this.handleNavbarResize(nav, navParent)
    );

    this.stickyNavbar(nav, navParent);
  }, 300);

  scrollBellowHeader = () => {
    const head = document.getElementsByClassName("invest-section-head")[0];

    if (head) {
      const scrollVM = new ScrollViewModel();
      const height = head.clientHeight;
      scrollVM.scrollTo(0, height, 0);
    }
  };

  onTagChange(
    val: string,
    tags: TagProps[],
    selectedTags: string[],
    selectTags: Dispatch<SetStateAction<string[]>>,
    singleSelect: boolean
  ) {
    const find = selectedTags.find((tag) => tag == val);

    if (find) {
      if (singleSelect) {
        selectTags([]);
      } else {
        const list = selectedTags.filter((tag) => tag !== val);
        selectTags([...list]);
      }
    } else {
      if (singleSelect) {
        selectTags([val]);
      } else {
        let list = selectedTags;
        const tag = tags.find((tag) => tag.value == val);
        if (tag) {
          list.push(tag.value);
          selectTags([...list]);
        }
      }
    }
  }
}
