import { FaUserCircle, FaPhoneAlt } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";

import s from "./Contact.module.css";

const Contact = ({ contact: { name, number, id }, onDelete }) => {
  return (
    <>
      <div>
        <p className={s.text}>
          <FaUserCircle className={s.icon} />
          {name}
        </p>
        <p className={s.text}>
          <FaPhoneAlt className={s.icon} />
          {number}
        </p>
      </div>

      <button className={s.deleteButton} onClick={() => onDelete(id)}>
        <TiDeleteOutline size={10} /> Delete
      </button>
    </>
  );
};

export default Contact;
