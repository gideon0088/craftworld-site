const API_URL = "https://script.google.com/macros/s/AKfycby5DN7H9nPG2OghCROdkr9oi-RMw8-2YjH1nKGmlIPLyTIpYpN5DCNA23hTE0T8KPP6VQ/exec";

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
