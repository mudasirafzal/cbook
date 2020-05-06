import React from 'react';


const Recipe = (props) => {
  //console.log(props);
    const {name, description, author}= props.recipe;
    return (
      <div className="Recipe">
          {name} <br></br>
          {description} <br></br>
          {author}
      </div>
    );
  
}
export default Recipe;
