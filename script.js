const SHEET_URL = "https://script.google.com/macros/s/AKfycbzUUpe5ZE9ZoDj1UlF1jq0g_UgB4RQqucV3uMTi-l4FLgKHSgjaX-MnBWeG4Ous_ZVzLg/exec";

fetch(SHEET_URL)
  .then(res => res.json())
  .then(data => {
    console.log(data);
  });
  