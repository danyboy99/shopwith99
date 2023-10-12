import Express from "express";
import data from "./data.js";
import cors from "cors";
const app = Express();
app.use(cors());
const port = process.env.PORT || 5500;
app.get("/api/products", (req, res) => {
  res.json(data.product);
});

app.listen(port, () => {
  console.log(`App running on PORT ${port}`);
});
