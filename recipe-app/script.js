// random meal
async function getRandomMeal() {
  const randomMeal =  fetch("https://www.themealdb.com/api/json/v1/1/random.php");
}

// function for meal based on id
async function getMealById(id) {
  const meal = fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
}
// meals based on search
async function getMealsBySearch(term) {
  const meals = fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="+ term);
}
