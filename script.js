// Sample recipe data
const recipes = [
    {
        id: 1,
        title: "Pasta Carbonara",
        ingredients: ["Spaghetti", "Eggs", "Bacon", "Parmesan", "Pepper"],
        instructions: "1. Cook spaghetti according to package instructions. 2. In a separate pan, cook bacon until crispy. 3. In a bowl, beat eggs and mix in grated Parmesan. 4. Drain cooked spaghetti and combine with bacon. 5. Pour egg mixture over spaghetti, stirring continuously until the eggs thicken. 6. Add pepper to taste. Enjoy!",
    },
    {
        id: 2,
        title: "Chocolate Chip Cookies",
        ingredients: ["Flour", "Sugar", "Butter", "Eggs", "Chocolate Chips"],
        instructions: "1. Preheat oven to 350°F (175°C). 2. In a large bowl, cream together butter and sugars. 3. Beat in eggs, one at a time. 4. Gradually add flour and mix well. 5. Stir in chocolate chips. 6. Drop rounded tablespoons of dough onto baking sheets. 7. Bake for 10-12 minutes or until golden brown. Let cool before serving.",
    },
];

// Function to display the recipe list
function displayRecipeList() {
    const recipeListElement = document.getElementById("recipeList");
    recipeListElement.innerHTML = ""; // Clear previous content

    for (let recipe of recipes) {
        const recipeItem = document.createElement("div");
        recipeItem.className = "recipeItem";
        recipeItem.textContent = recipe.title;

        // Add click event to show recipe details
        recipeItem.addEventListener("click", () => {
            displayRecipeDetails(recipe);
        });

        recipeListElement.appendChild(recipeItem);
    }
}

// Function to display recipe details
function displayRecipeDetails(recipe) {
        const recipeDetailsElement = document.getElementById("recipeDetails");
    recipeDetailsElement.innerHTML = ""; // Clear previous content

    const titleElement = document.createElement("h2");
    titleElement.textContent = recipe.title;

    const ingredientsElement = document.createElement("h3");
    ingredientsElement.textContent = "Ingredients";

    const ingredientsListElement = document.createElement("ul");
    for (let ingredient of recipe.ingredients) {
        const ingredientItem = document.createElement("li");
        ingredientItem.textContent = ingredient;
        ingredientsListElement.appendChild(ingredientItem);
    }

    const instructionsElement = document.createElement("h3");
    instructionsElement.textContent = "Instructions";

    const instructionsTextElement = document.createElement("p");
    instructionsTextElement.textContent = recipe.instructions;

    recipeDetailsElement.appendChild(titleElement);
    recipeDetailsElement.appendChild(ingredientsElement);
    recipeDetailsElement.appendChild(ingredientsListElement);
    recipeDetailsElement.appendChild(instructionsElement);
    recipeDetailsElement.appendChild(instructionsTextElement);
}

// Function to add a new recipe
function addRecipe() {
    const recipeTitle = document.getElementById("recipeTitle").value;
    const recipeIngredients = document.getElementById("recipeIngredients").value.split(",");
    const recipeInstructions = document.getElementById("recipeInstructions").value;

    const newRecipe = {
        id: recipes.length + 1,
        title: recipeTitle,
        ingredients: recipeIngredients,
        instructions: recipeInstructions,
    };

    recipes.push(newRecipe);
    displayRecipeList();
    clearForm();
}

// Function to clear the form fields
function clearForm() {
    document.getElementById("recipeTitle").value = "";
    document.getElementById("recipeIngredients").value = "";
    document.getElementById("recipeInstructions").value = "";
}

// Add event listener to the Add Recipe button
const addRecipeButton = document.getElementById("addRecipeButton");
addRecipeButton.addEventListener("click", addRecipe);

// Display initial recipe list
displayRecipeList();
