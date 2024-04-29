import express from "express";
import multer from "multer";

const upload = multer();


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/products", (req, res) => {
  res.status(200).json({ message: "Get all products." });
});

app.post("/api/products/", upload.none(), (req, res) => {
  res.status(200).json({ message: "Create a new product." });
});

app.get("/api/product/search", (req, res) => {
  const id = req.query.id;
  res.status(200).json({ message: `Search for product of ID ${id}` })
});

app.get("/api/product/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `Get product of ID ${id}` });
});

app.put("/api/users/:id", upload.none(), (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `Update product of ID ${id}` });
});

app.delete("/api/product/:id", (req, res) => {
  const id = req.params.id;
  res.status(200).json({ message: `Update product of ID ${id}` });
});

app.listen(3000, () => {
  console.log("running at http://localhost:3000");
});

