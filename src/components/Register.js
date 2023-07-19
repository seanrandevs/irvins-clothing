import { useFormik } from "formik";
import Header from "./Header"
import Footer from "./Footer";
import * as Yup from "yup";

const Register = ({ totalQuantity, users, setUsers }) => {

  const onSubmit = async ( values, actions ) => {
    

   await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
  }

  const validate = Yup.object({
    firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('First name is required'),
    lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Last name is required'),
    email: Yup.string()
    .email('Email is invalid')
    .required('Email is required'),
    password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
    confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Password must match')
    .required('Confirm password is required'),
  })
  const { values, errors, handleBlur, touched, isSubmitting, handleChange, handleSubmit } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: validate,
    onSubmit,
  });

  return (
    <>
    <Header totalQuantity={totalQuantity} />
    <div className="create-account-form">
     <h2>Create an Account</h2>
      <form data-testid="form" onSubmit={handleSubmit} autoComplete="off">
      <div className="inputs">
        {errors.firstName && touched.firstName && <p className="error">{errors.firstName}</p>}
        <input
        className={`form-control ${errors.firstName && touched.firstName ? 'is-invalid' : ""}`}
        placeholder="First name"
        data-testid="fname"
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
        name="firstName"
        type="text"
        />
        </div>
        <div className="inputs">
        {errors.lastName && touched.lastName && <p className="error">{errors.lastName}</p>}
        <input
        className={`form-control ${errors.lastName && touched.lastName ? 'is-invalid' : ""}`}
        placeholder="Last name"
        data-testid="lname"
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
        name="lastName"
        type="text"
        />
        </div>
        <div className="inputs">
        {errors.email && touched.email && <p className="error">{errors.email}</p>}
        <input
        className={`form-control ${errors.email && touched.email ? 'is-invalid' : ""}`}
        placeholder="Email"
        data-testid="e-test"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        name="email"
        type="email"
        />
        </div>
        <div className="inputs">
        {errors.password && touched.password && <p className="error">{errors.password}</p>}
        <input
        className={`form-control ${errors.password && touched.password ? 'is-invalid' : ""}`}
        placeholder="Password"
        data-testid="pass-test"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        name="password"
        type="password"
        />
        </div>
        <div className="inputs">
        {errors.confirmPassword && touched.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        <input
        className={`form-control ${errors.confirmPassword && touched.confirmPassword ? 'is-invalid' : ""}`}
        placeholder="Confirm Password"
        data-testid="confirm-test"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        name="confirmPassword"
        type="password"
        />
        </div>
        <button disabled={isSubmitting} type="submit">Sign Up</button>
      </form>
    </div>

    <Footer />
    </>
  )
}

export default Register

/* <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => saveValues(values)}
      >
      {formik => (
        <div className="create-account-form">
          <h2>Create an Account</h2>
          <Form className="loginbox" >
            <TextField placeholder="First Name" name="firstName" type="text" />
            <TextField placeholder="Last Name" name="lastName" type="text" />
            <TextField placeholder="Email" name="email" type="email" />
            <TextField placeholder="Password" name="password" type="password" />
            <TextField placeholder="Confirm password" name="confirmPassword" type="password" />
            <button type="submit">Sign Up</button>
          </Form>
        </div>
      )}
      </Formik> */