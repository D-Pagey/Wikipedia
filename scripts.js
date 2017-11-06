// Fetch Search Results
const apiUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=";
const userInput = "chicken";

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
const article1 = document.getElementById("article1");
const snippet1 = document.getElementById("snippet1");

function showResults(data) {
  let titles = [];
  let snippet = [];

  for (let i = 0; i < data.query.search.length; i++) {
    titles.push(data.query.search[i].title);
    snippet.push(data.query.search[i].snippet);
  }

article1.innerHTML = titles[0];
snippet1.innerHTML = snippet[0];

}

/* To Do:
- break tags in CSS?
- inspect element to work out where div sits
- Understand query string
- input users search results
- return JSON data of users search results
- learn how to create containers
- iterate through return object and create containers for each
- remove search bar, random article and button, create back button
- https://github.com/ksc23/wikipedia-viewer/blob/master/scripts.js
*/

/* Creating DOM elements:
const newDiv = document.createElement("div");
const newContent = document.createTextNode(titles);
newDiv.appendChild(newContent);
const currentDiv = document.getElementById("container");
document.body.insertBefore(newDiv, currentDiv);
*/
