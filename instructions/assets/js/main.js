function selectColor(event) {
  let colorBox = event.target;
  let color = colorBox.style.backgroundColor;

  sessionStorage.setItem("selectedColor", color);
}

function getSelectedColor() {
  if (sessionStorage.getItem("selectedColor")) {
    return sessionStorage.getItem("selectedColor");
  }

  return null;
}

function getRandomColorArray(number) {
  let colorArray = [];
  for (let i = 0; i < number; i++) {
    const randomColor = Math.floor(Math.random() * 16777215);
    const hexColor = "#" + randomColor.toString(16).padStart(6, "0");
    colorArray.push(hexColor);
  }
  return colorArray;
}

function initPalette(palette) {
  const header = document.querySelector("header");

  palette.push(...getRandomColorArray(8));
  palette.forEach((element) => {
    const palletteInput = document.createElement("input");
    palletteInput.type = "color";
    palletteInput.value = element;
    palletteInput.style.backgroundColor = element;

    palletteInput.addEventListener("input", (e) => {
      palletteInput.style.backgroundColor = palletteInput.value;

      selectColor(e);
    });

    header.append(palletteInput);
  });
  const gomme = document.createElement("input");
  gomme.type = "checkbox";
  gomme.id = "gomme";
  const gommeLabel = document.createElement("label");
  gommeLabel.setAttribute("for", "gomme");

  header.append(gomme);
  header.append(gommeLabel);
}

function destroyChilds(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function DrawingBoardController() {
  const board = document.querySelector(".board");
  const gomme = document.querySelector("#gomme");
  const changeSizeInput = document.querySelector(".change-size-input");
  const changeSizeBtn = document.querySelector(".change-size-btn");
  const saveBtn = document.querySelector(".save-btn");
  let isMouseDown = false;

  function generateNewBoard(dimensions) {
    destroyChilds(board);
    for (let i = 0; i < dimensions; i++) {
      const row = document.createElement("div");
      row.classList.add("row-" + i);
      for (let j = 0; j < dimensions; j++) {
        const cell = document.createElement("div");
        cell.classList.add("col-" + j);

        cell.addEventListener("mouseover", (e) => {
          if (isMouseDown) {
            if (gomme.checked) {
              cell.style.backgroundColor = "";
            } else {
              cell.style.backgroundColor = getSelectedColor();
            }
          }
        });
        row.append(cell);
      }
      board.append(row);
    }
  }
  const init = (dimensions) => {
    generateNewBoard(dimensions);

    board.addEventListener("mousedown", (e) => {
      isMouseDown = true;
    });
    board.addEventListener("mouseup", (e) => {
      isMouseDown = false;
    });

    changeSizeBtn.addEventListener("click", (e) => {
      generateNewBoard(changeSizeInput.value);
    });
    saveBtn.addEventListener("click", (e) => {
      html2canvas(board).then((canvas) => {
        const dataURL = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = dataURL;
        link.download = "mon super dessin.png";
        link.click();
      });
    });
  };

  return { init, generateNewBoard };
}

window.addEventListener("DOMContentLoaded", function () {
  console.log("alo");
  initPalette([
    "#22f6f3",
    "#3daf7e",
    "#ffffff",
    "#ec8236",
    "#a9a7ee",
    "#ecc606",
    "#f783f2",
    "#e89e80",
  ]);
  const drawingBoard = DrawingBoardController();
  drawingBoard.init(20);
});
