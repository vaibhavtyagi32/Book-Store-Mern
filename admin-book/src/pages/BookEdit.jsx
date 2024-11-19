import {   useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
function BookEdit(){
    let navigate=useNavigate();
    let params = useParams();
    let id = params.id;
    console.log(id);
    let [book,setBook]=useState({
        bookName:'',
        authorName:'',
        desryption:'',
        price:'',
        language:'',
        publisher:''
    })
    useEffect(()=>{
        axios({
            url:"http://localhost:3000/book/"+id,
            method:"get"
        }).then((res)=>{
            setBook(res.data.data)
            
        }).catch((err)=>{
            console.log(err);
            
        })
    },[params]);
    function handleChange(e){
        let name=e.target.name
        let value=e.target.value
        setBook((prev)=>{
            return{
                ...prev,[name]:value
            }
        })
    }
    function editBook(){
        axios({
            url:"http://localhost:3000/edit/book/"+id,
            method:"put",
            data:book
        }).then(()=>{
            navigate("/book")
        }).catch((err)=>{
            console.log(err);
        })
    }
    return(
        <Form>
      <Form.Group className="mb-3">
        <Form.Label>Book Name</Form.Label>
        <Form.Control
          type="text"
          value={book.bookName}
          name="bookName"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Author Name</Form.Label>
        <Form.Control
          type="text"
          value={book.authorName}
          name="authorName"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Book Descryption</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          value={book.desryption}
          name="desryption"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          value={book.price}
          name="price"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Language</Form.Label>
        <Form.Control
          type="text"
          value={book.language}
          name="language"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Publisher</Form.Label>
        <Form.Control
          type="text"
          value={book.publisher}
          name="publisher"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="success" onClick={editBook}>
        Add Book
      </Button>{" "}
    </Form>
    )
}
export default BookEdit;