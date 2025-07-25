import React from 'react'
import Typography from '@mui/material/Typography';
import { Formik, Form, Field } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  email: '',
  password: ''
};
export const LoginForm = () => {
  const navigate = useNavigate();

  // const handleSubmit = (values) => { }
  const handleSubmit = (values) => {
    console.log("Login form values", values);

    // Example logic:
    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (
      storedUser &&
      storedUser.email === values.email &&
      storedUser.password === values.password
    ) {
      alert("Login successful");
      navigate("/"); // Close modal by going to /
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div>


      <Typography variant="h5" className="text-center">
        Login
      </Typography>


      <Formik onSubmit={handleSubmit} initialValues={initialValues}>


        <Form>

          <Field as={TextField} name="email" label="Email" fullWidth variant="outlined" margin="normal" />
          <Field as={TextField} name="password" type="password" label="Password" fullWidth variant="outlined" margin="normal" />



          <Button sx={{ mt: 2, padding: "1rem" }} type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
          <Button>  </Button>

        </Form>


      </Formik>


      {/* <Button onClick={() => navigate('/register') }>  register </Button>
 Dont have an account?  */}



      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        Don't have an account?
        <Button size="small" onClick={() => navigate('/account/register')} sx={{ ml: 1 }}>
          Register
        </Button>
      </Typography>


    </div>
  )
}
