const API_URL = "https://script.google.com/macros/s/AKfycbynyMfq93R4P5YHOABBxNGI2pO7GiXr40g5qoRHEqjcbswBpKm42qB7-4OuLJ0_e56Kvg/exec";

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    console.log("Sheet data:", data);

    document.body.innerHTML += "<h2>Resources Loaded </h2>";

    data.forEach(item => {
      document.body.innerHTML += 
        <div>
          <strong>${item.Resource}</strong> - Profit: ${item.Profit}
        </div>
      ;
    });
  })
  .catch(err => {
    console.error("Error loading sheet:", err);
  });
