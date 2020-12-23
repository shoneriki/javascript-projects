const meals = document.getElementById('meals');

// random meal
getRandomMeal();

async function getRandomMeal() {
  const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");

  const respData = await resp.json();
  const randomMeal = respData.meals[0];

  addMeal(randomMeal, true);
}

// function for meal based on id
async function getMealById(id) {
  const meal = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
}
// meals based on search
async function getMealsBySearch(term) {
  const meals = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+ term);
}

addMeal(mealData, random = false) {
  
}
