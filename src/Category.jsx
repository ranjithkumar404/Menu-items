import React from 'react'

const Category = ({myCat}) => {
  return (
    <div className='flex justify-between items-center'>
          <button className='bg-yellow-400 p-3 text-white  rounded-lg' onClick={() => myCat('')}>All</button>
      <button className='bg-yellow-400 p-3 text-white  rounded-lg' onClick={()=>myCat('breakfast')}>Breakfast</button>
    </div>
  )
}

export default Category
