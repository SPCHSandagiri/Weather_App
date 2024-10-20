const wForm = document.querySelector("form");
const search = document.querySelector("input");
const loc = document.querySelector("#loc");
const lat = document.querySelector("#lat");
const lon = document.querySelector('#lon');

wForm.addEventListener("submit", e => {
  e.preventDefault();

  // console.log('working');

  const location = search.value;
  loc.textContent = "Loading ...";
  lat.textContent = "Loading ...";
  lon.textContent = "Loading ...";

  fetch("/weather?location=" + location)
    .then(res => res.json()) // Convert the response to JSON
    .then(data => {
      // Check if there's an error in the data
      if (data.error) {
        loc.textContent = data.error;
      } else {
        // Display the location name, latitude, and longitude
        loc.textContent = "Location: " + data.Name;   // Use the 'Name' field
        lat.textContent = `Latitude: ${data.Lat}`;
        lon.textContent = `Longitude: ${data.Lon}`;
      }
    })
    .catch(error => {
      loc.textContent = "An error occurred.";
    });
});
