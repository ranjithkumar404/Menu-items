import React from 'react'

const Category = ({myCat}) => {
  return (
    <div className='flex justify-center space-x-4 items-center'>
          <button className='bg-yellow-400 p-3 hover:scale-105 duration-200  text-white  rounded-lg' onClick={() => myCat('')}>All</button>
      <button className='bg-yellow-400 hover:scale-105 duration-200 p-3 text-white  rounded-lg' onClick={()=>myCat('breakfast')}>Breakfast</button>
          <button className='bg-yellow-400 hover:scale-105 duration-200 p-3 text-white  rounded-lg' onClick={() => myCat('shakes')}>Shakes</button>
          <button className='bg-yellow-400 hover:scale-105 duration-200 p-3 text-white  rounded-lg' onClick={() => myCat('lunch')}>Lunch</button>
    </div>
  )
}

export default Category
