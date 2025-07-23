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

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import CreateIcon from '@mui/icons-material/Create';

const orders=[1,1,1,1,1,1]

const IngredientTable = () => {
  return (
    <Box>
        <Card className='mt-1'>
            <CardHeader action={
                <IconButton aria-label='settings'>
                  
                    <CreateIcon/>

                </IconButton>
            }
            title={"Menu"} sx={{pt:2,alignItems:"center"}}
            >

            </CardHeader>
           
             <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
      
            <TableCell align="left">Id</TableCell>
            <TableCell align="right">Name</TableCell>
             <TableCell align="right">Category</TableCell>
            <TableCell align="right">Availability</TableCell>
         
           
              
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
              <TableCell align="right">{"image"}</TableCell>
              <TableCell align="right">{"Komalwabl"}</TableCell>
              <TableCell align="right">{"price"}</TableCell>
              
        
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </Card>

    </Box>
  )
}

export default IngredientTable
