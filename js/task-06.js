const input = document.getElementById("validation-input");

input.addEventListener("blur", () => {
  const inputValue = input.value;
  const length = input.getAttribute("data-length");

  if (inputValue.length === Number(length)) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});
