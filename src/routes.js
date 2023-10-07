const {
  postBookHandler,
  getAllBookHandler,
  getBookByID,
  editBookByID,
  deleteBookByID,
} = require("./handler");

const routes = [
  // route to post book
  {
    method: "POST",
    path: "/books",
    handler: postBookHandler,
  },

  // route to get all book
  {
    method: "GET",
    path: "/books",
    handler: getAllBookHandler,
  },

  // route to get book from specified id
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getBookByID,
  },

  // route to edit book
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: editBookByID,
  },

  // route to delete book
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBookByID,
  },
];

module.exports = routes;
