import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button } from '@mui/material';

const UserProfile = () => {

// Logic

    const handleLogout =() =>{

    } 



  return (
    <div className='min-h-[80vh] flex flex-col justify-center items-center text-center'>
      <div className='flex flex-col items-center justify-center'>
<AccountCircleIcon sx={{fontSize:"9rem"}}/>
<h1 className='py-5 text-2xl font-semibold'>Sanket Khokade</h1>
<p>Email : sanketkhokadesk@gmail.com</p>
<Button  variant="contained" sx={{margin:"2rem 0rem"}} onClick={handleLogout}>Logout</Button>
      </div>

    </div>
  )
}

export default UserProfile