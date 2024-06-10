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
      const link = document.createElement("a");
      link.textContent = recipe.name;
     link.href = "popup.html";
     link.dataset.instructions = recipe.instructions;
     listItem.appendChild(link);
     searchResults.appendChild(listItem);;
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