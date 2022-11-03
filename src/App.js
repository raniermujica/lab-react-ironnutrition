import { useState } from "react";
import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import FoodList from './components/FoodList';
import FoodBox from './components/FoodBox';
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";


function App() {
  const [initialFood, setFood] = useState(foods)

  const filterSearch = (filterQuery) => {
    const filteredFood = initialFood.filter((eachFood) => {
      return eachFood.name.startsWith(filterQuery)
    })
    setShowFilter(filteredFood)
  }

  return (
  
    <div className="App">
      <h2>Food List</h2>
      
       
      <AddFoodForm addFood={addOneFood}/> 
     
      <Search filterSearch={filterSearch}/>
      
      
      
      
  {initialFood.map((foods, index) => {
    return (
      <FoodBox
      food={{
        name: foods.name,
        calories: foods.calories,
        image: foods.image,
        servings: foods.servings,
      }}
      />
    )
    
  })}
  </div>
)

}

  



export default App;
