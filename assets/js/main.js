//------------Fixed header------------------
let anchors = document.querySelectorAll(
  ".header-area .links>ul>li:not(:first-child)> a"
);
let sections = Array.from(document.getElementsByTagName("section"));

function fixedHeader() {
  if (window.scrollY >= 500) {
    document.querySelector(".header-area").classList.add("fixed");
  } else {
    document.querySelector(".header-area").classList.remove("fixed");
  }
}

function scrollActiveLink() {
  fixedHeader();
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 100) {
      let arr = [...anchors];
      arr.push(
        document.querySelector(".header-area .links>ul>li:first-child > a")
      );
      arr.forEach((anchor) => {
        anchor.classList.remove("active");
      });

      arr.forEach((anchor) => {
        if (section.classList.contains(anchor.dataset.sec)) {
          anchor.classList.add("active");
        }
      });
    }
  });
}

window.onscroll = scrollActiveLink;
function handleActive(arr, element) {
  arr.forEach((el) => el.classList.remove("active"));
  element.classList.add("active");
}
anchors.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    handleActive(anchors, e.target);
    document.getElementsByClassName(e.target.dataset.sec)[0].scrollIntoView({
      behavior: "smooth",
    });
  });
});

//-------------dropdowns Action-------------------
let dropdowns = document.querySelectorAll(".header-area .links>ul>li.dropdown");
function mediaQuery(x) {
  if (x.matches) {
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("mouseenter", (e) => {
        e.target.children[1].classList.toggle("show");
      });
      dropdown.addEventListener("mouseleave", (e) => {
        e.target.children[1].classList.toggle("show");
      });
    });
  }
}

let media = window.matchMedia("(min-width: 992px)");
mediaQuery(media);
media.addEventListener("change", function () {
  mediaQuery(media);
});

//---------------toggle menu---------------
let toggleMenu = document.querySelector(".header-area .toggle-menu");

function openOrCloseToggleMenu(e) {
  e.stopPropagation();
  if (e.target.ariaExpanded == "true") {
    e.target.children[0].style.cssText = "top:0; transform: rotate(45deg);";
    e.target.children[1].style.cssText = "display: none;";
    e.target.children[2].style.cssText = "top: 0px; transform: rotate(-45deg);";
  } else {
    e.target.children[0].style.cssText = "top:0; transform: rotate(0deg);";
    e.target.children[1].style.cssText = "display: block; top: 10px;";
    e.target.children[2].style.cssText = "top: 20px;transform: rotate(0deg);";
  }
}

toggleMenu.addEventListener("click", openOrCloseToggleMenu);

//--------------landing---------------------------
let boxes = document.querySelectorAll(".landing .right .box");
function overLay(box, heading) {
  let div = document.createElement("div"),
    h4 = document.createElement("h4"),
    span = document.createElement("span"),
    a = document.createElement("a");
  //main div
  div.className = "overlay";

  //heading
  h4.appendChild(document.createTextNode(heading));
  //span
  span.innerHTML =
    "Lorem ipsum dolor sit amet, conservisii ctetur adipiscing elit incid.";

  //a
  a.innerHTML = "Discover More";
  a.href = "#";
  box.appendChild(div);
  setTimeout(() => {
    div.classList.add("visible");
  }, 80);

  div.appendChild(h4);
  div.appendChild(span);
  div.appendChild(a);
}
boxes.forEach((box) => {
  box.addEventListener("mouseenter", (e) => {
    overLay(box, e.target.children[1].children[0].innerHTML);
  });

  box.addEventListener("mouseleave", (e) => {
    document.querySelector(".landing .right .overlay").remove();
  });
});
//--------any slider in index page----------
const menClothes = new Swiper(".swiper", {
  loop: true,

  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
