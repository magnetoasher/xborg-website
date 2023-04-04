import { timeConverter } from "../helpers/time";
import { SeedDataRowMappedType, SeedDataRowType } from "../redux/seed/types";

export class AppViewModel {
  constructor() {}

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

  stickyElement(
    parent: HTMLElement,
    child: HTMLElement,
    onScroll: (scrolled: number) => void
  ) {
    const parentYCoordinate = parent.getBoundingClientRect().y;

    window.addEventListener("simplebar-scroll", (e: any) => {
      const childRect = child.getBoundingClientRect();
      const parentRect = parent.getBoundingClientRect();
      const scrollTop = e.detail.scrollTop;

      // Center element
      const middle = window.innerHeight / 2 - childRect.height / 2;

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
    });
  }
}
