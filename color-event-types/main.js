// This variable stores the "Pick a Color" button
let button = document.getElementById('color-button');

// This variable stores the "Mystery Color" button
let mysteryButton = document.getElementById('next-button');

// This random number function that will creates color codes for the randomColor variable
function rgb(num) {
  return Math.floor(Math.random() * num);
}

// Write your code below, with 256, we include the option of pure white
// The 3 rgb(256) in the middle are CALLING the rgb function above, with 256 as it's argument
// The rgb function returns a random number, 3 times, to this colorChange function
// The result is, for example: randomColor = rgb(224, 56, 139)
let colorChange = function (event) {
  let randomColor = 'rgb(' + rgb(256) + ',' + rgb(256) + ',' + rgb(256) + ')';
  event.target.style.backgroundColor = randomColor;
}
/* In template literal form it would be:
    `rgb(${rgb(256)}, ${rgb(256)}, ${rgb(256)})`
  HOWEVER, it has to be in string form to assign it in script
*/


button.onclick = colorChange;
mysteryButton.onwheel = colorChange;

