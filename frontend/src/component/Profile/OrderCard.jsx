import { Card } from '@mui/material'
import React from 'react'
import { Button } from '@mui/material'

export const OrderCard = () => {
  return (
   <Card className='flex justify-between items-center p-5'>

    <div className='flex items-center space-x-5'>
        <img className="h-16 w-16" src="/Food/biryani_1.jpg" alt="biryani" />

        <div>
          <p>Biryani</p>
          <p>$399</p>
        </div>
    </div>
    <div>
      <Button className="cursor-not-allowed">
        completed
      </Button>
    </div>
   </Card>
  )
}
