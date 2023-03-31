const container = document.querySelector("#container");
const article = container.querySelectorAll("article");

for (let el of article) {
  el.addEventListener("mousemove", e => {
    container.style.animationPlayState = "paused";
  });
  el.addEventListener("mouseleave", e => {
    container.style.animationPlayState = "running";
  });
}