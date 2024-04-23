// Fetch hero details from API
fetch(`https://www.superheroapi.com/api.php/487f7b22f68312d2c1bbc93b1aea445b/${localStorage.getItem("id")}`)
  .then((response) => response.json())
  .then((data) => {
    // Function to update HTML content
    const updateHTML = (elementId, value) => {
      document.getElementById(elementId).textContent = value;
    };

    // Add hero image to HTML page
    updateHTML("img", data.image.url);

    // Add hero name to HTML page
    updateHTML("name", data.name);

    // Add biography details to page
    updateHTML("full-name", data.biography["full-name"]);
    updateHTML("place", data.biography["place-of-birth"]);
    updateHTML("first-appearance", data.biography["first-appearance"]);
    updateHTML("publisher", data.biography.publisher);
    updateHTML("alignment", data.biography.alignment);

    // Add powerstats details to page
    updateHTML("intelligence", data.powerstats.intelligence);
    updateHTML("strength", data.powerstats.strength);
    updateHTML("speed", data.powerstats.speed);
    updateHTML("power", data.powerstats.power);
    updateHTML("durability", data.powerstats.durability);
    updateHTML("combat", data.powerstats.combat);

    // Add appearance details to page
    updateHTML("gender", data.appearance.gender);
    updateHTML("race", data.appearance.race);
    updateHTML("height", data.appearance.height);
    updateHTML("weight", data.appearance.weight);
    updateHTML("eye-color", data.appearance["eye-color"]);
    updateHTML("hair-color", data.appearance["hair-color"]);

    // Add work details to page
    updateHTML("occupation", data.work.occupation);
    updateHTML("base", data.work.base);

    // Add connections details to page
    updateHTML("relatives", data.connections.relatives);
    updateHTML("group-affiliation", data.connections["group-affiliation"]);
  });
