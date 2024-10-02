import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { login } from "../../thunks/authThunk";

const initialValues = {
  email: "",
  password: "",
};
const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(4).max(20).required(),
});

const Login = () => {
  const authUser = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const submitHandler = (values, formikBag) => {
    console.log(values);
    dispatch(login(values));
    formikBag.resetForm();
  };

  return (
    <div>
      <h1>Login {authUser.name} </h1>
      <Formik
        initialValues={initialValues}
        onSubmit={submitHandler}
        validationSchema={LoginSchema}
      >
        {({ values }) => (
          <Form>
            <div>
              <Field name="email" type="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" />
            </div>

            <div>
              <Field name="password" type="password" placeholder="Password" />
              <ErrorMessage name="password" component="div" />
            </div>

            <div>
              <button type="submit">Submit</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
