const inputName = document.getElementById(`name-input`);
const outputName = document.getElementById(`name-output`);

inputName.addEventListener(`input`, () => {
  if (inputName.value !== "") {
    outputName.textContent = inputName.value;
  } else {
    outputName.textContent = "Anonymous";
  }
});
