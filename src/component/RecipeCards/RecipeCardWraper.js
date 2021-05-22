import React,{useEffect,useState} from 'react'
import RecipeCard from './RecipeCards'
import './RecipeCards.css'
const Api_key='a7f0fc6702f94726a4f752b473d5960c'
function RecipeCardWraper(props) {
const[recipes,setRecipes]=useState([])
useEffect(()=>{
   if(props.selectedContry){
       fetchRecipe();
   }
},[props.selectedContry])

let fetchRecipe=async ()=>{
    let response=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${Api_key}&cuisine=${props.selectedContry}&addRecipeInformation=true&number=1`)
    let recipeData=await response.json()
    setRecipes(recipeData.results)
}

    return (
        <div className="RecipeCardWraper">
            {recipes.map(recipe=><RecipeCard key={recipe.id} recipe={recipe} />)}
        </div>
    )
}

export default RecipeCardWraper
