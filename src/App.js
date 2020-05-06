import React, { useState, useEffect } from 'react';

import Recipe from './components/Recipe';
import Navigation from './components/Navigation';
const recipeData = [
	{
		name: "Chicken Curry",
    description: "Delicious chicken with spicy gravy",
    author: "Matt F",
    id: 'chicken'
	},
  {
  	name: "Mutton Curry",
    description: "Fresh pieces of mutton in a warm gravy",
    author: "Bill",
    id: 'mutton'
  }
];

const App = () => {

  const [recipes, setRecipes] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState('chicken');
  useState(() => {
    setRecipes(recipeData);
    setSelectedRecipe('chicken')
  }),[];

  const selectNewRecipe = (recipeId) => {
    
      if(recipeId) {
        setSelectedRecipe(recipeId)
      }
    
  }
  
//console.log(selectedRecipe);
     let recipeToSelect;
  
     const filteredRecipes = Object.keys(recipes).filter((recipeKey) => recipes[recipeKey].id === selectedRecipe);  
     //const filteredRecipes = Object.keys(recipes).filter((recipe) => recipe.id === selectedRecipe);
     console.log(recipes[filteredRecipes]) 
     recipeToSelect = recipes[filteredRecipes];
     
    
    return (
      <div className="App">
        <aside className='sidebar'>
          <h1 className='sidebar__title'>Recipe Book</h1>
          {  <Navigation 
            recipes={recipes}
            
            recipeToSelect={selectNewRecipe}
          />  }
        </aside>
        
        { 
          recipeToSelect ? 
            <Recipe
            recipe={recipeToSelect}
            />
            :
            null
        }
      </div>
    );
  
}

export default App;
