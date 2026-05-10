const API_URL = "https://script.google.com/macros/s/AKfycbwyFFnL6ePE8wvzH3D-2hBcPdpHJl7TZGt0a-iioR3miAAJAmVX2wZvpVc0oAN7c8iYRA/exec";

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    document.body.innerHTML = "<h1>Craft World Resources 🚀</h1>";

    data.forEach(item => {
      document.body.innerHTML += `
        <div style="padding:10px;border:1px solid #ccc;margin:5px;">
          <strong>${item.Resource}</strong><br>
          Buy: ${item["Live Buy"]}<br>
          Sell: ${item["Live Sell"]}<br>
          Profit: ${item.Profit}<br>
          True Profit: ${item["True Profit"]}
        </div>
      `;
    });
  })
  .catch(err => {
    document.body.innerHTML = "<h2 style='color:red'>Error loading data</h2>";
    console.error(err);
  });
