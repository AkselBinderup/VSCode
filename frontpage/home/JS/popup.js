function getRecipeData() {
    const db = indexedDB.open('RecipeDatabase', 2);
  
    db.onupgradeneeded = function(event) {
      const db = event.target.result;
      const store = db.createObjectStore('Recipes', { keyPath: 'id', autoIncrement: true });
      store.createIndex("recipe_name", ["name"], { unique: false });
      store.createIndex("ingredients", ["ingredients"], { unique: false });
      store.createIndex("instructions", ["instructions"], { unique: false });
    };
  
    db.onsuccess = function(event) {
      const db = event.target.result;
      const transaction = db.transaction('Recipes', 'readonly');
      const store = transaction.objectStore('Recipes');
      const request = store.getAll();
        
      request.onsuccess = function(event) {
        const recipes = event.target.result;
        displayRecipe(recipes);
      };
    };
}
  
  function displayRecipe(recipes) {
    const recipeList = document.getElementById('recipe-list');
  
    recipes.forEach(recipe => {
      const listItem = document.createElement('li');
      const recipeName = document.createElement('h2');
      recipeName.textContent = recipe.name;
      listItem.appendChild(recipeName);
      console.log("11111");
      const recipeIngredients = document.createElement('p');
      recipeIngredients.textContent = recipe.ingredients.join(', ');
      listItem.appendChild(recipeIngredients);
  
      const recipeInstructions = document.createElement('ol');
      recipe.instructions.forEach(instruction => {
        const listElement = document.createElement('li');
        listElement.textContent = instruction;
        recipeInstructions.appendChild(listElement);
      });
      listItem.appendChild(recipeInstructions);
  
      recipeList.appendChild(listItem);
    });
  }
  
  getRecipeData();