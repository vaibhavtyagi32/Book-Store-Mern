const Book = require('../model/Books');
const cloudinary=require("cloudinary").v2;
async function addBook(req, res) {
    try {
        cloudinary.config({
            cloud_name:"deuofkrkf",
            api_key:"534818513318924",
            api_secret:"dsybzrUryWnoY_IdgNC42NUGUMc",
        })
        const upload=await cloudinary.uploader(req.file.path);
        req.body.bookImage=upload.secure_url;

        let book = new Book(req.body)
        await book.save();
        res.status(200).send({ success: true });
    } catch (error) {
        console.log(error)
        res.status(400).send({ success: flase })
    }
}
async function getBooks(req, res) {
    try {
        let books=await Book.find({bookName:new RegExp(req.query.search,"i")})
        res.status(200).send({ success: true, data: books });
    } catch (error) {
        console.log(error);
        res.status(400).send({ success: flase })
    }
}
async function getBook(req,res) {
    try{
        let id=req.params.id;;
        let book=await Book.findOne({_id:id});
        res.status(200).send({ success: true, data: book});
    }catch(err){
        console.log(err);
    }
}
async function editBook(req,res) {
    try{
        let id=req.params.id;
        let book=await Book.findOne({_id:id});
        book.bookName=req.body.bookName;
        book.authorName=req.body.authorName;
        book.desryption=req.body.desryption;
        book.price=req.body.price;
        book.language=req.body.language;
        book.publisher=req.body.publisher;
        await book.save();
        res.status(200).send({success:true})
    }catch(err){
        console.log(err);
        res.status(400).send({success:false})
    } 
}
async function deleteBook(req,res) {
    try{
        let {id}=req.params;
        await Book.deleteOne({_id:id})
        res.status(200).send({success:true})
    }catch(err){
        console.log(err);
        res.status(400).send({success:false})
    }
}
module.exports = {
    addBook,
    getBooks,
    getBook,
    editBook,
    deleteBook
}