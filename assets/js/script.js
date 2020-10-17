document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  const doodler = document.createElement("div");
  let doodlerLeftSpace = 50;
  let doodlerBottomSpace = 150;
  let platformCount = 5;
  let isGameOver = false;

  function createDoodler() {
    grid.appendChild(doodler);
    doodler.classList.add("doodler");
    doodler.style.left = doodlerLeftSpace + "px";
    doodler.style.bottom = doodlerBottomSpace + "px";
  }

  class Platform {
    constructor(newPlatBottom) {
      this.bottom = newPlatBottom;
      this.left = Math.random() * 315; // 315 = 400 - 85 (width of the grid - width of  platform) all in the style.css file
      this.visual = document.createElement("div");

      const visual = this.visual;
      visual.classList.add("platform");
      visual.style.left = this.left + "px";
      visual.style.bottom = this.bottom + "px";
      grid.appendChild(visual);
    }
  }

  // We need five platforms for the doodler to jump onto each time
  function createPlatforms() {
    for (let i = 0; i < platformCount; i++) {
      // 600 is the height of the grid
      let platGap = 600 / platformCount;
      let newPlatBottom = 100 + i * platGap;
      let newPlatform = new Platform(newPlatBottom);
    }
  }

  function start() {
    if (!isGameOver) {
      createDoodler();
      createPlatforms();
    }
  }

  //attach to button
  start();
});
