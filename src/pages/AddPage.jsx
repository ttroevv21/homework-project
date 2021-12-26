import React, { useState, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { ContactContext } from "../context/ContactProvider";

const AddPage = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const { addContact } = useContext(ContactContext);

  function handleSubmit(event) {
    event.preventDefault();
    if (!name.trim() || !phone.trim()) {
      alert("Fill inputs!");
      return;
    }
    let newContact = {
      name: name,
      phone: phone,
    };
    addContact(newContact);
    setName("");
    setPhone("");
  }
  return (
    <div className="add-page">
      <div className="container">
        <Form onSubmit={handleSubmit}>
          <Form.Floating className="mb-3">
            <Form.Control
              onChange={(e) => {
                setName(e.target.value);
              }}
              id="floatingInputCustom"
              type="text"
              value={name}
            />
            <label htmlFor="floatingInputCustom">Enter name</label>
          </Form.Floating>
          <Form.Floating className="mb-3">
            <Form.Control
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              id="floatingInputCustom"
              type="tel"
              value={phone}
            />
            <label htmlFor="floatingInputCustom">Enter phone number</label>
          </Form.Floating>
          <Button type="submit" variant="outline-secondary">
            Create
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddPage;
