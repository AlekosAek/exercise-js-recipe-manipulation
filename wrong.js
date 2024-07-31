 // 1. The logo text of the site has the wrong color. Change it to the correct one.

const logoText =document.querySelector(".logo-text");
logoText.style.color="black";



// 2. The alignment of the elements inside the header element are wrong. Change it to the correct one. `Hint`, 
//check the flex properties for the correct alignment. Here is a link that might help:
// https://css-tricks.com/snippets/css/a-guide-to-flexbox/

const leftHeader=document.querySelector("header");
leftHeader.style.justifyContent="flex-start";



// 3. The header has a border at the bottom, but it has the wrong color. Change it do the correct one.

leftHeader.style.borderBottomColor="grey";

// 4. The recipe name is wrong, change it to the correct one.

const newName=document.querySelector("#recipe-name");
newName.textContent="Frozen Cheesecake";

// 5. The clock icon beneath the recipe name has disappeared and been replaced by a text instead.
// This can be fixed by adding a class to that element.
const clockIcon = document.querySelector('.time-container span:first-of-type');
clockIcon.classList.add('material-icons');


// 6. The estimated time of the recipe is also incorrect. Change it to the correct time estimation.

const newTime=document.querySelector(".time");
newTime.textContent="60+ min";


// 7. The src path to the image is wrong, or atleast it's showing the wrong image. Change it to the correct one.
// The available images can be found in the assets folder.

const imageTag= document.querySelector(".image-container img");
imageTag.setAttribute('src', 'assets/frozen-cheesecake-slice.jpg');

// 8. The background color of the ingredients list container is wrong. Fix it.

const myIngredient =document.querySelector(".ingredients-container");

myIngredient.style.backgroundColor="white";


// 9. The ingredients are divided in to two parts, one for the bottom and one for the paste.
// In the list of the ingredients to the bottom, there is a text instead of two list items. 
//Remove the text and add those two list items.

const listIngredients=document.querySelector(".ingredients-list-bottom");
listIngredients.innerHTML="<li>15st digestivetex</li> <li>Lite smör</li>";



// 10. The third ingredient in the list of ingredients to the paste is wrong.
// Change that specific ingredient to the correct one.

const thirdIngredient=document.querySelector(".ingredients-list-paste");

thirdIngredient.children[2].innerHTML="<li>3tsk vaniljsocker</li>";

// 11. There is also a missing ingredient in the list of ingredients to the paste. 
// Look and see what it is and add that one the the end of the list.

thirdIngredient.insertAdjacentHTML("beforeend","<li>400g naturell philadelphiaost</li>")

// 12. The text "Instructions" to the left, beneath the image, has some shadow styling applied to it. Remove that styling.

instructionsShadow=document.querySelector(".instructions-container h3");
instructionsShadow.classList.remove("shadow");
// 13. Two list elements of the list of instructions are incorrect. Find them and change them to the correct ones.


const instructionsList = document.querySelector('.instructions-list');
instructionsList.children[1].innerHTML = 'Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.';
instructionsList.children[8].innerHTML = 'Ställ in i frysen över natten.';

