const express = require("express"); // this will import express

const app = express();

const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // these 2 lines are needed to do any kind of post requests.

const menuItems = [
  { name: "pizza", price: 10.59 },
  { name: "Potstikers", price: 7.59 },
  { name: "chowmain", price: 4.59 },
  { name: "hotdogg", price: 2.59 },
  { name: "ramen", price: 1.59 },
  { name: "fried Rice", price: 4.59 },
];

app.get("/api", (req, res) => {
  res.json({ message: "Wazzap" });
});

app.get("/api/menu", (req, res) => {
  res.json({
    count: menuItems.length,
    results: menuItems,
  });
});

app.get("/api/menu/:id", (req, res) => {
  res.json({
    results: menuItems[req.params.id],
  });
});

app.post("api/menu", (req, res) => {
  console.log(req.body); // req body means the data getting from a form. we can simulate this form action from postman
  menuItems.push(req.body);

  res.json({
    count: menuItems.length,
    results: menuItems,
  });
});

app.listen(port, () => console.log(`listening on port: ${port}`));
