function randomArticle() {
  const url = "https://en.wikipedia.org/wiki/Special:Random";
  window.open(url);
}

document.getElementById("random").addEventListener("click", randomArticle);
