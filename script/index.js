//document.getElementByID()


// intialize the count as 0

let count = 0;
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
function increment(){
	console.log("clicked");
	count += 1;
	document.getElementById('count-el').innerText = count;
}
function decrement(){
	console.log("clicked");
	count -= 1;
	document.getElementById('count-el').innerText = count;
}

function save(){
	console.log(count);
	document.getElementById('prv').innerText+=(" "+count+" | ");
	document.getElementById('count-el').innerText = 0;
	count = 0;

}

let username = "per";
let msg = "You have 3 new notifications";
let messageToUser = username+", "+msg+"."
console.log(messageToUser);
