import React from 'react'
import delivery from "../img/delivery.png";
import heroBg from "../img/heroBg.png";
// import i1 from "../img/i1.png";
import { heroProductData } from "../utils/data";


const HomeContent = () => {
    return (

        <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full mt-5' id='home' >

            <div className='py-2 flex-1 flex flex-col items-start  justify-center gap-2'>
                <div className='flex items-center gap-2 justify-center bg-orange-100 rounded-full p-2'>
                    <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
                    <div className='w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl'>
                        <img className='w-full h-full object-contain' src={delivery} alt="" />
                    </div>
                </div>
                <p className='text-[2rem] font-bold tracking-wide'>The Fastest Delivery in <span className='text-orange-500'>Food</span></p>
                <p className='text-base text-textColor'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure perferendis et nihil nam dolore culpa eius laborum illum dolor, nulla tenetur, temporibus hic aspernatur optio cum eaque quis ipsa! Repudiandae!</p>
                <button className='bg-gradient-to-br from-orange-400 to-orange-600 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>Order Now</button>
            </div>
            
                <div className='w-full flex items-center justify-center relative'>
                <img src={heroBg} alt="" className="ml-auto w-full h-420 lg:w-auto lg:h-650" />
                <div className="flex w-full h-full absolute top-0 left-0 flex-wrap gap-4 lg:px-32 py-4 items-center justify-center">
                    {heroProductData && heroProductData.map(
                        n => (
                            <div className="lg:w-190 p-4 bg-cardOverlay backdrop:blur-md rounded-md items-center justify-center flex flex-col">
                        <img src={n.imageSrc} alt='img' className='w-20 lg::w-40 -mt-10 lg:-mt-20' />
                        <p className="text-base lg:text-lg mt-2 lg:mt-4 font-semibold text-textColor my-1">{n.name}
                        </p>
                        <p className="text-[13px] font-semibold text-lighttextGray my-1 lg:my-3">
                            {n.name}
                        </p>
                        <p className="text-sm font-semibold text-headingColor">{n.price}
                            <span className="text-ts text-red-600"> đồng</span>
                        </p>

                    </div>
                        )
                    )}
                </div>
            </div>
            
            


        </section>

    )
}

export default HomeContent
