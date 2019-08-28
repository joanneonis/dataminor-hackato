let res = [30, 20];

var can = document.getElementById("canvas");
		can.style.width = (res[0] * 100)+"px";
		can.style.height = window.innerHeight+"px";
		//Install paper to the global scope
		paper.install(window);

// copy pixels (for sorting later on)
let pixels = [];
let pixels2 = [];
let dots = [];

let allPixels = [];

let files = [
	'./data/all/1.txt',
	'./data/all/2.txt',
	'./data/all/3.txt',
	'./data/all/4.txt',
	'./data/all/5.txt',
	'./data/all/6.txt',
	'./data/all/7.txt'
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

window.onload = function() {
	paper.setup("canvas")
	

	for (let l = 0; l < files.length; l++) {
		loadJSON(files[l], function(response) {
			// Parse JSON string into object
				var actual_JSON = JSON.parse(response);
		
				allPixels[l] = actual_JSON;
				drawPicture(allPixels[l], l); 
		 });
	}
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

var test = new Tool();

var hitOptions = {
	segments: false,
	stroke: false,
	fill: true,
	tolerance: 2
};

test.onMouseDown = function(event) {
	var hitResult = project.hitTest(event.point, hitOptions);

	hitResult.item.fillColor = 'green';
}