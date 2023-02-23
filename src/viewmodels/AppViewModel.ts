import { SeedDataRowMappedType, SeedDataRowType } from "../redux/seed/types";

export class AppViewModel {
  constructor() {}

  animateIntroText = (ref: HTMLHeadingElement, title: string) => {
    const self = this;
    const theLetters = "abcdefghijklmnopqrstuvwxyz¡€#¢∞§¶•ªº≠;"; //You can customize what letters it will cycle through
    const speed = 10; // ms per frame
    const increment = 6; // frames per step. Must be >2

    let clen = title.length;
    let si = 0;
    let stri = 0;
    let block = "";
    let fixed = "";
    //Call self x times, whole function wrapped in setTimeout
    (function rustle(i) {
      setTimeout(function () {
        if (--i) {
          rustle(i);
        }
        nextFrame(i);
        si = si + 1;
      }, speed);
    })(clen * increment + 1);
    function nextFrame(pos: number) {
      for (let i = 0; i < clen - stri; i++) {
        let num = Math.floor(theLetters.length * Math.random());
        let letter = theLetters.charAt(num);

        block = block + letter;
      }
      if (si == increment - 1) {
        stri++;
      }
      if (si == increment) {
        fixed = fixed + title.charAt(stri - 1);
        si = 0;
      }

      let result = fixed + block;

      // TODO: Refactor this
      for (let i = 0; i < result.length; i++) {
        if (title[i] == " ") result = self.setCharAt(result, i, " ");
      }

      ref.innerHTML = result;
      block = "";
    }
  };

  setCharAt(str: string, index: number, chr: string) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
  }

  timeConverter(UNIX_timestamp: number) {
    const a = new Date(UNIX_timestamp * 1000);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = months[a.getMonth()];
    const date = a.getDate();
    const time = month + " " + date;
    return time;
  }

  remapSeed(seed: SeedDataRowType[]): SeedDataRowMappedType[] {
    let result: SeedDataRowMappedType[] = [];

    let capital = 0;
    for (let i = 0; i < seed.length; i++) {
      const date = this.timeConverter(seed[i].timestamp);

      capital += seed[i].capital;
      result.push({
        capital,
        index: seed[i].index,
        date,
      });
    }

    console.log("result -- ", result);
    return result;
  }
}
