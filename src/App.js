
import { Route, Routes } from 'react-router-dom';
import {AnimatePresence} from "framer-motion";
import './App.css';
import Header from './component/Header';
import MainContainer from "../src/component/MainContainer";
import CreateContainer from "../src/component/CreateContainer";
import { getAllFoodItems } from './utils/firebaseFunctions';
import { useEffect } from 'react';
import { useStateValue } from './context/StateProvider';
import { actionType } from './context/reducer';
function App() {
  const [{foodItems }, dispatch] = useStateValue();
  const fetchData = async () => {
    await getAllFoodItems().then(data => {
      // console.log(data);
      dispatch({
        type: actionType.SET_FOOD_ITEMS,
        foodItems: data,
      });
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AnimatePresence mode="wait">
      <div className='w-full h-auto flex flex-col '>
        <Header />
        <main className="mt-16 md:mt-24 p-8 w-full">
          <Routes>
            <Route path="/" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>

  );
}

export default App;
