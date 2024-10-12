let pages = document.querySelectorAll(".our-products .indicators a");

function handleActive(arr, element) {
  arr.forEach((el) => el.classList.remove("active"));
  element.classList.add("active");
}
pages.forEach((pageLink) => {
  pageLink.addEventListener("click", (e) => {
    handleActive(pages, e.target);
  });
});
