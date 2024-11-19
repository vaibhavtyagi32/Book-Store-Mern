import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function CreateBookImg() {
  const navigate = useNavigate();
  function addbook() {
    let formData=new FormData();
    formData.append("bookName",bookName);
    formData.append("authorName",authorName);
    formData.append("desryption",desryption)
    formData.append("price",price)
    formData.append("language",language)
    formData.append("publisher",publisher)
    formData.append("file",file)
    axios({
      url: "http://localhost:3000/add/book",
      method: "post",
      data: formData,
      headers:{
        'content-type':'multipart/form-data',
      }
    })
      .then((res) => {
        if (res.data.success) {
          navigate("/book");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  let [bookName, setBookName] = useState("");
  let [authorName, setAuthorNAme] = useState("");
  let [desryption, setDesryption] = useState("");
  let [price, setPrice] = useState("");
  let [language, setLanguage] = useState("");
  let [publisher, setPublisher] = useState("");
  let [file,setFile]=useState("");
  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Book Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="book name"
          onChange={(e) => setBookName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Author Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="author name"
          onChange={(e) => setAuthorNAme(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Book Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          onChange={(e) => setDesryption(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="enter price $"
          onChange={(e) => setPrice(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Language</Form.Label>
        <Form.Control
          type="text"
          placeholder="language"
          onChange={(e) => setLanguage(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Publisher</Form.Label>
        <Form.Control
          type="text"
          placeholder="publisher"
          onChange={(e) => setPublisher(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Image</Form.Label>
        <Form.Control
          type="file"
          placeholder="Book Image"
          onChange={(e) => setFile(e.target.file(0))}
        />
      </Form.Group>
      <Button variant="success" onClick={addbook}>
        Add Book
      </Button>{" "}
    </Form>
  );
}
export default CreateBookImg;
