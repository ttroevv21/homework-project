import axios from "axios";
import React, { createContext, useReducer } from "react";
import { API } from "../helpers/const";

export const ContactContext = createContext();

const INIT_STATE = {
  contacts: null,
  contactToEdit: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_CONTACTS":
      return { state, contacts: action.payload };
    case "GET_CONTACT_TO_EDIT":
      return { ...state, contactToEdit: action.payload };
    default:
      return state;
  }
};

const ContactProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  //! CREATE
  async function addContact(newContact) {
    try {
      let res = await axios.post(API, newContact);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  //! -------------------------

  //! GET
  async function getContacts() {
    try {
      let res = await axios(API);
      let action = {
        type: "GET_CONTACTS",
        payload: res.data,
      };
      dispatch(action);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  //! --------------------------------

  //! UPDATE

  async function getContactToEdit(id) {
    try {
      const res = await axios(`${API}/${id}`);
      let action = {
        type: "GET_CONTACT_TO_EDIT",
        payload: res.data,
      };
      dispatch(action);
    } catch (error) {
      console.log(error);
    }
  }

  async function saveEditedContact(editedContact) {
    try {
      await axios.patch(`${API}/${editedContact.id}`, editedContact);
      getContacts();
    } catch (error) {
      console.log(error);
    }
  }

  //! -----------------------------------

  //! DELETE

  async function deleteContact(id) {
    try {
      await axios.delete(`${API}/${id}`);
      getContacts();
    } catch (error) {
      console.log(error);
    }
  }

  //! -----------------------------
  return (
    <ContactContext.Provider
      value={{
        addContact: addContact,
        getContacts: getContacts,
        getContactToEdit: getContactToEdit,
        saveEditedContact: saveEditedContact,
        deleteContact: deleteContact,
        contacts: state.contacts,
        contactToEdit: state.contactToEdit,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
