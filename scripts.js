// Constants
const userSearch = document.getElementById("userSearch");
const searchBtn = document.getElementById("submit");
const content = document.getElementById("search-results");
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

// Creating new Div
function addDiv(titleV, snippetV, linkV) {
  const newDiv = document.createElement("div");
  newDiv.className = "articles";

  const newHeader = createHeader(titleV);

  const newLink = document.createElement("a");
  newLink.href = linkV;
  newLink.target = "_blank";
  newLink.className = "article-link";

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

// Toggle hiding/showing buttons
function hide(element) {
  if (element == footer) {
    element.className = "footer--not-fixed";
  } else if (element == backBtn) {
    element.className = "button back-button show";
  } else {
    element.className = "hide";
  }
}

function show() {
  backBtn.className = "button back-button hide";
  searchBtn.className = "button search-button show";
  random.className = "random-button show";
  userSearch.className = "input show";
  footer.className = "footer";

  removeDivs();

  userSearch.placeholder = " Search for an article...";
  userSearch.value = "";

}

// if no content
function contentCheck() {
  (userSearch.value === '' ? alert("You need to search for something!"): apiCall());
}

function extractJson(data) {
  return data.json();
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

// Display search results
function showResults(data) {
  const { query: { search } } = data;

  hide(backBtn);
  hide(searchBtn);
  hide(random);
  hide(userSearch);
  hide(footer);

  removeDivs();

  for (let i = 0; i < search.length; i++) {

   addDiv(search[i].title, search[i].snippet.replace(/<\/?[^>]+>/gi, ''), `https://en.wikipedia.org/?curid=${search[i].pageid}`);

  }
}

// Event Listeners
searchBtn.addEventListener("click", contentCheck);
backBtn.addEventListener("click", show);

/* To Do:
- map instead of if statement
*/

// Modal Functionality
const modalBtn = document.getElementsByClassName('modal-btn');
const modal = document.getElementsByClassName('modal-about');
const button = document.getElementsByClassName('modal-cancel');

modalBtn[0].addEventListener('click', function() {
  modal[0].showModal();
});

button[0].addEventListener('click', function() {
  modal[0].close();
})
