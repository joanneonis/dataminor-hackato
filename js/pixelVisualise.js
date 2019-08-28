// copy pixels (for sorting later on)
let pixels = [];
let pixels2 = [];
let dots = [];
let res = [30, 20];

let files = [
	'./data/30x40/test1.txt',
	'./data/30x40/test2.txt'
];


function loadJSON(fileName, callback) {   
	var xobj = new XMLHttpRequest();
			xobj.overrideMimeType("application/json");
	xobj.open('GET', fileName, true); // Replace 'my_data' with the path to your file
	xobj.onreadystatechange = function () {
				if (xobj.readyState == 4 && xobj.status == "200") {
					// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
					callback(xobj.responseText);
				}
	};
	xobj.send(null);   
}

loadJSON(files[0], function(response) {
  // Parse JSON string into object
		var actual_JSON = JSON.parse(response);

		pixels = actual_JSON;
		console.log('inited', pixels.length);
 });

 loadJSON(files[1], function(response) {
  // Parse JSON string into object
		var actual_JSON = JSON.parse(response);

		pixels2 = actual_JSON;
		console.log('inited', pixels2.length);
 });

window.onload = function() {
	paper.setup("canvas")

	drawPicture(pixels, 0);
	drawPicture(pixels2, 1); 

	// Move the active layer to the center of the view:
	// project.activeLayer.position = view.center;
}

function drawPicture(pic1, pos) {
	var w = res[0];
	var h = res[1];

	var raster = new Raster(new Size(w, h));

	// The size of our grid cells:
	var gridSize = 10;

	// Space the cells by 120%:
	var spacing = 1.2;

	// raster.on('load', function() {
	// raster.size = new Size(w, h);

	let i = 0;

	//! Saving for later
	// pic1.sort(compare);

	console.log(raster);
	let fullImgSpacing = 10;

	for (var y = 0; y < raster.height; y++) {
		for(var x = 0; x < raster.width; x++) {
			dots[i] = new Path.Rectangle(
				x * gridSize + ((w * 10 + fullImgSpacing) * pos),
				y * gridSize, 
				gridSize / spacing,
				gridSize / spacing
			);
			dots[i].fillColor = new Color(pic1[i][1], pic1[i][2], pic1[i][3]);
	
			i++;
		}
	}
	// });
}

function compare(a, b) {
	a = new Color(a[1], a[2], a[3]);
	b = new Color(b[1], b[2], b[3]);

	let comparison = 0;
	let compareBy = 'hue';
	
  if (a[compareBy] > b[compareBy]) {
    comparison = 1;
  } else if (a[compareBy] < b[compareBy]) {
    comparison = -1;
  }
  return comparison;
}