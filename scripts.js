// Random article button
function randomArticle() {
  const url = "https://en.wikipedia.org/wiki/Special:Random";
  window.open(url);
}

document.getElementById("random").addEventListener("click", randomArticle);

// Fetch Search Results
const apiUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=";
const userInput = "ladders";

function search() {
fetch(apiUrl + userInput)
  .then((resp) => resp.json())
  .then(function(articles) {
  console.log(articles);
})

  .catch(function(error) {
    console.log("Something went wrong");
})
}

search();

/* To Do:
- Understand query string
- input users search results
- return JSON data of users search results
- learn how to create containers
- iterate through return object and create containers for each
- remove search bar, random article and button, create back button
- https://github.com/ksc23/wikipedia-viewer/blob/master/scripts.js
*/
