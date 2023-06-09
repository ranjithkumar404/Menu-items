import React from 'react'

const Menu = ({ mitem }) => {
    return (
        <div>
            <div className="p-3 grid gap-5 ">
                {
                    mitem.map((i) => {
                        const { id, desc, title, img, price, category } = i;
                        return (
                            <div className="flex  w-[700px] h-[300px] hover:bg-yellow-200 hover:scale-105 duration-500 hover:rounded-md   gap-3 p-5 " key={id}>
                                <img className="w-[300px] rounded-md" sizes="" src={img} alt="" />
                                <div className=" space-y-4">
                                    <p className="text-2xl flex justify-between ">
                                        <p className="font-bold text-3xl">{title}</p>
                                        <p className='text-green-400 font-semibold'>${price}</p>
                                        <p></p>
                                    </p>
                                       <div className='w-[300px] bg-slate-400 h-[1px]'></div>
                                    <p className='text-xl'>{desc}</p>
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
