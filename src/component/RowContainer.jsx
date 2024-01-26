import React, { useEffect, useRef } from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion';
import { data } from 'autoprefixer';


    const RowContainer = ({ flag, data, scrollValue }) => {
        // console.log(data);
        const rowContainerRef = useRef();
        useEffect(() => {
        rowContainerRef.current.scrollLeft += scrollValue;
    }, [scrollValue]);


    return (
        <div ref={rowContainerRef} className={`w-full my-8 flex bg-rowBg ${flag ? 'overflow-x-hidden scrollbar-none' : 'overflow-x-hidden flex-wrap'}`}>
            {data && data.map(item => (
                <div key={item.id} className="w-275 h-[195px] min-w-[275px] md:w-300 md:min-w-[300px] bg-cardOverlay rounded-lg py-2 px-4 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative">
                    <div className="flex w-full items-center justify-between">
                        <motion.div whileHover={{ scale: 1.2 }}
                            className='w-40 h-40 -mt-8 drop-shadow-2xl'
                        >
                            <img src={item?.imageURL}
                                alt='' className="w-full h-full object-contain" />

                        </motion.div>
                        <motion.div whileTap={{ scale: 0.75 }} className="mx-3 flex w-8 h-8 rounded-full bg-red-600 hover:shadow-md cursor-pointer items-center justify-center">
                            <MdShoppingBasket className="text-white" />
                        </motion.div>
                    </div>
                    <div className="absolute bottom-0 right-2 flex flex-col w-full items-end justify-end">
                        <p className="text-base md:text-lg font-semibold text-textColor ">
                            {item?.title}
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                            {item?.category}
                        </p>
                        <div className="flex gap-8 items-center">
                            <p className="text-lg font-semibold text-headingColor">
                                <span className="text-sm text-red-500">$</span> {item?.price}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RowContainer
