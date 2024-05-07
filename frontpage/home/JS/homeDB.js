let recipeFromId = 

insertIntoDB('Jon', 'Jon')

function insertIntoDB(_recipe, _ingredient, _instruction) {
    const indexedDB =
    window.indexedDB

  const request = indexedDB.open('RecipeDatabase', 2);

  request.onerror = function (event) {
    console.log('error: ' + event.target.errorCode);
  };
  
  request.onupgradeneeded = function(event) {
    const db = event.target.result;
  
    if (db.objectStoreNames.contains('Recipes')) {
      db.deleteObjectStore('Recipes');
    }  
    const store = db.createObjectStore('Recipes', { keyPath: 'id', autoIncrement: true });
  
    store.createIndex("recipe_name", ["name"], { unique: false });
    store.createIndex("ingredients", ["ingredients"], { unique: false });
    store.createIndex("instructions", ["instructions"], { unique: false });
  };


  request.onsuccess = function (event) {
    const db = event.target.result;

    const transaction = db.transaction('Recipes', 'readwrite');
  const store = transaction.objectStore('Recipes');
  const recipe = {name: _recipe, ingredients: _ingredient, instructions: _instruction };
  const request = store.add(recipe);

  request.onsuccess = function(event) {
    console.log('Recipe added with ID', event.target.result);
  };

  transaction.oncomplete = function() {
    db.close();
  };
};
}


  