var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	addDeleteBtn(li);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDoneClass(event) {
	console.log(event.srcElement);
	event.target.classList.toggle("done");
}

function deleteListItem(event) {
event.target.parentElement.remove();
}

function addDeleteBtn(listElement) {
	var delBtn = document.createElement("button");
	var delBtnTxt = document.createTextNode("Delete");
	delBtn.appendChild(delBtnTxt);
	delBtn.addEventListener("click", deleteListItem);
	listElement.appendChild(delBtn);
}

for (var i = 0; i < li.length; i++) {
	li[i].addEventListener("click", toggleDoneClass);
	addDeleteBtn(li[i]);
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);