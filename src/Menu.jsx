import React from 'react'

const Menu = ({mitem}) => {
  return (
    <div>
          <div className="p-3 grid gap-5 ">
              {
                  mitem.map((i) => {
                      const { id, desc, title, img, price, category } = i;
                      return (
                          <div className="flex  w-[700px] h-[300px]   gap-3 p-5 bg-yellow-200" key={id}>
                              <img className="w-[300px] rounded-md" sizes="" src={img} alt="" />
                              <div className=" space-y-4">
                                  <p className="text-2xl flex justify-between ">
                                      <p className="">{title}</p>
                                      <p>${price}</p>
                                      <p></p>
                                  </p>

                                  <p>{desc}</p>
                              </div>
                          </div>
                      )
                  })
              }
          </div>
    </div>
  )
}

export default Menu
