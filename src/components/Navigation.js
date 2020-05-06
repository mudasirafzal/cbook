import React from 'react';


const Navigation = ({recipes, recipeToSelect}) => {
  /*constructor(props) {
    super(props);
    this.changeRecipe = this.changeRecipe.bind(this);
  }*/

  const changeRecipe = (e) => {
    const recipeId = e.target.id;
    recipeToSelect(recipeId);
  }
  
    return (
      <div className="Navigation">
        <nav>
          <ul>
            { recipes ? 
              recipes.map((recipe) => 
                <li>
                  <button 
                    id={recipe.id} 
                    key={recipe.id}
                    onClick={changeRecipe} 
                  >
                    {recipe.name}
                  </button>
                </li>
              ) : ""
            }
          </ul>
        </nav>
      </div>
    );

}
export default Navigation;
