const API_URL = "https://script.google.com/macros/s/AKfycbyO0Alsu0Oct4KAafYO4xVSZja5T1vVeePgyjQ2D5NGrCmN1gI4njvbsfv6sAhCdGr5fg/exec";

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    document.body.innerHTML = "<h1>Craft World Resources 🚀</h1>";

    data.forEach(item => {
      document.body.innerHTML += `
        <div style="padding:10px;border:1px solid #ccc;margin:5px;">
          <strong>${item.Resource}</strong><br>
          Profit: ${item.Profit}
        </div>
      `;
    });
  })
  .catch(err => {
    document.body.innerHTML = "<h2 style='color:red'>Failed to load data</h2>";
    console.error(err);
  });
