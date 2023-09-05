const fontSizeControl = document.getElementById("font-size-control");
const font = document.getElementById("text");

fontSizeControl.addEventListener("input", () => {
  const fontSize = fontSizeControl.value + "px";
  font.style.fontSize = fontSize;
});
