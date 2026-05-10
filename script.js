fetch("/api")
  .then(res => res.json())
  .then(data => {
    document.body.innerHTML = "<h1>Craft World 🚀</h1>";

    data.forEach(item => {
      document.body.innerHTML += `
        <div>
          <strong>${item.Resource}</strong> - ${item.Profit}
        </div>
      `;
    });
  });
