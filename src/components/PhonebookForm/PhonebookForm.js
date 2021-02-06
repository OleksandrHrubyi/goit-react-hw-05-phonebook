import React from "react";
import styles from "../PhonebookForm/phonebookForm.module.css";
import "react-toastify/dist/ReactToastify.css";
import ErrorPopup from "../ErrorPopup/ErrorPopup";
import { CSSTransition } from "react-transition-group";

const { v4: uuidv4 } = require("uuid");

class PhonebookForm extends React.Component {
  state = {
    name: "",
    number: "",
    errorName: false,
    errorNumber: false,
  };

  nameInputId = uuidv4();
  numberInputId = uuidv4();

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length === 0) {
      this.setState({ errorName: true });
      setTimeout(() => {
        this.setState({ errorName: false });
      }, 3000);
      return;
    }

    if (this.state.number.length === 0) {
      this.setState({ errorNumber: true });
      setTimeout(() => {
        this.setState({ errorNumber: false });
      }, 3000);
      return;
    }

    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <div className={styles.container}>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <label className={styles.label}>
            {" "}
            <span className={styles.name}>Name</span>
            <input
              className={styles.input}
              name="name"
              type="text"
              value={name}
              placeholder="enter name"
              onChange={this.handleChange}
            />
          </label>
          <label className={styles.label}>
            {" "}
            <span className={styles.number}>Number</span>
            <input
              className={styles.input}
              name="number"
              type="number"
              value={number}
              placeholder="enter number"
              onChange={this.handleChange}
            />
          </label>
          <button className={styles.btn} type="submit">
            add contact
          </button>
        </form>
        <CSSTransition
          in={this.state.errorName}
          unmountOnExit
          timeout={3000}
          classNames={styles}
        >
          <ErrorPopup text="Please enter name" />
        </CSSTransition>
        <CSSTransition
          in={this.state.errorNumber}
          unmountOnExit
          timeout={3000}
          classNames={styles}
        >
          <ErrorPopup text="Please enter number" />
        </CSSTransition>
      </div>
    );
  }
}

export default PhonebookForm;
