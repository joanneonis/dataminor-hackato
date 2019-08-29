let res = [30, 20];

const bars = [
	{
		id: 1,
		title: "Ben & Jerry’s",
		capacity: 0,
		visitors: [
			{
				time: '13:30',
				visitors: 0,
			},
			{
				time: '14:30',
				visitors: 0,
			},
			{
				time: '15:30',
				visitors: 0,
			},
			{
				time: '16:30',
				visitors: 0,
			},
			{
				time: '17:30',
				visitors: 0,
			},
		],
	},
	{
		id: 2,
		title: "BierBoutique",
		capacity: 51,
		visitors: [
			{
				time: '13:30',
				visitors: 0,
			},
			{
				time: '14:30',
				visitors: 0,
			},
			{
				time: '15:30',
				visitors: 0,
			},
			{
				time: '16:30',
				visitors: 0,
			},
			{
				time: '17:30',
				visitors: 0,
			},
		],
	},
	{
		id: 3,
		title: "Cocosnoot Shoarma",
		capacity: 16,
		visitors: [
			{
				time: '13:30',
				visitors: 0,
			},
			{
				time: '14:30',
				visitors: 0,
			},
			{
				time: '15:30',
				visitors: 0,
			},
			{
				time: '16:30',
				visitors: 3,
			},
			{
				time: '17:30',
				visitors: 0,
			},
		],
	},
	{
		id: 4,
		title: "Switie",
		capacity: 15,
		visitors: [
			{
				time: '13:30',
				visitors: 0,
			},
			{
				time: '14:30',
				visitors: 0,
			},
			{
				time: '15:30',
				visitors: 0,
			},
			{
				time: '16:30',
				visitors: 1,
			},
			{
				time: '17:30',
				visitors: 0,
			},
		],
	},
	{
		id: 5,
		title: "Het Eigendom",
		capacity: 35,
		visitors: [
			{
				time: '13:30',
				visitors: 0,
			},
			{
				time: '14:30',
				visitors: 1,
			},
			{
				time: '15:30',
				visitors: 4,
			},
			{
				time: '16:30',
				visitors: 14,
			},
			{
				time: '17:30',
				visitors: 15,
			},
		],
	},
	{
		id: 6,
		title: "Warungmini",
		capacity: 28,
		visitors: [
			{
				time: '13:30',
				visitors: 14,
			},
			{
				time: '14:30',
				visitors: 23,
			},
			{
				time: '15:30',
				visitors: 11,
			},
			{
				time: '16:30',
				visitors: 12,
			},
			{
				time: '17:30',
				visitors: 23,
			},
		],
	},
	{
		id: 7,
		title: "OPA",
		capacity: 50,
		visitors: [
			{
				time: '13:30',
				visitors: 0,
			},
			{
				time: '14:30',
				visitors: 0,
			},
			{
				time: '15:30',
				visitors: 0,
			},
			{
				time: '16:30',
				visitors: 6,
			},
			{
				time: '17:30',
				visitors: 9,
			},
		],
	},
	{
		id: 8,
		title: "Jaffa shoarma",
		capacity: 31,
		visitors: [
			{
				time: '13:30',
				visitors: 13,
			},
			{
				time: '14:30',
				visitors: 12,
			},
			{
				time: '15:30',
				visitors: 19,
			},
			{
				time: '16:30',
				visitors: 10,
			},
			{
				time: '17:30',
				visitors: 3,
			},
		],
	},
	{
		id: 9,
		title: "Satebar",
		capacity: 0,
		visitors: [
			{
				time: '13:30',
				visitors: 0,
			},
			{
				time: '14:30',
				visitors: 0,
			},
			{
				time: '15:30',
				visitors: 0,
			},
			{
				time: '16:30',
				visitors: 0,
			},
			{
				time: '17:30',
				visitors: 0,
			},
		],
	},
	{
		id: 11,
		title: "Wunderbar",
		capacity: 65,
		visitors: [
			{
				time: '13:30',
				visitors: 0,
			},
			{
				time: '14:30',
				visitors: 18,
			},
			{
				time: '15:30',
				visitors: 39,
			},
			{
				time: '16:30',
				visitors: 38,
			},
			{
				time: '17:30',
				visitors: 33,
			},
		],
	},
	{
		id: 12,
		title: "Frietboutique",
		capacity: 30,
		visitors: [
			{
				time: '13:30',
				visitors: 11,
			},
			{
				time: '14:30',
				visitors: 2,
			},
			{
				time: '15:30',
				visitors: 3,
			},
			{
				time: '16:30',
				visitors: 2,
			},
			{
				time: '17:30',
				visitors: 8,
			},
		],
	},
	{
		id: 13,
		title: "Termarsch & CO",
		capacity: 0,
		visitors: [
			{
				time: '13:30',
				visitors: 0,
			},
			{
				time: '14:30',
				visitors: 0,
			},
			{
				time: '15:30',
				visitors: 0,
			},
			{
				time: '16:30',
				visitors: 0,
			},
			{
				time: '17:30',
				visitors: 0,
			},
		],
	},
	{
		id: 14,
		title: "King Kong",
		capacity: 52,
		visitors: [
			{
				time: '13:30',
				visitors: 32,
			},
			{
				time: '14:30',
				visitors: 35,
			},
			{
				time: '15:30',
				visitors: 14,
			},
			{
				time: '16:30',
				visitors: 24,
			},
			{
				time: '17:30',
				visitors: 13,
			},
		],
	},
	{
		id: 15,
		title: "NRC",
		capacity: 52,
		visitors: [
			{
				time: '13:30',
				visitors: 61,
			},
			{
				time: '14:30',
				visitors: 46,
			},
			{
				time: '15:30',
				visitors: 30,
			},
			{
				time: '16:30',
				visitors: 34,
			},
			{
				time: '17:30',
				visitors: 35,
			},
		],
	},
	{
		id: 16,
		title: "De Witte Aap",
		capacity: 63,
		visitors: [
			{
				time: '13:30',
				visitors: 0,
			},
			{
				time: '14:30',
				visitors: 1,
			},
			{
				time: '15:30',
				visitors: 14,
			},
			{
				time: '16:30',
				visitors: 42,
			},
			{
				time: '17:30',
				visitors: 45,
			},
		],
	},
	{
		id: 17,
		title: "De Schouw",
		capacity: 36,
		visitors: [
			{
				time: '13:30',
				visitors: 0,
			},
			{
				time: '14:30',
				visitors: 0,
			},
			{
				time: '15:30',
				visitors: 2,
			},
			{
				time: '16:30',
				visitors: 7,
			},
			{
				time: '17:30',
				visitors: 5,
			},
		],
	},
	{
		id: 18,
		title: "Telaviv",
		capacity: 12,
		visitors: [
			{
				time: '13:30',
				visitors: 0,
			},
			{
				time: '14:30',
				visitors: 2,
			},
			{
				time: '15:30',
				visitors: 0,
			},
			{
				time: '16:30',
				visitors: 2,
			},
			{
				time: '17:30',
				visitors: 2,
			},
		],
	},
	{
		id: 19,
		title: "De With",
		capacity: 0,
		visitors: [
			{
				time: '13:30',
				visitors: 0,
			},
			{
				time: '14:30',
				visitors: 0,
			},
			{
				time: '15:30',
				visitors: 0,
			},
			{
				time: '16:30',
				visitors: 0,
			},
			{
				time: '17:30',
				visitors: 12,
			},
		],
	},
	{
		id: 20,
		title: "Wagamama",
		capacity: 94,
		visitors: [
			{
				time: '13:30',
				visitors: 23,
			},
			{
				time: '14:30',
				visitors: 10,
			},
			{
				time: '15:30',
				visitors: 2,
			},
			{
				time: '16:30',
				visitors: 7,
			},
			{
				time: '17:30',
				visitors: 26,
			},
		],
	},
	{
		id: 21,
		title: "Zondebok & Zwarte schaap",
		capacity: 90,
		visitors: [
			{
				time: '13:30',
				visitors: 0,
			},
			{
				time: '14:30',
				visitors: 2,
			},
			{
				time: '15:30',
				visitors: 7,
			},
			{
				time: '16:30',
				visitors: 15,
			},
			{
				time: '17:30',
				visitors: 24,
			},
		],
	},
];

