import React, { useState, useContext, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { ContactContext } from "../context/ContactProvider";

const EditPage = () => {
  const params = useParams();
  const { getContactToEdit, contactToEdit, saveEditedContact } =
    useContext(ContactContext);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (contactToEdit) {
      setName(contactToEdit.name);
      setPhone(contactToEdit.phone);
    }
  }, [contactToEdit]);

  useEffect(() => {
    getContactToEdit(params.id);
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Fill inputs!");
      return;
    }
    let editedContact = {
      ...contactToEdit,
      name: name,
      phone: phone,
    };
    saveEditedContact(editedContact);
    navigate("/");
  }

  if (!contactToEdit) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingInputCustom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
          <label htmlFor="floatingInputCustom">Edit name</label>
        </Form.Floating>
        <Form.Floating className="mb-3">
          <Form.Control
            id="floatingInputCustom"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            type="tel"
          />
          <label htmlFor="floatingInputCustom">Edit phone number</label>
        </Form.Floating>
        <Button type="submit" variant="outline-secondary">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default EditPage;
