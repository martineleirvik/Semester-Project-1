const array = document.querySelector(".box");
const incrementAmount = 3; // This is how many items get shown additionally after each click
let totalItemsShown = incrementAmount; // Set the default so that it starts showing the initial X number of items 
// We need to check if the total with the increment amount will be larger than the size of the array
//    otherwise we will have an error if the total is larger than the number of items in an array
if (totalItemsShown + incrementAmount > array.length) { 
  totalItemsShown = array.length;
} else {
  totalItemsShown += incrementAmount;
}