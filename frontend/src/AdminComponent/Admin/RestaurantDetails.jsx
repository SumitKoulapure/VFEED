import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';

import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import FacebookIcon from '@mui/icons-material/Facebook';

const RestaurantDetails = () => {

  const  handleRestaurantStatus=()=>{

  }
  return (
    <div className='lg:px-20 px-5'>
      <div className='py-5 items-center  flex justify-between gap-5'>
        <h1 className='text-2xl lg:text-7xl text-center font-bold  p-5'>Indian Fast Food</h1>

    
      <Button color={true ? 'primary' : 'error'} className='py-[1rem] px-[2rem]' variant="contained"
      onClick={handleRestaurantStatus} size ="large" >
        {true ? 'close' : 'open'}


      </Button>
    </div>
    <Grid container spacing={2}>
      <Grid item xs={12}>
    <Card>
      <CardHeader title={<span className='text-gray-300'>Restaurant</span>}>
      <CardContent>
      <div className='space-y-4 text-gray-200'>

        <div className='flex'>
        <p className='w-48'>Owner</p>
        <p className='text-gray-400'>
          <span className='pr-5'>-</span>

          VFEED
        </p>

        </div>
         <div className='flex'>
        <p className='w-48'>Restaurant Name</p>
        <p className='text-gray-400'>
          <span className='pr-5'>-</span>

          VFEED
        </p>

        </div>

         <div className='flex'>
        <p className='w-48'>Cuisine type</p>
        <p className='text-gray-400'>
          <span className='pr-5'>-</span>

          VFEED
        </p>

        </div>

         <div className='flex'>
        <p className='w-48'>Opening Hours</p>
        <p className='text-gray-400'>
          <span className='pr-5'>-</span>

          VFEED
        </p>

        </div>
         <div className='flex'>
        <p className='w-48'>Status</p>
        <p className='text-gray-400'>
          <span className='pr-5'>-</span>
         {true? <span className='px-5 py-2 rounded-full bg-green-400 text-gray-950'>Open</span>:
          <span className='px-5 py-2 rounded-full bg-red-400 text-gray-50'>Close</span>}
          VFEED
        </p>

        </div>
      </div>

      </CardContent>


      </CardHeader>
    </Card>


      </Grid>


       <Grid item xs={12} lg={6}>
    <Card>
      <CardHeader title={<span className='text-gray-300'>Address</span>}>
      <CardContent>
      <div className='space-y-4 text-gray-200'>

        <div className='flex'>
        <p className='w-48'>Country</p>
        <p className='text-gray-400'>
          <span className='pr-5'>-</span>

          VFEED
        </p>

        </div>
         <div className='flex'>
        <p className='w-48'>City</p>
        <p className='text-gray-400'>
          <span className='pr-5'>-</span>

          VFEED
        </p>

        </div>

         <div className='flex'>
        <p className='w-48'>Postal Code</p>
        <p className='text-gray-400'>
          <span className='pr-5'>-</span>

          VFEED
        </p>

        </div>

         <div className='flex'>
        <p className='w-48'>Street Address</p>
        <p className='text-gray-400'>
          <span className='pr-5'>-</span>

          VFEED
        </p>

        </div>
        
      </div>

      </CardContent>


      </CardHeader>
    </Card>


      </Grid>

      <Grid item xs={12} lg={6}>
    <Card>
      <CardHeader title={<span className='text-gray-300'>Contact</span>}>
      <CardContent>
      <div className='space-y-4 text-gray-200'>

        <div className='flex'>
        <p className='w-48'>Email</p>
        <p className='text-gray-400'>
          <span className='pr-5'>-</span>

          VFEED
        </p>

        </div>
         <div className='flex'>
        <p className='w-48'>Mobile</p>
        <p className='text-gray-400'>
          <span className='pr-5'>-</span>

          VFEED
        </p>

        </div>

         <div className='flex' >
        <p className='w-48'>Social</p>
      <div className=' flex  text-gray-400 items-center pb-3 gap-2' > 
        <span className='pr-5'>-</span>
        <a href="/">
        <InstagramIcon sx={{fontSize:"3 rem"}}/>
        </a>
                <a href="/">
        <XIcon sx={{fontSize:"3 rem"}}/>
        </a>
                <a href="/">
        <LinkedInIcon sx={{fontSize:"3 rem"}}/>
        </a>
                <a href="/">
        <FacebookIcon sx={{fontSize:"3 rem"}}/>
        </a>
      </div>

        </div>

       
        
      </div>

      </CardContent>


      </CardHeader>
    </Card>


      </Grid>


    </Grid>
      </div>
  )
}

export default RestaurantDetails
