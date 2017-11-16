// Constants
const userSearch = document.getElementById("userSearch");
const searchBtn = document.getElementById("submit");
const content = document.getElementById("content-container");
const backBtn = document.getElementById("back");
const random = document.getElementById("random");
const footer = document.getElementById("foot");

const apiUrl = "https://en.wikipedia.org/w/api.php?action=query&format=json&origin=*&list=search&srsearch=";

function createHeader(titleV) {
    const newHeader = document.createElement("h3");
    newHeader.className = "article-headers";
    const title = document.createTextNode(titleV);
    newHeader.appendChild(title);
    return newHeader;
}

// Creating new Divs
function addDiv(titleV, snippetV, linkV) {
  const newDiv = document.createElement("div");
  newDiv.className = "articles";

  // const newHeader = document.createElement("h3");
  // newHeader.className = "article-headers";
  // const title = document.createTextNode(titleV);
  // newHeader.appendChild(title);
  const newHeader = createHeader(titleV);

  const newLink = document.createElement("a");
  newLink.href = linkV;
  newLink.target = "_blank";

  const newSnippet = document.createElement("p");
  newSnippet.className = "article-snippets";
  const snippet = document.createTextNode(snippetV);

  newSnippet.appendChild(snippet);
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

function extractJson(data) {
  return data.json();
}

// if no content
function contentCheck() {
  (userSearch.value === '' ? alert("You need to search for something!"): apiCall());
}

// apiCall
function apiCall() {
  fetch(apiUrl + userSearch.value)
    .then(extractJson)
    .then(showResults)

    .catch(function(error) {
      console.log("Something went wrong " + error);
    })
  }

// Toggle hiding/showing buttons
function hide() {
  backBtn.className = "show";
  searchBtn.className = "hide";
  random.className = "hide";
  userSearch.className = "hide";
  footer.className = "footer--not-fixed"
}

// hide(searchBtn);

function show() {
  backBtn.className = "hide";
  searchBtn.className = "show";
  random.className = "btn btn-primary show";
  userSearch.className = "show";
  footer.className = "footer";

  removeDivs();

  userSearch.placeholder = " Search for an article...";
  userSearch.value = "";

  footer

}

// Display search results
function showResults(data) {
  const { query: { search } } = data;

  hide();
  removeDivs();

  for (let i = 0; i < search.length; i++) {

   addDiv(search[i].title, search[i].snippet.replace(/<\/?[^>]+>/gi, ''), `https://en.wikipedia.org/?curid=${search[i].pageid}`);

  }
}

// Event Listeners
searchBtn.addEventListener("click", contentCheck);
backBtn.addEventListener("click", show);

/* To Do:
- Understand query string
- object destructuring
- break down addDiv function
- map instead of if statement
*/
