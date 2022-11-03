import { useState } from "react";
import { Divider, Input } from 'antd';


function AddFoodForm({props}) {

//!ESTADOS
const [ nameInput, setNameInput] = useState("")
const [ imageInput, setImageInput ] = useState("")
const [ caloriesInput, setCaloriesInput ] = useState()
const [ servingsInput, setServingInput ] = useState()

const addOneFood = (event) => {
    event.preventDefault()


    const eachAddFood = {
        name: nameInput,
        image: imageInput,
        calories: caloriesInput,
        servings: servingsInput
    }
    
    props.addFood(eachAddFood)


}

const handleChangeName = (event) => {
    setNameInput(event.target.value)
}

const handleChangeImage = (event) => {
    setImageInput(event.target.value)
}

const handleChangeCalories = (event) => {
    setCaloriesInput(event.target.value)
}

const handleChangeServing = (event) => {
    setServingInput(event.target.value)
}

return (
    <div>
    <Form>
      <Divider>Add Food Entry</Divider>

      <label htmlFor="name">Name</label>
      <Input value={nameInput} type="text" name="name" onChange={(handleChangeName) => {}} />

      <label htmlFor="image">Image</label>
      <Input value={imageInput} type="text" name="image" onChange={(handleChangeImage) =>{}} />

      <label htmlFor="calories">Calories</label>
      <Input value={caloriesInput} type="number" name="calories" onChange={(handleChangeCalories) =>{}} />

      <label htmlFor="servings">Servings</label>
      <Input value={servingsInput} type="number" name="servings" onChange={(handleChangeServing) =>{}} />

      <button onClick={addOneFood}>Create</button>
    </Form>
    </div>
);

}

export default AddFoodForm;