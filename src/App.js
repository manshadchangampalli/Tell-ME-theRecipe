import React,{useState} from 'react'
import './App.css'
import Header from './component/Header/Header'
import RecipeCardWraper from './component/RecipeCards/RecipeCardWraper'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import RecipeDetails from './component/recipeDetails/recipeDetails'

function App() {
  const[recipe,setRecipe] =useState(null)
  const recipeButtonClicked =(contry)=>{
    // console.log(contry);
    setRecipe(contry)
  }
  return (
    <Router>
    <div className="body">
      <Header recipeButtonClicked={recipeButtonClicked}/>
      <RecipeCardWraper selectedContry={recipe} />
      <Switch>
        <Route path="/recipe/:recipeID">
          <RecipeDetails />
        </Route>
      </Switch>
    </div>
    </Router>
  )
}

export default App