var can = document.getElementById("canvas");
		can.style.width = window.innerWidth+"px";
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

let sortablePixels = [];
let paperPixels = [];

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
				colors: actual_JSON,
				paperPixels: [],
			};

			sortablePixels.push(...actual_JSON);

			calculateColorValues(l);
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

	console.log(sortablePixels);

	var w = res[0];
	var h = res[1];
	var raster = new Raster(new Size(w, h));
	var gridSize = 7;
	var spacing = 1.1;
	let i = 0;
	let iAll = 0;

	//! Saving for later
	sortablePixels.sort(compare);

	let round = 0;

	for (var y = 0; y < raster.height * 5; y++) {
		for(var x = 0; x < raster.width * 5; x++) {
			dots[i] = new Path.Rectangle(
				(x * gridSize),
				(y * gridSize), 
				gridSize / spacing,
				gridSize / spacing
			);

			var theColor = sortablePixels[iAll];
			
			dots[i].fillColor = new Color(theColor[1], theColor[2], theColor[3]);
			dots[i].OldfillColor = new Color(theColor[1], theColor[2], theColor[3]);
			dots[i].userData = { title: allPixels[round].title, id: allPixels[round].id, colorValues: allPixels[round].colorValues };

			paperPixels.push(dots[i]);

			allPixels[round].paperPixels.push(iAll);

			if (i === allPixels[round].colors.length - 1) {
				round += 1;
				i = 0;
			} else {
				i++;
			}

			iAll++;
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

	label.innerHTML = `
		<h3>${hitResult.item.userData.title}</h3>
		<ul>
			<li>
				<strong>13:30 - </strong>
				<span> Aantal: ${bars[hitResult.item.userData.id].visitors[0].visitors}</span>
			</li>
			<li>
				<strong>14:30 - </strong>
				<span> Aantal: ${bars[hitResult.item.userData.id].visitors[1].visitors}</span>
			</li>
			<li>
				<strong>15:30 - </strong>
				<span> Aantal: ${bars[hitResult.item.userData.id].visitors[2].visitors}</span>
			</li>
			<li>
				<strong>16:30 - </strong>
				<span> Aantal: ${bars[hitResult.item.userData.id].visitors[3].visitors}</span>
			</li>
			<li>
				<strong>17:30 - </strong>
				<span> Aantal: ${bars[hitResult.item.userData.id].visitors[4].visitors}</span>
			</li>
		</ul>
	`;
}

// test.onMouseDown = function(event) {
// 	var hitResult = project.hitTest(event.point, hitOptions);

// 	// clean
// 	for (let i = 0; i < paperPixels.length; i++) {
// 		paperPixels[i].fillColor.alpha = 1;
// 	}

// 	if (!hitResult) {
// 		return;
// 	};

// 	let id = hitResult.item.userData.id;

// 	// allPixels
	
// 	for (let i = 0; i < paperPixels.length; i++) {
// 		if (!allPixels[id].paperPixels.includes(i)) {
// 			paperPixels[i].fillColor.alpha = .2;
// 		}
// 	}
// 	// OldfillColor
// 	console.log(hitResult.item.userData.id);	
// }

function calculateColorValues(round) {
	let colors = allPixels[round].colors;

	let reds = 0;
	let blues = 0;
	let greens = 0;

	for (let i = 0; i < colors.length; i++) {
		reds += colors[i][1];
		greens += colors[i][2];
		blues += colors[i][3];
	}

	allPixels[round].colorValues = {
		red: reds,
		green: greens,
		blue: blues,
	};

	// let redValues = colors.filter((item) => {
  //   return item.date.getTime() >= fromDate.getTime() &&
  //          item.date.getTime() <= toDate.getTime();
	// });
}