// Constants
const userSearch = document.getElementById("userSearch");
const searchBtn = document.getElementById("submit");
const content = document.getElementById("content-container");

const apiUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=";

// Creating new Divs
function addDiv(titleV, snippetV, linkV) {
  const newDiv = document.createElement("div");
  newDiv.className = "articles";

  const newHeader = document.createElement("h3");
  newHeader.className = "article-headers";
  const title = document.createTextNode(titleV);

  const newLink = document.createElement("a");
  newLink.href = linkV;
  newLink.target = "_blank";

  const newSnippet = document.createElement("p");
  newSnippet.className = "article-snippets";
  const snippet = document.createTextNode(snippetV);

  newSnippet.appendChild(snippet);
  newHeader.appendChild(title);
  newLink.appendChild(newSnippet);
  newDiv.appendChild(newHeader);
  newDiv.appendChild(newLink);
  content.appendChild(newDiv);
}

function removeDivs() {
  const divs = document.getElementsByClassName("articles");

  while (divs.length > 0) {
      content.removeChild(divs[0]);
  }
}

// apiCall
function apiCall() {
  fetch(apiUrl + userSearch.value)
    .then((data) => data.json())
    .then(data => showResults(data))

    .catch(function(error) {
      console.log("Something went wrong " + error);
    })
  }

// Display search results
function showResults(data) {

  removeDivs();

  for (let i = 0; i < data.query.search.length; i++) {

    addDiv(data.query.search[i].title, data.query.search[i].snippet, `https://en.wikipedia.org/?curid=${data.query.search[i].pageid}`);

  }
}

// Event Listener
searchBtn.addEventListener("click", apiCall);

/* To Do:
- Understand query string
- remove search bar, random article and button, create back button
- if no user input then throw an alert
- footer fixed if no content, not fixed if content
*/
