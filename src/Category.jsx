import React from 'react'

const Category = ({myCat}) => {
  return (
    <div className='flex justify-around items-center'>
          <button className='bg-yellow-400 p-3 text-white  rounded-lg' onClick={() => myCat('')}>All</button>
      <button className='bg-yellow-400 p-3 text-white  rounded-lg' onClick={()=>myCat('breakfast')}>Breakfast</button>
          <button className='bg-yellow-400 p-3 text-white  rounded-lg' onClick={() => myCat('shakes')}>Shakes</button>
          <button className='bg-yellow-400 p-3 text-white  rounded-lg' onClick={() => myCat('lunch')}>Lunch</button>
    </div>
  )
}

export default Category
