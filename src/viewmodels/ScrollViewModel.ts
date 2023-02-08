import { debounce } from "lodash";

export class ScrollViewModel {
  constructor() {}

  // Scrolling states
  allowScrolling: boolean = true;
  maxWidth: number = 1200;
  maxHeight: number = 580;

  getScrollingContainer(): Element | null {
    return document.getElementsByClassName("simplebar-content-wrapper")[0];
  }
  getSections(): HTMLCollectionOf<Element> | Element[] {
    const wrapper = this.getScrollingContainer();
    const sections = wrapper?.getElementsByClassName("page-section");
    return sections || [];
  }

  rewriteDefaultScrolling = () => {
    const wrapper = this.getScrollingContainer();

    // Set custom scrolling on desktop only and specific heights
    if (
      window.innerWidth > this.maxWidth &&
      window.innerHeight > this.maxHeight
    ) {
      this.addCustomScrolling();
    }

    // Handle scrolling on resize
    window.addEventListener(
      "resize",
      debounce(() => {
        if (!wrapper) return;

        if (
          window.innerWidth > this.maxWidth &&
          window.innerHeight > this.maxHeight
        ) {
          const currentSection = this.getCurrentIndex();
          const currentPosition = this.getPositionByIndex(currentSection);
          wrapper.scrollTo(0, currentPosition);

          this.addCustomScrolling();
        } else {
          this.removeCustomScrolling();
        }
      }, 300),
      false,
    );
  };

  addCustomScrolling = () => {
    const wrapper = this.getScrollingContainer();

    if (!wrapper) return;

    wrapper.addEventListener(
      "onwheel" in document.createElement("div") ? "wheel" : "mousewheel",
      this.handleScrolling,
    );
  };

  removeCustomScrolling() {
    const wrapper = this.getScrollingContainer();
    if (!wrapper) return;

    wrapper.removeEventListener(
      "onwheel" in document.createElement("div") ? "wheel" : "mousewheel",
      this.handleScrolling,
    );
  }

  handleScrolling = (e: any) => {
    e.preventDefault();

    if (this.allowScrolling) {
      this.allowScrolling = false;

      // Scroll up
      if (e.wheelDelta >= 0) {
        this.handleScrollUp();
      }
      // Scroll down
      else {
        this.handleScrollDown();
      }

      // Reset scroll blocking
      setTimeout(() => {
        this.allowScrolling = true;
      }, 1500);
    }
  };

  handleScrollUp() {
    const wrapper = this.getScrollingContainer();
    if (!wrapper) return;

    if (wrapper.scrollTop == 0) {
      return;
    }

    let currentSection = this.getCurrentIndex();
    const nextSection = currentSection - 1;
    const currentPosition = this.getPositionByIndex(currentSection);
    const nextPosition = this.getPositionByIndex(nextSection);

    this.scrollTo(currentPosition, nextPosition, 0);
    currentSection = nextSection;
  }

  handleScrollDown = () => {
    const wrapper = this.getScrollingContainer();
    if (!wrapper) return;

    let currentSection = this.getCurrentIndex();
    const sections = this.getSections();
    const sectionScroll = sections[currentSection].clientHeight;
    const nextSection = currentSection + 1;
    const wrapperHeight = wrapper.clientHeight;
    const currentPosition = this.getPositionByIndex(currentSection);
    const nextPosition = this.getPositionByIndex(nextSection);
    // Check if we need to scroll down the whole section or to the bottom of
    // current section if it's greater than the screen.
    // This does not work if section is twice as big as it should be.
    // Might need improvement in the future but for now this will do the trick.
    if (sectionScroll <= wrapperHeight) {
      this.scrollTo(currentPosition, nextPosition, 0);
      currentSection = nextSection;
    } else {
      const currentWithSection =
        currentPosition + (sectionScroll - wrapperHeight);

      if (wrapper.scrollTop == currentWithSection) {
        this.scrollTo(currentWithSection, nextPosition, 0);
        currentSection = nextSection;
      } else {
        this.scrollTo(currentPosition, currentWithSection, 0);
      }
    }
  };

  getCurrentIndex(): number {
    const wrapper = this.getScrollingContainer();
    const sections = this.getSections();
    let pos = 0;
    let index = 0;

    if (!wrapper) return 0;

    for (let i = 0; i < sections.length; i++) {
      pos += sections[i].clientHeight;

      // Leave room for error. Some browsers like safari
      // Loves to make 1px errors when scrolling to specific
      // Amount of pixels.
      const rounding = 10;

      if (Math.ceil(wrapper.scrollTop) < pos - rounding) {
        console.log("GET INDEX --- ", { scroll: wrapper.scrollTop, pos });
        index = i;
        break;
      }
    }

    return index;
  }

  getPositionByIndex(index: number): number {
    const sections = this.getSections();
    let pos = 0;

    for (let i = 0; i < index; i++) {
      pos += sections[i].clientHeight;
    }

    return pos;
  }

  preventDefaultForScrollKeys(e: Event) {
    // @ts-ignore
    if (keys[e.keyCode]) {
      e.preventDefault();
      return false;
    }
  }

  scrollTo = (old: number, des: number, actual: number) => {
    const wrapper = this.getScrollingContainer();

    if (!wrapper) return;

    const easeOutCubic = (x: number): number => {
      return 1 - Math.pow(1 - x, 3);
    };

    let delta = des - old;

    actual += 3;
    delta *= easeOutCubic(actual / 100);
    delta += old;

    wrapper.scrollTo(0, delta);

    if (actual < 100) {
      window.requestAnimationFrame(() => {
        this.scrollTo(old, des, actual);
      });
    }
  };

  scrollToSpecifiedScreen(index: number, fast?: boolean) {
    const wrapper = this.getScrollingContainer();
    if (!wrapper) return;

    let currentSection = this.getCurrentIndex();
    const currentPosition = this.getPositionByIndex(currentSection);
    const nextPosition = this.getPositionByIndex(index);

    if (!fast) this.scrollTo(currentPosition, nextPosition, 0);
    else wrapper.scrollTo(0, 0);

    currentSection = index;
  }

  isInViewPortObserver(el: HTMLElement, callbackIn: any, callbackOut?: any) {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            callbackIn();
          }, 300);

          return;
        }
        callbackOut?.();
      },
      {
        root: null,
        rootMargin: "-100px",
        threshold: 0.1,
      },
    );

    observer.observe(el);
  }
}
