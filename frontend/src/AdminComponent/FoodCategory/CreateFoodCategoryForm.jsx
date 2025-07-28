import React from 'react'

const CreateFoodCategoryForm = () => {
    const handlesubmit = (e) => {
    };
  return (
    <div className=''>
        <div className='p-5'>
            <h1 className='text-grey-400 text-center text-xl pb-10'>
                create new food category
            </h1>
            <form onSubmit={handlesubmit} >
            </form>

        </div>
       </div>
  )
}

export default CreateFoodCategoryForm
