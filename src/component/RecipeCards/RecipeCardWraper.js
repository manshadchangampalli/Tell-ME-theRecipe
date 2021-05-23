import React,{useEffect,useState} from 'react'
import RecipeCard from './RecipeCards'
import './RecipeCards.css'
import {useLocation} from 'react-router-dom'



const Api_key='a7f0fc6702f94726a4f752b473d5960c'

function RecipeCardWraper(props) {
let  urlState = useLocation().state;

const[recipes,setRecipes]=useState([])
useEffect(()=>{
   if(props.selectedContry){
       fetchRecipe();
   }
},[props.selectedContry])

let fetchRecipe=async ()=>{
    let response=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${Api_key}&cuisine=${props.selectedContry}&addRecipeInformation=true&number=10`)
    let recipeData=await response.json()
    setRecipes(recipeData.results)
}

    return (
        <div className="container">
        <div className="RecipeCardWraper"
        style={{width: urlState&&urlState.hasDetails?'60%':'100%'}}
        >

            {recipes.map(recipe=><RecipeCard key={recipe.id} recipe={recipe} />)}
        </div>
        </div>
    )
}

export default RecipeCardWraper
