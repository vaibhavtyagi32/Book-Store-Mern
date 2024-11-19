const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const multer=require("multer")
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
    extended: false
}));
const uploader=multer({
    storage:multer.diskStorage({}),
    limits:{fileSize:10*1024*1024}
})
const bookcontrollers = require('../controllers/bookcontrollers');
router.post('/add/book',uploader.single("file"),(req, res) => {
    bookcontrollers.addBook(req, res);
});
router.get('/books', (req, res) => {
    bookcontrollers.getBooks(req, res);
})
router.get('/book/:id',(req,res)=>{
    bookcontrollers.getBook(req,res);
})
router.put('/edit/book/:id',(req,res)=>{
    bookcontrollers.editBook(req,res);
})
router.delete("/delete/book/:id",(req,res)=>{
    console.log("delete routes");
    bookcontrollers.deleteBook(req,res);
})
module.exports = router;