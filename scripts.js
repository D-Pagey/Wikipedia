// Random article button
function randomArticle() {
  const url = "https://en.wikipedia.org/wiki/Special:Random";
  window.open(url);
}

document.getElementById("random").addEventListener("click", randomArticle);

// Fetch Search Results

/* To Do:
- get API call for SEARCH results
- input users search results
- return JSON data of users search results
- learn how to create containers
- iterate through return object and create containers for each
- remove search bar and button, create back button
- https://github.com/ksc23/wikipedia-viewer/blob/master/scripts.js
*/
