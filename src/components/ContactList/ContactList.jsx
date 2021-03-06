import PropTypes from "prop-types";
import styles from "../ContactList/contactList.module.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function Card({ arr, onDel }) {
  return (
    <div className={styles.container}>
      <TransitionGroup component="ul">
        {arr.map(({ id, name, number }) => {
          return (
            <CSSTransition key={id} timeout={3000} classNames={styles}>
              <li className={styles.item}>
                <h3 className={styles.name}>{name} : </h3>
                <a className={styles.number} href={number}>
                  {number}
                </a>
                <button
                  className={styles.btn}
                  onClick={() => {
                    onDel(id);
                  }}
                  type="button"
                >
                  delite
                </button>
              </li>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
}

Card.propTypes = {
  arr: PropTypes.array.isRequired,
  onDel: PropTypes.func.isRequired,
};

export default Card;
