import React, { useState } from "react";
import "./App.css";
import IngredientList from "./Components/IngredientList";
import BurgerStack from "./Components/BurgerStack";

export const availableIngredients = [
  { name: "Kaiser Bun", color: "saddlebrown" },
  { name: "Sesame Bun", color: "sandybrown" },
  { name: "Gluten Free Bun", color: "peru" },
  { name: "Lettuce Wrap", color: "olivedrab" },
  { name: "Beef Patty", color: "#3F250B" },
  { name: "Soy Patty", color: "#3F250B" },
  { name: "Black Bean Patty", color: "#3F250B" },
  { name: "Chicken Patty", color: "burlywood" },
  { name: "Lettuce", color: "lawngreen" },
  { name: "Tomato", color: "tomato" },
  { name: "Bacon", color: "maroon" },
  { name: "Onion", color: "lightyellow" },
  { name: "Cheddar Cheese", color: "#FDE18B" },
  { name: "Swiss Cheese", color: "#F1E1A8" },
];

const App = () => {
  const [stack, setStack] = useState([]);

  function addIngredient(idx) {
    setStack((prevState) => [...prevState, availableIngredients[idx]]);
  }

  function minusIngredient(idx) {
    setStack((prevState) => [...prevState.filter((_, index) => idx !== index)]);
  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList
          ingredients={availableIngredients}
          name="+"
          onClick={addIngredient}
        />
        <BurgerStack
          addedIngredients={stack}
          name="-"
          onClick={minusIngredient}
        />
      </section>
    </main>
  );
};

export default App;
