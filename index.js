//1. What is the name of the recipe?

const recipeName=document.getElementById("recipe-name");
console.log(`Recipe name is ${recipeName.textContent}`);



// 2. What HTML tag is used to display the Recipe name?


console.log(recipeName.tagName);



// 3. What is the font size of the paragraph tag with the class "description".
const pTag = document.querySelector('p.description');
console.log(`Font size: ${getComputedStyle(pTag).fontSize}`);


// 4. What is the value of the alt attribute on the image?

const altImg=document.querySelector(".image-container img ");
console.log(`Alt Attribute: "${altImg.getAttribute('alt')}"`);

// 5. What is the dimensions and the url of the image? Create an object that looks like this, and log it to the console:

const pasteIngredients = document.querySelector('ul.ingredients-list-paste')
const pasteIngredientsCount = pasteIngredients.querySelectorAll('li').length
console.log(`6. The paste has  ${pasteIngredientsCount} ingredients`);

// 6. How many ingredients does the paste-recipe have?


const pasteIngredent = document.querySelector('.ingredients-list-paste');
const bottomIngredent=document.querySelector('.ingredients-list-bottom');
console.log(`Number of paste ingredients: ${pasteIngredent.childElementCount + bottomIngredent.childElementCount }`);

// 7. Which is the fourth element in the list containing the ingredients for the paste?

console.log(`Fourth ingredient in paste: "${pasteIngredent.children[3].textContent}"`);


//// 8. Create an an array of objects from the instructions. Each element in the array should be an object that looks like this:
// {
//     order: number;
//     text: instruction;
// }


