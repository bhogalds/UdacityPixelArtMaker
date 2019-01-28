// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()

var submitForm = document.querySelector("#sizePicker");
var grid = document.getElementById("pixelCanvas");


/* Add eventListener on the form to get inputs on submit
and call makeGrid function with size of the grid as arguments */

submitForm.addEventListener("submit", function(e){
    var gridHeight = document.querySelector("#inputHeight").value;
    var gridWidth = document.querySelector("#inputWidth").value;
    e.preventDefault();
    makeGrid(gridHeight,gridWidth);
	});

//Add  eventListener on grid to listen for click on the table

grid.addEventListener("click", function(clickEvent){
	var colorPicked = document.getElementById("colorPicker").value;
	clickEvent.target.style.backgroundColor=colorPicked;
    });

/* makeGrid function adds rows and cells to table element
given by the argument h and w for height and width */

function makeGrid(h,w) {
for (x = 0; x < h; x++){
	grid.insertRow(x);
	gridRow = document.getElementsByTagName("tr");
	for (y = 0; y < w; y++){
		gridRow[x].insertCell(y);
			}
		}
	}
