let inc = document.querySelector(".view-product .inc"),
  number = document.querySelector(".view-product .number"),
  dec = document.querySelector(".view-product .dec");
function incrementProduct() {
  number.innerHTML = parseInt(number.innerHTML) + 1;
}
function decrementProduct() {
  if (number.innerHTML == 1) return;
  number.innerHTML -= 1;
}

inc.addEventListener("click", incrementProduct);
dec.addEventListener("click", decrementProduct);
