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