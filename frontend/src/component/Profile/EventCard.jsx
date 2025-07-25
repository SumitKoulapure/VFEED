import { CardActions, IconButton, Typography } from '@mui/material'
import React from 'react'
import {Card} from '@mui/material'
import {CardMedia} from '@mui/material'
import {CardContent} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

export const EventCard = () => {
  return (
    <div>
        <Card sx={{width:345}}>
            <CardMedia 
            
            sx={{height:345}}
            image="https://media.istockphoto.com/id/613754552/photo/buffet-dinner-dining-food-celebration-party-concept.jpg?s=612x612&w=0&k=20&c=JqDj405x2OoVJqbWtYw1EztFNipTTAi1n5XQvJzigQw="/>
            
        

        <CardContent>
            <Typography variant='h5'>
                Indian Fast Food
            </Typography>
            <Typography variant='h5'>
                50% off on your first order
            </Typography>
            <div className='py-2 space-y-2'>
                <p>{"Pune"}</p>
                <p className='text-sm text-blue-500'>20 August, 2025 8:00 AM</p>
                <p className='text-sm text-red-500'>21 August, 2025 5:00 PM</p>

            </div>
        </CardContent>

   {false &&    <CardActions>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </CardActions> }
      </Card>
    </div>
  )
}
