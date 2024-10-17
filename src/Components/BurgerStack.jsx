import React from "react";

const BurgerStack = ({ addedIngredients, name, onClick }) => {
  return (
    <ul>
      {addedIngredients.map((ingredient, idx) => {
        return (
          <li key={idx} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={()=>onClick(idx)}>{name}</button>
          </li>
        );
      })}
    </ul>
  );
};

export default BurgerStack;
