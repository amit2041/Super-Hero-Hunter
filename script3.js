// Get favourite heroes' IDs from local storage and store them in an array
var arr = JSON.parse(localStorage.getItem("favourites")) || [];

// Function to show hero's full details in a new page
function showDetails(idnumber) {
    localStorage.setItem("id", idnumber);
    window.location = "index2.html";
}

// Function to remove hero from favourites, update localStorage, and reload page
function removeHero(id) {
    var index = arr.indexOf(id);
    if (index !== -1) {
        arr.splice(index, 1);
        localStorage.setItem("favourites", JSON.stringify(arr));
        alert("Your hero has been removed successfully");
        location.reload();
    }
}

// Function to fetch and display favourite heroes in HTML page
function fetchData() {
    let html = "";
    arr.forEach(id => {
        fetch(`https://www.superheroapi.com/api.php/487f7b22f68312d2c1bbc93b1aea445b/${id}`)
            .then(response => response.json())
            .then(data => {
                html += `
                <div class="card" style="width: 18rem;">
                  <img onclick="showDetails(${id})" class="card-img-top" src="${data.image.url}">
                  <div class="card-body">
                      <h5 class="card-title" onclick="showDetails(${id})">${data.name}</h5>
                      <span><i class="fa-solid fa-xmark icon" onclick="removeHero(${id})"></i></span>
                  </div>
                </div>`;
                document.getElementById("fv-main").innerHTML = html;
            });
    });
}

// Call the fetchData function when the page is loaded
document.addEventListener("DOMContentLoaded", fetchData);
