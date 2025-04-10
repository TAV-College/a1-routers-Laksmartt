const router = require("express").Router();
const{
    getAllBooks,
  
} = require("../models/books.js");

router.get("/", async (req, res) => {
    const books = await getAllBooks();
    if (books) {
        res.render("books", { title: `the library of ${books.length} Books`, books });
    } else {
      res.redirect("/");
    }
});


module.exports = router;