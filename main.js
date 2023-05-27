var sides = [
    'Miso Glazed Carrots',
    'Coleslaw',
    'Garden Salad',
    'Crispy Potatoes',
    'Sweet Potato Tots',
    'Coconut Rice',
    'Caeser Salad',
    'Shrimp Summer Rolls',
    'Garlic Butter Mushrooms',
    'Hush Puppies',
]


var mains = [
    'Spaghetti and Meatballs',
    'Pineapple Chicken',
    'Shakshuka',
    'Thai Yellow Curry',
    'Bibimbap',
    'Chicken Parmesean',
    'Butternut Squash Soup',
    'BBQ Chicken Burgers',
    'Ramen',
    'Empanadas',
    'Chicken Fried Rice',
    'Sheet Pan Fajitas',
    'Margarita Pizza',
]

var desserts = [
    'Apple Pie',
    'Lemon Meringue Pie',
    'Black Forest Cake',
    'Banana Bread',
    'Peach Cobbler',
    'Cheesecake',
    'Funfetti Cake',
    'Baklava',
    'Flan',
    'Macarons',
    'Macaroons',
    'Chocolate Cupcakes',
    'Pavlova',
    'Pumpkin Pie',
    'Key Lime Pie',
    'Tart Tatin',
    'Croissants',
    'Eclairs',
]

// query selectors:

// radio buttons:
var sideButton = document.querySelector('#side');
var mainDishButton = document.querySelector('#main-dish');
var dessertButton = document.querySelector('#dessert');
var wholeMealButton = document.querySelector('#whole-meal')
var radioButtons = document.querySelectorAll('input[type=radio]')

// buttons:
var letsCookButton = document.querySelector('.lets-cook-button');
var clearButton = document.querySelector('.clear-button');


// text
var youShouldMakeText = document.querySelector('.you-should-make');
var itemToDisplay = document.querySelector('.item');

// imgage
var cookpotImg = document.querySelector('.pot')

// event listeners
letsCookButton.addEventListener('click', displayFood);
clearButton.addEventListener('click', clearFoods)


// global variables
var currentFoodType;
var wholeMeal;

// functions
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
}

function getWholeMeal(){
    wholeMeal = `${sides[getRandomIndex(sides)]}, ${mains[getRandomIndex(mains)]}, and ${desserts[getRandomIndex
    (desserts)]}`

    return wholeMeal
}

function generateFood(){
    if(sideButton.checked) {
        currentFoodType = sides[getRandomIndex(sides)];
    } else if (mainDishButton.checked) {
        currentFoodType = mains[getRandomIndex(mains)];
    } else if (dessertButton.checked) {
        currentFoodType = desserts[getRandomIndex(desserts)];
    } else if (wholeMealButton.checked) {
        currentFoodType = getWholeMeal()
    } else {
        currentFoodType = 'Please select Side, Main Dish, Dessert, or Whole Meal!'
    }
    return currentFoodType
}

function displayFood(){
    toggleText()
    generateFood()

    itemToDisplay.innerText = currentFoodType
}

function clearRadioButtons() {
    for(var i=0; i <radioButtons.length; i++){
        radioButtons[i].checked = false;
    }
}

function toggleText(){
    youShouldMakeText.classList.remove('hidden');
    cookpotImg.classList.add('hidden');
    itemToDisplay.classList.remove('hidden');
    clearButton.classList.remove('hidden');
}

function clearFoods(){
    youShouldMakeText.classList.add('hidden');
    cookpotImg.classList.remove('hidden');
    itemToDisplay.classList.add('hidden');
    clearButton.classList.add('hidden');

    clearRadioButtons()
}
