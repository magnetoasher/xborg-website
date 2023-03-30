export class TextManipulation {
  constructor() {}

  splitLetters(container: HTMLElement): HTMLElement {
    const html: string[] = [
      ...(container.innerHTML.match(/<[^>]+>/g)! || ""),
      "",
    ];
    let tmp = "";

    container.innerHTML.split(/<[^>]+>/g)?.forEach((string, index) => {
      tmp +=
        string.replace(/\S/g, "<span class='letter'>$&</span>") + html[index];
    });

    container.innerHTML = tmp;

    return container;
  }

  splitWords(container: HTMLElement): HTMLElement {
    const html: string[] = [
      ...(container.innerHTML?.match(/<[^>]+>/g)! || ""),
      "",
    ];
    let tmp = "";

    container.innerHTML.split(/<[^>]+>/g)?.forEach((string, index) => {
      tmp +=
        string.replace(/\S+/g, '<span class="word">$&</span>') + html[index];
    });

    container.innerHTML = tmp;

    return container;
  }

  splitLines(container: HTMLElement): HTMLElement {
    this.splitWords(container);

    let lastY = -9999;

    container.querySelectorAll("n").forEach((node) => {
      const { y } = node.getBoundingClientRect();

      if (y > lastY) {
        lastY = y;
        node.outerHTML = `<line>${node.innerHTML}</line>`;

        return;
      }

      node.outerHTML = `${node.innerHTML}`;
    });

    let output = "";
    let index = 0;

    // Array for storing opening tags for the next line
    const nextLineOpeningTags: any = [];
    const nextLineClosingTags: any = [];

    // Loop through each line
    // Because it is possible that the FIRST line tag is not at the beginning of the string it might not get the correct opening tags
    // To solve this issue remove the first line tag and add it at the beginning of the string
    `<line>${container.innerHTML.trim().replace("<line>", "")}`
      .split("<line>")
      .forEach((str) => {
        if (!str) return;

        // Remove closing tag from the end of the line
        const string = str.replace("</line>", "");

        // Get opening tags from the current line
        // ALSO SKIP ALL BR TAGS
        const openingtags: string[] =
          string.match(/<(?!\/)(?!br)[^>]+>/g)! ?? [];

        // Get closing tags from the current line
        const closingtags: string[] = string.match(/<\/[^>]+>/g)! ?? [];

        // Get opening tags from the previous line if not exist return an empty array
        const openingTagsLastLine = nextLineOpeningTags[index - 1] ?? [];

        // Get opening tags from the previous line if not exist return an empty array
        const closingTagsLastLine = nextLineClosingTags[index - 1] ?? [];

        openingtags.push(...openingTagsLastLine);
        closingtags.push(...closingTagsLastLine);

        // Filter opening tags that are not closed
        const filteredOpeningTagsEndOfLine = openingtags
          .slice()
          .splice(0, openingtags.length - closingtags.length);

        nextLineOpeningTags.push(filteredOpeningTagsEndOfLine);
        const refactoredLine = `<span class='line'>${openingTagsLastLine.join(
          ""
        )}${string}${filteredOpeningTagsEndOfLine
          .slice()
          .reverse()
          .map((tag) => tag.replace("<", "</"))
          .join("")}</span>`;

        output += refactoredLine;
        index += 1;
      });

    container.innerHTML = output;

    return container;
  }

  breakText(container: HTMLElement) {
    this.splitWords(container);
    this.splitLetters(container);
  }

  hideText(container: HTMLElement) {
    const letters = container.getElementsByClassName("letter");
    const lines = container.getElementsByClassName("line");

    for (let i = 0; i < letters.length; i++) {
      letters[i].removeAttribute("style");
    }
    for (let i = 0; i < lines.length; i++) {
      lines[i].removeAttribute("style");
      lines[i].classList.remove("in");
    }
  }

  fromBottom(container: HTMLElement, speed?: number) {
    const letters = container.getElementsByClassName("letter");

    for (let i = 0; i < letters.length; i++) {
      const current = letters[i] as HTMLElement;
      const delay = i * (speed ?? 50);

      current.style.transform =
        "translateZ(0) translateY(0px) rotate(0deg) scale(1)";
      current.style.transition =
        "transform 500ms cubic-bezier(0.77, 0, 0.175, 1) " +
        delay +
        "ms, opacity 1000ms cubic-bezier(0.77, 0, 0.175, 1) " +
        delay +
        "ms";
      current.style.transformOrigin = "center center";
      current.style.opacity = "1";
    }
  }

  curtains(container: HTMLElement, speed?: number) {
    const letters = container.getElementsByClassName("line");

    for (let i = 0; i < letters.length; i++) {
      const current = letters[i] as HTMLElement;
      current.classList.add("in");
    }
  }
}
