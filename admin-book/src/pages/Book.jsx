import { Button, Form, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { TbEdit } from "react-icons/tb";
import { MdOutlineAddCircle } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios";
function Book() {
  const navigate = useNavigate();
  let [books, setBooks] = useState([]);
  let [search,setSearch] =useState("");
  let [isDelete,setIsDelete]=useState(true);
  useEffect(() => {
    axios({
      url: "http://localhost:3000/books",
      method: "get",
      params:{
        search:search
      }
    })
      .then((res) => {
        console.log(res);
        setBooks(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search,isDelete]);
  function addbook() {
    navigate("/add/book");
  }
  function goToBookEditPage(id) {
    navigate("/edit/book/" + id);
  }
  function deleteBook(id){
    setIsDelete(false)
    axios({
      url:"http://localhost:3000/delete/book/"+id,
      method:"delete"
    }).then((res)=>{
        console.log(res)
        setIsDelete(true);
    }).catch((err)=>{
        console.log(err)
    })
  }
  return (
    <>
    <Form>
    <Form.Group className="mb-3">
        <Form.Label>Search Book</Form.Label>
        <Form.Control
          type="text"
          name="bookName"
          placeholder="Enter Book name"
          onChange={(e)=>setSearch(e.target.value)}
        />
      </Form.Group>
    </Form>
    
      <Button variant="danger" style={{float:"right",marginBottom:"5px"}} onClick={addbook}>
        <MdOutlineAddCircle /> Add Books
      </Button>{" "}
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Id</th>
            <th>Book Name</th>
            <th>Author Name</th>
            <th>Price</th>
            <th>Description</th>
            <th>Language</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{index+1}</td>
              <td>{book.bookName}</td>
              <td>{book.authorName}</td>
              <td>{book.price}</td>
              <td>{book.desryption}</td>
              <td>{book.language}</td>
              <td>
                {" "}
                <Button
                  variant="primary"
                  onClick={() => goToBookEditPage(book._id)}
                >
                  <TbEdit />Edit
                </Button>{" "}
                <Button variant="warning" onClick={()=>deleteBook(book._id)}>
                  <MdDeleteForever />Delete
                </Button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
export default Book;
