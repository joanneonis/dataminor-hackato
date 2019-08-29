let res = [30, 20];

const bars = [
	{
		id: 1,
		title: "Ben & Jerry’s",
	},
	{
		id: 2,
		title: "Boutique",
	},
	{
		id: 3,
		title: "Cocosnoot Shoarma",
	},
	{
		id: 4,
		title: "Switie",
	},
	{
		id: 5,
		title: "Het Eigendom",
	},
	{
		id: 6,
		title: "Warungmini",
	},
	{
		id: 7,
		title: "OPA",
	},
	{
		id: 8,
		title: "Jaffa shoarma",
	},
	{
		id: 9,
		title: "Satebar",
	},
	{
		id: 11,
		title: "Wunderbar",
	},
	{
		id: 12,
		title: "Frietboutique",
	},
	{
		id: 13,
		title: "Termarsch & CO",
	},
	{
		id: 14,
		title: "King Kong",
	},
	{
		id: 15,
		title: "NRC",
	},
	{
		id: 16,
		title: "De Witte Aap",
	},
	{
		id: 17,
		title: "De Schouw",
	},
	{
		id: 18,
		title: "?? Kebab",
	},
	{
		id: 19,
		title: "De With",
	},
	{
		id: 20,
		title: "Wagamama",
	},
	{
		id: 21,
		title: "Zondebok & Zwarte schaap",
	},
];

var can = document.getElementById("canvas");
		can.style.width = (res[0] * 210)+"px";
		can.style.height = window.innerHeight+"px"; //window.innerHeight
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
	'./data/all/7.txt',
	'./data/all/8.txt',
	'./data/all/9.txt',
	'./data/all/11.txt',
	'./data/all/12.txt',
	'./data/all/13.txt',
	'./data/all/14.txt',
	'./data/all/15.txt',
	'./data/all/16.txt',
	'./data/all/17.txt',
	'./data/all/18.txt',
	'./data/all/19.txt',
	'./data/all/20.txt',
	'./data/all/21.txt'
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
	

	// for (let l = 0; l < files.length; l++) {
	// 	loadJSON(files[l], function(response) {
	// 		// Parse JSON string into object
	// 			var actual_JSON = JSON.parse(response);
		
	// 			allPixels[l] = actual_JSON;
	// 			drawPicture(allPixels[l], l); 

	// 			// let contentContainer = document.querySelector("ul li:nth-child("+ (l + 1) +")");
	// 			// contentContainer.querySelector(".title").innerHTML = bars[l].title;
	// 	 });
	// }

	for (let l = 0; l < files.length; l++) {
		loadJSON(files[l], function(response) {
		// Parse JSON string into object
			var actual_JSON = JSON.parse(response);
	
			allPixels[l] = {
				title: bars[l].title,
				id: bars[l].id,
				colors: actual_JSON
			};
			bigAssRaster(l); 
		});
	}
}

// function drawPicture(pic1, pos) {
// 	var w = res[0];
// 	var h = res[1];

// 	var raster = new Raster(new Size(w, h));

// 	// The size of our grid cells:
// 	var gridSize = 10;

// 	// Space the cells by 120%:
// 	var spacing = 1.2;

// 	// raster.on('load', function() {
// 	// raster.size = new Size(w, h);

// 	let i = 0;

// 	//! Saving for later
// 	pic1.sort(compare);

// 	console.log(raster);
// 	let fullImgSpacing = 10;

// 	for (var y = 0; y < raster.height; y++) {
// 		for(var x = 0; x < raster.width; x++) {
// 			dots[i] = new Path.Rectangle(
// 				x * gridSize + ((w * 10 + fullImgSpacing) * pos),
// 				y * gridSize, 
// 				gridSize / spacing,
// 				gridSize / spacing
// 			);
// 			dots[i].fillColor = new Color(pic1[i][1], pic1[i][2], pic1[i][3]);
			
// 			i++;
// 		}
// 	}
// 	// });
// }

function drawPictureWhole(count) {
	// console.log('no');
	// if (count < files.length - 1) return;

	var w = res[0];
	var h = res[1];

	var raster = new Raster(new Size(w, h));

	// The size of our grid cells:
	var gridSize = 10;

	// Space the cells by 120%:
	var spacing = 1.1;

	// raster.on('load', function() {
	// raster.size = new Size(w, h);

	let i = 0;

	//! Saving for later
	// pic1.sort(compare);

	let fullImgSpacing = 10;
	let round = 0;

	// (20*30) 600 * 7
	// 4200

	// console.log(allPixels);

	for (var y = 0; y < raster.height; y++) {
		for(var x = 0; x < raster.width; x++) {
			dots[i] = new Path.Rectangle(
				(x * gridSize) + (count * (raster.width * 10.2)), // comma 2 is for spacing 
				(y * gridSize), 
				gridSize / spacing,
				gridSize / spacing
			);

			var theColor = allPixels[count].colors[i];
			
			dots[i].fillColor = new Color(theColor[1], theColor[2], theColor[3]);
			dots[i].userData = { title: allPixels[count].title, id: allPixels[count].id };

			if (i % 100 === 0) {
				round += 1;
			}

			i++;
		}
	}
}

function bigAssRaster(count) {
	if (count < files.length - 1) return;

	var w = res[0];
	var h = res[1];
	var raster = new Raster(new Size(w, h));
	var gridSize = 7;
	var spacing = 1.1;
	let i = 0;

	//! Saving for later
	// pic1.sort(compare);

	let round = 0;

	for (var y = 0; y < raster.height * 5; y++) {
		for(var x = 0; x < raster.width * 5; x++) {
			dots[i] = new Path.Rectangle(
				(x * gridSize),
				(y * gridSize), 
				gridSize / spacing,
				gridSize / spacing
			);

			var theColor = allPixels[round].colors[i];
			
			dots[i].fillColor = new Color(theColor[1], theColor[2], theColor[3]);
			dots[i].userData = { title: allPixels[round].title, id: allPixels[round].id };

			if (i === allPixels[round].colors.length - 1) {
				round += 1;
				i = 0;
			} else {
				i++;
			}
		}
	}
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

// onMouseDown
// onMouseMove
test.onMouseMove = function(event) {
	var hitResult = project.hitTest(event.point, hitOptions);
	let label = document.querySelector('.current');

	if (!hitResult) {
		label.innerHTML = '';

		return;
	};

	label.innerHTML = hitResult.item.userData.title;
}