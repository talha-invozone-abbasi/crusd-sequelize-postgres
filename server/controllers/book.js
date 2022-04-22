const Books = require("../models").Books;

const createBook = (req, res) => {
  const { title, author, quantity } = req.body;
  const { userId } = req.params;

  return Books.create({
    title,
    author,
    quantity,
    userId,
  }).then((books) => {
    res.status(201).send({
      msg: "Books created successfully",
      data: books,
      status: 200,
    });
  });
};
const allBooks = (req, res) => {
  return Books.findAll().then((books) => {
    res.status(200).send({
      data: books,
      msg: "Books Fetched",
    });
  });
};
const updateBooks = (req, res) => {
  const { title, author, quantity } = req.body;
  return Books.findByPk(req.params.bookId)
    .then((books) => {
      books
        .update({
          title: title || books.title,
          author: author || books.author,
          quantity: quantity || books.quantity,
        })
        .then((updateBooks) => {
          res.status(200).send({
            status: "success",
            data: updateBooks,
            msg: "Updated",
          });
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err, "Last");
    });
};
const deleteBook = (req, res) => {
  return Books.findByPk(req.params.bookId)
    .then((books) => {
      if (!books) {
        res.status(404).send({
          msg: "Book not found",
        });
      }
      return books
        .destroy()
        .then((book) => res.status(200).send({ msg: "Book deleted" }));
    })
    .catch((err) => res.status(500).send({ msg: "Some Thing Wrong Heppen" }));
};

module.exports = {
  createBook,
  deleteBook,
  allBooks,
  updateBooks,
};
