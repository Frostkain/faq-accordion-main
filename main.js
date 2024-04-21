const containers = document.getElementsByClassName("container");
let currentOpenArticle = null;

for (let i = 0; i < containers.length; i++) {
  containers[i].addEventListener("click", function () {
    if (currentOpenArticle) {
      currentOpenArticle.querySelector("p").classList.add("hidden");
    }
    this.querySelector("p").classList.remove("hidden");
    currentOpenArticle = this;
  });
}

function toggleSvg() {
  if (currentOpenArticle) {
    const plusSvg = toggleIcon.querySelector("#oldSvg");
    const minusSvg = toggleIcon.querySelector("#newSvg");

    plusSvg.classList.toggle("hidden");
    minusSvg.classList.toggle("hidden");
  }
}
