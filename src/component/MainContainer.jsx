import React, { useEffect, useState } from 'react'
import HomeContent from './HomeContent'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { motion } from 'framer-motion';
import RowContainer from './RowContainer';
import { useStateValue } from '../context/StateProvider';

  const MainContainer = () => {
  const [{ foodItems }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);
  useEffect(() => {}, [scrollValue]);
  return (

    <div className='w-full h-auto flex flex-col items-center justify-center'> 
      <HomeContent/>
      <section className="w-full my-6">
      <div className="flex w-full items-center justify-between">
      <p className="relative text-2xl text-headingColor font-semibold capitalize
          before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100"
          >
            Our fresh & healthy fruits
          </p>
          <div className="hidden md:flex gap-3 items-center">
          <motion.div onClick={() => setScrollValue(-700)} whileTap={{ scale: 0.75 }} className="flex w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 transition-all duration-100 ease-in-out hover:shadow-lg cursor-pointer items-center justify-center"><MdChevronLeft className="text-lg text-white" /></motion.div>
          <motion.div onClick={() => setScrollValue(700)} whileTap={{ scale: 0.75 }} className="flex w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 transition-all duration-100 ease-in-out hover:shadow-lg cursor-pointer items-center justify-center"><MdChevronRight className="text-lg text-white" /></motion.div>
        </div>
      </div>
      <RowContainer 
      flag={true} 
      data={foodItems?.filter(n=>n.category === "drinks")}
      scrollValue={scrollValue}
      />

      </section>
    </div>
  )
}

export default MainContainer
