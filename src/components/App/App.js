import React, { Component } from "react";
import PhonebookForm from "../PhonebookForm/PhonebookForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import Container from "../Container/Container";
import "react-toastify/dist/ReactToastify.css";
import { CSSTransition } from "react-transition-group";
import styles from "./App.module.css";
import title from "./title.module.css";
import ErrorPopup from "../ErrorPopup/ErrorPopup";

const { v4: uuidv4 } = require("uuid");
class App extends Component {
  state = {
    contacts: [],
    filter: "",
    error: false,
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem("contact");
    const parsedContact = JSON.parse(savedContacts);
    if (parsedContact) {
      this.setState({ contacts: parsedContact });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contact", JSON.stringify(this.state.contacts));
    }
  }

  handlerFormSubmit = (data) => {
    const user = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    };

    const sameNameArr = this.findName(this.state.contacts, data);

    if (sameNameArr.length > 0) {
      this.setState({ error: true });
      setTimeout(() => {
        this.setState({ error: false });
      }, 3000);
      return;
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, user],
    }));
  };

  findName(arr, user) {
    return arr.filter((el) => el.name === user.name);
  }

  handleFilter = (e) => {
    this.setState({
      filter: e.currentTarget.value,
    });
  };

  filterContact = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter((el) =>
      el.name.toLowerCase().includes(normalizedFilter)
    );
  };

  handleDeliteContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((el) => el.id !== id),
    }));
  };

  render() {
    const filterContact = this.filterContact();
    return (
      <Container>
        <CSSTransition
          in={true}
          classNames={title}
          timeout={500}
          appear={true}
          unmountOnExit
        >
          <h1>Phonebook</h1>
        </CSSTransition>
        <PhonebookForm onSubmit={this.handlerFormSubmit} />

        <CSSTransition
          in={this.state.contacts.length > 0}
          classNames={styles}
          timeout={250}
          unmountOnExit
        >
          <div>
            <Filter value={this.state.filter} onChange={this.handleFilter} />
            <h2>Contacts</h2>
            <ContactList arr={filterContact} onDel={this.handleDeliteContact} />
          </div>
        </CSSTransition>

        <CSSTransition
          in={this.state.error}
          timeout={250}
          classNames={styles}
          unmountOnExit
        >
          <ErrorPopup text="this contact already exists " />
        </CSSTransition>
      </Container>
    );
  }
}

export default App;
