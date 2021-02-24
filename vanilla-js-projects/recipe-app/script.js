const mealsEl = document.getElementById('meal');






getRandomMeal();



async function getRandomMeal() {
    const resp = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");

    const respData = await resp.json();
    const randomMeal = respData.meals[0];
    

    addMeal(randomMeal)
}


async function getMealById(id) {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i='+ id);

    const respData = await resp.json();
    const meal = respData.meals[0];

    return meal;

}

async function getMealBySearch(name) {
    const resp = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + name);

    const respData = await resp.json();
    const meals = respData.meals[0];

    return meals;
}


function addMeal(mealData) {
    console.log(mealData);

    const meal = document.createElement('div');
    meal.classList.add('meal');

    meal.innerHTML = `
    <div class = "meal-body">
    
    <img src="${mealData.strMealThumb}" alt="${mealData.strMeal}"> 
            <div class="rand">
            <span>${mealData.strMeal}</span>
            <button class="fav-btn">
            <i class="far fa-heart"></i>
            </button>
            </div>
    </div>
    `;


    const btn = meal.querySelector(".fav-btn");

    btn.addEventListener("click", () => {
        if(btn.classList.contains("active")) {
            removeMealLS(mealData.idMeal);
            btn.classList.remove("active");
        } else {
            addMealLS(mealData.idMeal);
            btn.classList.add("active");
        }
        });

    

    mealsEl.appendChild(meal);

}


function addMealLS(mealId) {
    const mealIds = getMealsLS();

    localStorage.setItem("mealIds", JSON.stringify([...mealIds, mealId]));
}


function removeMealLS(mealId) {
    const mealIds = getMealsLS();

    localStorage.setItem("mealIds",
    JSON.stringify(mealIds.filter((id) => 
    id !== mealId))
    );
}

function getMealsLS() {
    const mealIds = JSON.parse(localStorage.getItem("mealIds"));

    return mealIds === null ? [] : mealIds;
}