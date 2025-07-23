import Grid from '@mui/material/Grid'
import React from 'react'
import IngredientTable from './IngredientTable';
import IngredientCategoryTable from './IngredientCategoryTable';

const Ingredients = () => {
  return (
    <div className='px-2'>
    <Grid container spacing={2}>
        <Grid item xs={12} lg={8}></Grid>
        <IngredientTable/>
         <Grid item xs={12} lg={4}></Grid>
        <IngredientCategoryTable/>
    </Grid>
    </div>
  )
}

export default Ingredients
