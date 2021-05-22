import React,{useState} from 'react'
import './App.css'
import Header from './component/Header/Header'
import RecipeCardWraper from './component/RecipeCards/RecipeCardWraper'

function App() {
  const[recipe,setRecipe] =useState(null)
  const recipeButtonClicked =(contry)=>{
    // console.log(contry);
    setRecipe(contry)
  }
  return (
    <div>
      <Header recipeButtonClicked={recipeButtonClicked}/>
      <RecipeCardWraper selectedContry={recipe} />
    </div>
  )
}

export default App
