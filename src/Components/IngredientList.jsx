import React from "react";

const IngredientList = ({ ingredients, name, onClick}) => {
  return (
    <ul>
      {ingredients.map((ingredient, idx) => {
        return (
          <li key={idx} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button type="button" onClick={()=>onClick(idx)}>{name}</button>
          </li>
        );
      })}
    </ul>
  );
};

export default IngredientList;
