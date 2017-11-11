// Constants
const x = document.getElementById("userSearch");
const y = document.getElementById("submit");
const apiUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=";

// apiCall
function apiCall() {
  fetch(apiUrl + x.value)
    .then((data) => data.json())
    .then(data => showResults(data))

    .catch(function(error) {
      console.log("Something went wrong " + error);
    })
  }

// Display search results
function showResults(data) {

  for (let i = 0; i < data.query.search.length; i++) {

    document.getElementById("article" + [i + 1]).innerHTML = data.query.search[i].title;
    document.getElementById("snippet" + [i + 1]).innerHTML = data.query.search[i].snippet;
    document.getElementById("link" + [i + 1]).href = `https://en.wikipedia.org/?curid=${data.query.search[i].pageid}`;

  }
}

// Event Listener
y.addEventListener("click", apiCall);


/* To Do:
- break tags in CSS?
- inspect element to work out where div sits
- Understand query string
- learn how to create containers
- iterate through return object and create containers for each
- remove search bar, random article and button, create back button
- https://github.com/ksc23/wikipedia-viewer/blob/master/scripts.js
- should I have used a form or input?
*/

/* Creating DOM elements:
const newDiv = document.createElement("div");
const newContent = document.createTextNode(titles);
newDiv.appendChild(newContent);
const currentDiv = document.getElementById("container");
document.body.insertBefore(newDiv, currentDiv);
*/
