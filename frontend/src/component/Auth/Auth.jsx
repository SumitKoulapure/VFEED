import React from 'react'
import Modal from 'react-modal'
import { useLocation, useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'

import { RegisterForm } from './RegisterForm';
import { LoginForm } from './LoginForm';


export const Auth = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const handleOnClose = () => {
    // Navigate to home or another route when modal closes
    navigate('/');
  };


  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline: 'none',
    boxShadow: 24,
    borderRadius: 2,
    minHeight: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };

  return (
    <>
      {/* <Modal
        isOpen={location.pathname === '/account/register' || location.pathname === '/account/login'}
        onRequestClose={handleOnClose}
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // dark transparent background
            zIndex: 1000,
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            border: 'none',
            padding: '0',
            background: 'transparent', // Remove white background
          },
        }}
      >
        <Box sx={style}>
          {location.pathname === '/account/register' ? <RegisterForm /> : <LoginForm />}
        </Box>
      </Modal> */}

      <Modal
        isOpen={location.pathname === '/account/register' || location.pathname === '/account/login'}
        onRequestClose={handleOnClose}
      >

        {/* <Modal onClose={handleOnClose} open={
        location.pathname === '/account/register' || location.pathname === '/account/login'
      }> */}
        <Box sx={style}>

          {location.pathname === '/account/register' ? <RegisterForm /> : <LoginForm />}


        </Box>
      </Modal>
    </>
  )
}
