import app from "./index.js";

const port = process.env.PORT || 3500;


app.get("/", (req, res) => {
  res.send("Welcome to my API");
});

app.listen(port, () => {
  console.log(` app listening on port http://localhost:${port}/api/v1/`);
});
