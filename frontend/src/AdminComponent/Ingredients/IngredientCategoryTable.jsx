import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';


import IconButton from '@mui/material/IconButton';

import CreateIcon from '@mui/icons-material/Create';

const orders=[1,1,1,1,1,1]

const IngredientCategoryTable = () => {
  return (
    <Box>
        <Card className='mt-1'>
            <CardHeader action={
                <IconButton aria-label='settings'>
                  
                    <CreateIcon/>

                </IconButton>
            }
            title={"Ingredient Category"} sx={{pt:2,alignItems:"center"}}
            >

            </CardHeader>
           
             <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
      
            <TableCell align="left">Id</TableCell>
            <TableCell align="left">Name</TableCell>
           
              
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {1}
              </TableCell>
              <TableCell align="right">{"name"}</TableCell>
             
        
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </Card>

    </Box>
  )
}

export default IngredientCategoryTable
