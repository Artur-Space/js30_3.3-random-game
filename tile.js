export class Tile {
  constructor(gridElement) {
    this.tileElement = document.createElement("div");
    this.tileElement.classList.add("tile");
    this.setValue(Math.random() > 0.5 ? 2 : 4);
    gridElement.append(this.tileElement);
  }

  setValue(value) {
    this.value = value;

    this.saveMaxValToLS(value);

    this.tileElement.textContent = value;
    const bgLightness = 100 - Math.log2(value) * 9;
    this.tileElement.style.setProperty("--bg-lightness", `${bgLightness}%`);
    this.tileElement.style.setProperty(
      "--text-lightness",
      `${bgLightness < 50 ? 90 : 10}%`
    );
  }

  saveMaxValToLS(val) {
    const maxValue = localStorage.getItem("max");
    if (val > maxValue) localStorage.setItem("max", val);
  }

  setXY(x, y) {
    this.x = x;
    this.y = y;
    this.tileElement.style.setProperty("--x", x);
    this.tileElement.style.setProperty("--y", y);
  }

  removeFromDOM() {
    this.tileElement.remove();
  }

  waitForTransitionEnd() {
    return new Promise((resolve) => {
      this.tileElement.addEventListener("transitionend", resolve, {
        once: true,
      });
    });
  }

  waitForAnimationEnd() {
    return new Promise((resolve) => {
      this.tileElement.addEventListener("animationend", resolve, {
        once: true,
      });
    });
  }
}
