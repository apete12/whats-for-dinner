
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

// query selectors

// buttons:
var sideButton = document.querySelector('#side');
var mainDishButton = document.querySelector('#main-dish');
var dessertButton = document.querySelector('#dessert');
var wholeMealButton = document.querySelector('#whole-meal')
var letsCookButton = document.querySelector('.lets-cook-button');
var clearButton = document.querySelector('.clear-button');

// text
var youShouldMakeText = document.querySelector('.you-should-make');
var itemToDisplay = document.querySelector('.item');

// imgage
var cookpotImg = document.querySelector('.pot')

// event listeners
sideButton.addEventListener('click', getRandomSide);
mainDishButton.addEventListener('click', getRandomMain);
dessertButton.addEventListener('click', getRandomDessert);
wholeMealButton.addEventListener('click', getWholeMeal)
letsCookButton.addEventListener('click', displayFood);

clearButton.addEventListener('click', clearFoods)

// global variables?
var wholeMeal;

// functions

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
}

function getRandomSide() {
    return sides[getRandomIndex(sides)];
}
function displaySide(){
    youShouldMakeText.classList.remove('hidden');
    cookpotImg.classList.add('hidden');
    itemToDisplay.classList.remove('hidden');
    clearButton.classList.remove('hidden');

    return itemToDisplay.innerText = sides[getRandomIndex(sides)]
}


function getRandomMain(){
    return mains[getRandomIndex(mains)];
}
function displayMain(){
    youShouldMakeText.classList.remove('hidden');
    cookpotImg.classList.add('hidden');
    itemToDisplay.classList.remove('hidden');
    clearButton.classList.remove('hidden');

    return itemToDisplay.innerText = mains[getRandomIndex(mains)];
}

function getRandomDessert(){
    return desserts[getRandomIndex(desserts)]; 
}

function displayDessert(){
    youShouldMakeText.classList.remove('hidden');
    cookpotImg.classList.add('hidden');
    itemToDisplay.classList.remove('hidden');
    clearButton.classList.remove('hidden');

    return itemToDisplay.innerText = desserts[getRandomIndex(desserts)];
}

// function toggleText(){
// create toggle function to improve DRY 
// }

function displayFood(){
    displaySide();
    displayMain();
    displayDessert();
    displayWholeMeal();
}

function clearFoods(){
    youShouldMakeText.classList.add('hidden');
    cookpotImg.classList.remove('hidden');
    itemToDisplay.classList.add('hidden');
    clearButton.classList.add('hidden');
}

function getWholeMeal(){
    wholeMeal = `${sides[getRandomIndex(sides)]}, ${mains[getRandomIndex(mains)]}, and ${desserts[getRandomIndex(desserts)]}`
}

function displayWholeMeal(){
    youShouldMakeText.classList.remove('hidden');
    cookpotImg.classList.add('hidden');
    itemToDisplay.classList.remove('hidden');
    clearButton.classList.remove('hidden');

    return itemToDisplay.innerText = wholeMeal;
}

   




