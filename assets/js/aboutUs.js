//------------Fixed header------------------
function fixedHeader() {
  if (window.scrollY >= 500) {
    document.querySelector(".header-area").classList.add("fixed");
  } else {
    document.querySelector(".header-area").classList.remove("fixed");
  }
}
window.onscroll = fixedHeader;
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
//------------------team------------------------------
let images = document.querySelectorAll(".team figure .image");
function addOverLay(e) {
  let mainDiv = document.createElement("div");
  mainDiv.className = "overlay";
  mainDiv.innerHTML = `
   <div class="icons">
                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#"> <i class="fa-brands fa-twitter"></i></a>
                <a href="#"> <i class="fa-brands fa-linkedin-in"></i></a>
                <a href="#"> <i class="fa-brands fa-behance"></i></a>
              </div>
  
  
  `;

  e.target.appendChild(mainDiv);
  setTimeout(() => {
    mainDiv.classList.add("visible");
  }, 10);
}
function removeOverLay(e) {
  e.target.children[1].remove();
}
images.forEach((img) => {
  img.addEventListener("mouseenter", addOverLay);
  img.addEventListener("mouseleave", removeOverLay);
});
