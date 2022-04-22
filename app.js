const express = require("express");
const PORT = process.env.PORT || 5000;
const http = require("http");
const { CreateUser, GetAllUser } = require("./server/controllers/user");
const {
  createBook,
  deleteBook,
  allBooks,
  updateBooks,
} = require("./server/controllers/book");
const bodyParser = require("body-parser");

const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res) => {
  res.send("Welcome");
});
app.post("/user", CreateUser);
app.get("/user", GetAllUser);
app.post("/:userId/book", createBook);
app.delete("/:bookId/book", deleteBook);
app.get("/books", allBooks);
app.put("/:bookId/book", updateBooks);
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Running on port ${PORT}`);
});
