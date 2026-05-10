import express from "express";
import fetch from "node-fetch";

const app = express();

const API_URL = "YOUR_APPS_SCRIPT_URL";

app.get("/api", async (req, res) => {
  const response = await fetch(API_URL);
  const data = await response.json();
  res.json(data);
});

app.listen(3000, () => console.log("Server running"));
