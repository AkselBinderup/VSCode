let db;

function openDB() {
  const request = indexedDB.open('RecipeDatabase', 2);

  request.onerror = function(event) {
    console.log('error: ' + event.target.errorCode);
  };

  request.onupgradeneeded = function(event) {
    db = event.target.result;

    if (db.objectStoreNames.contains('Recipes')) {
      db.deleteObjectStore('Recipes');
    }

    const store = db.createObjectStore('Recipes', { keyPath: 'id', autoIncrement: true });

    store.createIndex("recipe_name", ["name"], { unique: false });
    store.createIndex("ingredients", ["ingredients"], { unique: false });
    store.createIndex("instructions", ["instructions"], { unique: false });
  };

  request.onsuccess = function(event) {
    db = event.target.result;
    console.log('Database opened successfully');
  };
}

function insertRecipe(recipe) {
  const transaction = db.transaction('Recipes', 'readwrite');
  const store = transaction.objectStore('Recipes');
  const request = store.add(recipe);

  request.onsuccess = function(event) {
    console.log('Recipe added with ID', event.target.result);
  };
}

function getAllRecipes() {
  const transaction = db.transaction('Recipes', 'readonly');
  const store = transaction.objectStore('Recipes');
  const request = store.getAll();

  request.onsuccess = function(event) {
    const recipes = event.target.result;
    renderRecipes(recipes);
  };
}

openDB();

const recipeToAdd = { name: 'Spaghetti Bolognese', ingredients: ['spaghetti', 'ground beef', 'tomato sauce'], instructions: ['Cook spaghetti', 'Brown ground beef', 'Combine sauce and beef'] };
insertRecipe(recipeToAdd);

getAllRecipes();