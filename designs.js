// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
//rev-2 1/28/2019

var submitForm = document.querySelector("#sizePicker");
var grid = document.getElementById("pixelCanvas");


/* Add eventListener on the form to get inputs on submit
and call makeGrid function with size of the grid as arguments */

submitForm.addEventListener("submit", function(e){
    var gridHeight = document.querySelector("#inputHeight").value;
    var gridWidth = document.querySelector("#inputWidth").value;
    // ensure no default reload of the page after submit
    e.preventDefault();
    //limit grid to 30x30 size
    if (gridWidth <= 30 && gridHeight <= 30){
    //clear old grid on submit by updating the innerHTML of the table
    //of all existing rows 
    grid.innerHTML="<tbody></tbody>";
    makeGrid(gridHeight,gridWidth);
	} else {
		alert("Grid size less 30x30 Only!")
		}
});

//Add  eventListener on grid to listen for click on the table

grid.addEventListener("click", function(clickEvent){
	var colorPicked = document.getElementById("colorPicker").value;
	//color the square only if click target is a <td> element
	if (clickEvent.target.nodeName === 'TD'){
	clickEvent.target.style.backgroundColor=colorPicked;
	}	
});



/* makeGrid function adds rows and cells to table element
given by the argument h and w for height and width */

function makeGrid(h,w) {
for (x = 0; x < h; x++){
	//insert row for each height
	grid.insertRow(x);
	gridRow = document.getElementsByTagName("tr");
	//get tr elements and insert cell for each row
	for (y = 0; y < w; y++){
		gridRow[x].insertCell(y);
		}
	}
}
