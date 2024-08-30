import { Field, Form, ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import s from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required!"),
});

const initialValues = {
  id: "",
  name: "",
  number: "",
};

const ContactForm = ({ onAdd }) => {
  const nameFieldId = nanoid();
  const numberFieldId = nanoid();

  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    onAdd(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={s.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field
          className={s.input}
          id={nameFieldId}
          placeholder="Enter your name"
          name="name"
          type="text"
        />
        <ErrorMessage className={s.errorMassage} name="name" component="span" />

        <label htmlFor={numberFieldId}>Number</label>
        <Field
          className={s.input}
          id={numberFieldId}
          placeholder="Enter your number"
          name="number"
          type="text"
        />
        <ErrorMessage
          className={s.errorMassage}
          name="number"
          component="span"
        />

        <button className={s.submitButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
