var links = document.querySelectorAll(".links");
var circle = document.querySelector(".circle");

function activeLinks() {
  links.forEach((item) => {
    item.classList.remove("active");
  });

  this.classList.add("active");
}

links.forEach((e) => {
  e.addEventListener("click", activeLinks);
});
