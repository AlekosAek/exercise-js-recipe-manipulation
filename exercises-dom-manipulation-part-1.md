## Exercises on DOM Manipulation

### Getting data from the DOM. 

#### In this exercise you will try and get some data from the provided recipe website.

Use the appropriate methods and properties available to you to get the correct data from the "correct" recipe. All answers should be saved in some variable and logged to the console. If you don't know the right method or property to use, see this link for all available ones: https://www.w3schools.com/jsref/dom_obj_all.asp

1. What is the name of the recipe?
2. What HTML tag is used to display the Recipe name?
3. What is the font size of the paragraph tag with the class _"description"_.
4. What is the value of the `alt` atrribute on the image?
5. What is the dimensions and the url of the image? Create an object that looks like this, and log it to the console:

```js
{
  url: string
  height: number,
  width: number,
}
```

6. How many ingredients has the paste?
7. Which is the forth element in the list containing the ingredients for the paste?
8. Create an an array of objects from the instructions. Each element in the array should be an object that looks like this:

```js
{
  order: number;
  text: instruction;
}
```
// Excercise 1

function requestAllPokemons() {
  fetch("https://santosnr6.github.io/Data/pokemons.json")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      data.forEach((pokeDataOneByne) => {
        // console.log(pokeDataOneByne.name);
        document.body.innerHTML += `${pokeDataOneByne.name} <br>`;
      });
    });
}
// requestAllPokemons();

//---------------------------------------------------------------------------------
// Excercise 2

async function fetchAllDogs() {
  try {
    let allDogsResponse = await fetch(
      "https://majazocom.github.io/Data/dogs.json"
    );
    let dogData = await allDogsResponse.json();
    // console.log(dogData);

    dogData.forEach((dog) => console.log(dog.name));
    dogData.forEach((dog) => (document.body.innerHTML += dog.name + "<br>"));
  } catch (error) {
    console.log(error);
  }
}
fetchAllDogs();