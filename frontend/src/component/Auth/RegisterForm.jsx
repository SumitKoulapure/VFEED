import React from 'react'
import Typography from '@mui/material/Typography';
import { Formik, Form, Field } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
export const RegisterForm = () => {

  const navigate = useNavigate();

  const initialValues = {
    fullName: '',
    email: '',
    password: '',
    role: "ROLE_CUSTOMER"
  };
  const handleSubmit = (values) => {
    console.log("form values ", values);
    localStorage.setItem("registeredUser", JSON.stringify(values));
    alert("Registered successfully");
    navigate("/account/login"); // Go to login modal
  };

  // const handleSubmit = (values) => {

  //   console.log("form values ", values);


  // }
  return (
    <div>


      <Typography variant="h5" className="text-center">
        Register
      </Typography>


      <Formik onSubmit={handleSubmit} initialValues={initialValues}>


        <Form>

          <Field as={TextField} name="fullName" label="Full Name" fullWidth variant="outlined" margin="normal" />
          <Field as={TextField} name="email" label="Email" fullWidth variant="outlined" margin="normal" />
          <Field as={TextField} name="password" type="password" label="Password" fullWidth variant="outlined" margin="normal" />
          <Field as={TextField} name="role" label="Role" fullWidth variant="outlined" margin="normal" />


          <Field fullWidth margin="normal"
            as={Select}
            labelId="role-simple-select-label"
            id="role-simple-select"
            // value={age}
            name="role"
          // onChange={handleChange}
          >
            <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
            <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>

          </Field>




          <Button sx={{ mt: 2, padding: "1rem" }} type="submit" variant="contained" color="primary" fullWidth>
            Register
          </Button>
          <Button>  </Button>

        </Form>


      </Formik>


      {/* <Button onClick={() => navigate('/register')}>  register </Button>
      Dont have an account? */}



      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        If have an account already?
        <Button size="small" onClick={() => navigate('/account/login')} sx={{ ml: 1 }}>
          Login
        </Button>
      </Typography>


    </div>
  )
}
