let recipes = 
[ { name: 'spaghetti bolognese' }, 
{ name: 'Æble' },
{ name: 'Skyr' },
{ name: 'Kylling' },
{ name: 'Oksekød' },
{ name: 'Hot dog' },
{ name: 'Tærte' },
{ name: 'Blæksprutte' },
{ name: 'Ris' }, ];

function filterList() {
  const searchBox = document.getElementById('search-box');
  const searchResults = document.getElementById('searchResults');

  const searchTerm = searchBox.value.toLowerCase();
  const matchingRecipes = recipes.filter(x => x.name.toLowerCase().includes(searchTerm));

  if (searchTerm === "") {
    searchResults.style.display = 'none';
    return;
  }

  renderRecipes(matchingRecipes);

  function renderRecipes(recipes) {
    searchResults.innerHTML = "";
    recipes.forEach(recipe => {
      const listItem = document.createElement("li");
      listItem.textContent = recipe.name;
      searchResults.appendChild(listItem);
    });

    for (let i = 0; i < searchResults.children.length; i++) {
      const listItem = searchResults.children[i];
      const itemText = listItem.textContent.toLowerCase();

      if (itemText.includes(searchTerm)) {
        listItem.style.display = 'block';
      } else {
        listItem.style.display = 'none';
      }
    }

    if (searchResults.hasChildNodes()) {
      searchResults.style.display = 'block';
    } else {
      searchResults.style.display = 'none';
    }
  }
}

const createBtn = document.getElementById('create-recipe-button');
const form = document.getElementById('recipe-form');
const nameInput = document.getElementById('recipe-name');
const ingredientsInput = document.getElementById('recipe-ingredients');
const instructionsInput = document.getElementById('recipe-instructions');
const submitBtn = document.getElementById('submit-recipe-button');
const container = document.getElementById('recipe-container');
const recipe = document.getElementById('recipe');

createBtn.addEventListener('click', () => {
  form.style.display = 'block';
 });
 
 submitBtn.addEventListener('click', () => {
  const name = nameInput.value;
  const ingredients = ingredientsInput.value.split('\n');
  const instructions = instructionsInput.value.split('\n');
 
  const recipeIngredientsElement = document.createElement('ul');
  ingredients.forEach(ingredient => {
  const ingredientElement = document.createElement('li');
  ingredientElement.textContent = ingredient;
  recipeIngredientsElement.appendChild(ingredientElement);
  });
  recipe.appendChild(recipeIngredientsElement);
 
  const recipeInstructionsElement = document.createElement('ol');
  instructions.forEach(instruction => {
  const instructionElement = document.createElement('li');
  instructionElement.textContent = instruction;
  recipeInstructionsElement.appendChild(instructionElement);
  });
  recipe.appendChild(recipeInstructionsElement);
 
  container.appendChild(recipe);
  
  nameInput.value = '';
  ingredientsInput.value = '';
  instructionsInput.value = '';
  form.style.display = 'none';
  recipe.style.display = 'none';
 });