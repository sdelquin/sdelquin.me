document.addEventListener("DOMContentLoaded", function (event) {
  document.querySelectorAll("article").forEach(function (article) {
    const heading = article.querySelector("h2");
    heading.setAttribute("data-anchor-id", article.id);
  });
  anchors.add("article h2");
});
