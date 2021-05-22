import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div className="header">
      <div className="logo">
        <h3>
          TellMe<span>Receipes</span>
        </h3>
      </div>
      <div className="navlinks">
        <ul>
          <li onClick={(e) => props.recipeButtonClicked("Italian")}>
            {" "}
            Italian
          </li>
          <li onClick={(e) => props.recipeButtonClicked("Arabian")}>Arabian</li>
          <li onClick={(e) => props.recipeButtonClicked("Indian")}>Indian</li>
          <li onClick={(e) => props.recipeButtonClicked("Mediterranean")}>
            Mediterranean
          </li>
          <li onClick={(e) => props.recipeButtonClicked("Spanish")}>Spanish</li>
          <li onClick={(e) => props.recipeButtonClicked("Chinese")}>Chinese</li>

          
        </ul>
      </div>
    </div>
  );
}

export default Header;
