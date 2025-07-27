function displayRecipe(respose){
    new Typewriter("#recipe", {
  strings: respose.data.answer,
  autoStart: true,
  delay: 1,
  cursor: "",
});

}

function generateRecipe(event){
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "58a99e584fa1e3b880dfe49a17c6a914";
    let context = "You are a cook expert with a vast amount of short recipes for delicious food and love to give great and easy recipes. Your mission is to generate a short and easy recipe in basic HTML and seperate each line of the recipe with a <br/>. Make sure to follow the user instructions. Do not include a title to the recipe. Sign the recipe with 'SheCodes AI' inside a <strong> element at the end of the recipe and not at the beginning.Mke sure to provide a clear and precise answer";
    let prompt = `User instructions: Generate a simple recipeincluding ${instructionsInput.value}`;
    let apiURL = `https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data=${prompt}&context=${context}&key=${apiKey}`;

    let recipeElement = document.querySelector("#recipe");
    recipeElement.classList.remove("hidden");
    recipeElement.innerHTML = `<div class="generating">⏳ </div> Generating a Food Recipe about ${instructionsInput.value}`;

    axios.get(apiURL).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);