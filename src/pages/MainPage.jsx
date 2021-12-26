import React, { useContext, useEffect } from "react";
import { ContactContext } from "../context/ContactProvider";
import { Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const MainPage = () => {
  const { getContacts, contacts, deleteContact } = useContext(ContactContext);

  useEffect(() => {
    getContacts();
  }, []);
  if (!contacts) {
    return <h2>LOADING...</h2>;
  }

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone number</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
              <td>
                <Link to={`/edit/${item.name}/${item.id}`}>
                  <Button className="action-btn" variant="outline-light">
                    Edit
                  </Button>
                </Link>
                <Button
                  className="action-btn"
                  onClick={() => deleteContact(item.id)}
                  variant="outline-light"
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default MainPage;
