// Fetch Search Results
const apiUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=";
const userInput = "butterflies";

function search() {
fetch(apiUrl + userInput)
  .then((data) => data.json())
  .then(data => showResults(data))

  .catch(function(error) {
    console.log("Something went wrong" + error);
})
}

search();

// Display results
function showResults(data) {
  let titles = [];
  let snippet = [];

  console.log(data.query.search);

  for (let i = 0; i < data.query.search.length; i++) {
    titles.push(data.query.search[i].title);
    snippet.push(data.query.search[i].snippet);
  }

console.log(snippet);

  const newDiv = document.createElement("div");
  const newContent = document.createTextNode(titles);
  newDiv.appendChild(newContent);
  const currentDiv = document.getElementById("container");
  document.body.insertBefore(newDiv, currentDiv);
}

/* To Do:
- Understand query string
- input users search results
- return JSON data of users search results
- learn how to create containers
- iterate through return object and create containers for each
- remove search bar, random article and button, create back button
- https://github.com/ksc23/wikipedia-viewer/blob/master/scripts.js
*/
