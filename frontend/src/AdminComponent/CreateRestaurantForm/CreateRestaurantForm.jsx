import React, { useState } from 'react'
import { Formik, useFormik } from 'formik';
import { Button, CircularProgress, Grid, IconButton, TextField } from '@mui/material';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import CloseIcon from '@mui/icons-material/Close';
import { uploadImageToCloudinary } from './../util/uploadToCloudinary';

const initialValues={
  name:"",
  description:"",
  cuisineType:"",
  streetAddress:"",
  city:"",
  stateProvience:"",
  postalCode:"",
  country:"",
  email:"",
  mobile:"",
  twitter:"",
  instagram:"",
  openingHourse:"Mon-Sun:9:00 Am-12:00 Pm",
  images:[]
  
}
const CreateRestaurantForm = () => {
  const [uploadImage,setUploadImage]=useState(false);

    const Formik=useFormik({
      initialValues,
      onSubmit:(values)=>{
        const data={
          name:values.name,
          description:values.description,
          cuisineType:values.cuisineType,
          streetAddress:{
            streetAddress:values.streetAddress,
            city:values.city,
            stateProvience:values.stateProvience,
            postalCode:values.postalCode,
            country:values.country
          },
          contactInformation:{
            email:values.email,
          mobile:values.mobile,
          twitter:values.twitter,
          instagram:values.instagram
          },
          openingHourse:values.openingHourse,
          images:values.images,


        };

        console.log("data",data)
      },
    });

    

    const handleImageChange=async(e)=>{
      const file=e.target.files[0]

      setUploadImage(true)
      const image=await uploadImageToCloudinary(file)
      Formik.setFieldValue("images",[...Formik.values.images,image]);
   
      setUploadImage(false)
    };
    const handleImageRemove=(index)=>{

      const updatedImages=[...Formik.values.images]

      updatedImages.splice(index,1);

      Formik.setFieldValue("images",updatedImages)
    };
  return (
    <div className='py-10 px-5 lg:flex items-center justify-center min-h-screen'>  
    <div className='lg:max-w-4xl'>
        <h1 className='font-bold text-2xl text-center py-2'>
        Add New Restaurant

      </h1>

      <form onSubmit={Formik.handleSubmit} className='space-y-4'>
        <Grid container spacing={2}>
            <Grid className='flex flex-wrap gap-5' item xs={12} >

                <input type="file" 
                accept='image/*'
                id='fileInput'
                style={{display:"none"}}
                onChange={handleImageChange}
                ></input>

                <label className='relative' htmlFor='fileInput'>
                <span className='w-24 h-24 cursor-pointer flex items-center
                p-3 border rounded-md border-gray-600'>
                  <AddPhotoAlternateIcon className='text-white'/>
                </span>

                {
                  uploadImage &&  <div className='absolute left-0 right-0 top-0 bottom-0 w-24 flex
                  justify-center items-center  '>
                    <CircularProgress/>

                  </div> 
                }

                </label>
                <div className='flex flex-wrap gap-2'>
                  {Formik.values.images.map((image,index)=><div className='relative'>
                    <img 
                      src={image} alt="images"  className='w-24 h-24 object-cover' />
                  <IconButton 
                  size='small'
                  sx={{
                    position:'absolute',
                    top:0,
                    right:0,
                    outline:"none"
                  }}
                  
                  onClick={()=>handleImageRemove(index)}>
                    <CloseIcon sx={{fontSize:"1 rem"}}>

                    </CloseIcon>
                  </IconButton>
                  </div>)}

                </div>
            </Grid>

                  <Grid item xs={12} >
                    <TextField fullWidth 
                    id='name'
                    name='name'
                    label="Name"
                    variant='outlined'
                    onChange={Formik.handleChange}
                    value={Formik.values.name}
                    ></TextField>


                  </Grid>

                   <Grid item xs={12} >
                    <TextField fullWidth 
                    id='description'
                    name='description'
                    label="Description"
                    variant='outlined'
                    onChange={Formik.handleChange}
                    value={Formik.values.description}
                    ></TextField>


                  </Grid>

                   <Grid item xs={12} lg={6}>
                    <TextField fullWidth 
                    id='cuisineType'
                    name='cuisineType'
                    label="CuisineType"
                    variant='outlined'
                    onChange={Formik.handleChange}
                    value={Formik.values.cuisineType}
                    ></TextField>


                  </Grid>

                   <Grid item xs={12} lg={6} >
                    <TextField fullWidth 
                    id='openingHours'
                    name='openingHours'
                    label="Opening Hours"
                    variant='outlined'
                    onChange={Formik.handleChange}
                    value={Formik.values.openingHourse}
                    ></TextField>


                  </Grid>
                     <Grid item xs={12} >
                    <TextField fullWidth 
                    id='streetAddress'
                    name='streetAddress'
                    label="Street Address "
                    variant='outlined'
                    onChange={Formik.handleChange}
                    value={Formik.values.streetAddress}
                    ></TextField>


                  </Grid>

                   <Grid item xs={12} >
                    <TextField fullWidth 
                    id='city'
                    name='city'
                    label="City  "
                    variant='outlined'
                    onChange={Formik.handleChange}
                    value={Formik.values.city}
                    ></TextField>


                  </Grid>

                   <Grid item xs={12} lg={4} >
                    <TextField fullWidth 
                    id='stateProvince'
                    name='stateProvince'
                    label="State  "
                    variant='outlined'
                    onChange={Formik.handleChange}
                    value={Formik.values.stateProvience}
                    ></TextField>


                  </Grid>

                    <Grid item xs={12} lg={4} >
                    <TextField fullWidth 
                    id='postalCode'
                    name='postalCode'
                    label="Postal Code"
                    variant='outlined'
                    onChange={Formik.handleChange}
                    value={Formik.values.postalCode}
                    ></TextField>


                  </Grid>

                  <Grid item xs={12} lg={4} >
                    <TextField fullWidth 
                    id='country'
                    name='country'
                    label="Country  "
                    variant='outlined'
                    onChange={Formik.handleChange}
                    value={Formik.values.country}
                    ></TextField>


                  </Grid>

                  <Grid item xs={12} lg={6}>
                    <TextField fullWidth 
                    id='email'
                    name='email'
                    label="Email  "
                    variant='outlined'
                    onChange={Formik.handleChange}
                    value={Formik.values.email}
                    ></TextField>


                  </Grid>

                   <Grid item xs={12} lg={6} >
                    <TextField fullWidth 
                    id='mobile'
                    name='mobile'
                    label="Mobile  "
                    variant='outlined'
                    onChange={Formik.handleChange}
                    value={Formik.values.mobile}
                    ></TextField>


                  </Grid>

                    <Grid item xs={12} lg={6} >
                    <TextField fullWidth 
                    id='instagram'
                    name='instagram'
                    label="Instagram  "
                    variant='outlined'
                    onChange={Formik.handleChange}
                    value={Formik.values.instagram}
                    ></TextField>


                  </Grid>

                  <Grid item xs={12} lg={6} >
                    <TextField fullWidth 
                    id='twitter'
                    name='twitter'
                    label="Twitter  "
                    variant='outlined'
                    onChange={Formik.handleChange}
                    value={Formik.values.twitter}
                    ></TextField>


                  </Grid>
                  
        </Grid>


        <Button className='' variant='conatined' color='primary' type='submit'>Create Restaurant</Button>

      </form>
    </div>
    </div>
  )
}

export default CreateRestaurantForm
