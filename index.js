import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/", async (req, res) => {
  const API_KEY = "00936d3b62b61d929f4db01bf1c3b936";
  const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
  const lat = 47.497913; // Budapest
  const lon = 19.040236; // Budapest
  try {
    const response = await axios.get(
      `${BASE_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    const weather = response.data;
    res.render("index.ejs", { weather });
  } catch (error) {
    res.render("error.ejs", { error: error.message });
  }
});

app.listen(port, () => {
  console.log("Server running on localhost://" + port);
});
