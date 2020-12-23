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

function addMeal(mealData, random = false) {
  const meal = document.createElement('div');
  meals.classList.add('meal');

  meal.innerHTML = `
    <div class="meal-header">
      ${random ? `
        <span class="random">
          Random Recipe
        </span>` : ''}
      <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}">
    </div>
    <div class="meal-body">
      <h4>${mealData.strMeal}</h4>
      <button class="fav-btn">
        <i class="fas fa-heart"></i>
      </button>
    </div>
  `;

  meals.appendChild(meal);
}
