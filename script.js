const row = document.querySelector('#row');
const column = document.querySelector('#column');
const color = document.querySelector('#color');
const button = document.querySelector('#submit');
const pixelGrid = document.querySelector('#pixelGrid');

let isPaintingAllowed = false;
pixelGrid.addEventListener('mousedown', () => {isPaintingAllowed = true});
pixelGrid.addEventListener('mouseup', () => {isPaintingAllowed = false});


function createGrid () {
	let rowInput = row.value;
	let columnInput = column.value;

	//ensure previous grid is deleted before new is inserted
	while (pixelGrid.firstChild) {
    pixelGrid.removeChild(pixelGrid.firstChild);
    }

	for (let i = 1; i <= rowInput; i++) {
		const tr = document.createElement('TR');

		for (let j = 1; j <= columnInput; j++) {
			const td = document.createElement('TD');
			tr.appendChild(td);
			pixelGrid.appendChild(tr);
			
			//drawing
			function draw(event) {
				let colValue = color.value;
				td.style.backgroundColor = colValue; 
			};
				
				td.addEventListener('click', draw, false);
				td.addEventListener('mouseover', function() {
					if(isPaintingAllowed === true)
						draw()
				});

				//Create delete option with right click
				td.addEventListener('contextmenu', function(e) {
					e.preventDefault(); //prevents context menu
					td.style.backgroundColor = 'transparent'; //deletes colour w a right click
				});
   		}

		document.body.appendChild(pixelGrid);
	}	

};

button.addEventListener('click', function(e) {
	e.preventDefault();
	createGrid();
});


