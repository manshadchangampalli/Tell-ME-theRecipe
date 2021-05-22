import React from 'react'
import './RecipeCards.css'
import {Group, Time} from '../../Assets';

function RecipeCards(props) {
    let {recipe}=props
    return (
        <div className="cards">
            <img className="recipeImage" src={recipe.image} alt="image" />
            <h3>{recipe.title}</h3>
            <div className="cardInfo">
                <div className="Time">
                <Time/>
                <span >{recipe.readyInMinutes} mins</span>
                </div>

                <div className="Group"> <Group/>
                <span>{recipe.servings} peoples</span>
                </div>
               
            </div>
        </div>
    )
}

export default RecipeCards
