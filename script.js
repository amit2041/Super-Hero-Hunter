// Initialize favourites key in local storage if not available
let favourites = localStorage.getItem("favourites") ? JSON.parse(localStorage.getItem("favourites")) : [];

// Function to show hero's full details in a new page
function showDetails(idnumber) {
  localStorage.setItem("id", idnumber);
  window.location = "index2.html";
}

// Function to add hero's ID to favourites in local storage
function addFavourite(id) {
  if (!favourites.includes(id)) {
    favourites.push(id);
    localStorage.setItem("favourites", JSON.stringify(favourites));
    alert("Your hero has been added to favourites");
  } else {
    alert("Your hero is already in favourites");
  }
}

// Function to fetch and display corresponding heroes based on search
const showCorrespondingHeros = () => {
  let inputValue = document.getElementById("my-search").value;
  fetch(`https://www.superheroapi.com/api.php/487f7b22f68312d2c1bbc93b1aea445b/search/${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      if (data.results) {
        data.results.forEach((element) => {
          html += `
            <div class="card" style="width: 18rem;">
              <img class="card-img-top" onclick="showDetails(${element.id})" src="${element.image.url}">
              <div class="card-body">
                <h5 class="card-title" onclick="showDetails(${element.id})">${element.name}</h5>
                <span><i id="${element.id}" class="fa-solid fa-plus icon" onclick="addFavourite(${element.id})"></i></span>
              </div>
            </div>`;
        });
      } else {
        html += `
          <div class="page-wrap d-flex flex-row align-items-center">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-md-12 text-center">
                  <span class="display-1 d-block">404</span>
                  <div class="mb-4 lead">The hero you are looking for was not found.</div>
                </div>
              </div>
            </div>
          </div>`;
      }
      document.getElementById("cards-group").innerHTML = html;
    });
};
