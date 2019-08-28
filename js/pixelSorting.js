// copy pixels (for sorting later on)
let pixels = [];
let dots = [];

function loadJSON(callback) {   
	var xobj = new XMLHttpRequest();
			xobj.overrideMimeType("application/json");
	xobj.open('GET', './data/test1/json.txt', true); // Replace 'my_data' with the path to your file
	xobj.onreadystatechange = function () {
				if (xobj.readyState == 4 && xobj.status == "200") {
					// Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
					callback(xobj.responseText);
				}
	};
	xobj.send(null);  
}

loadJSON(function(response) {
  // Parse JSON string into object
		var actual_JSON = JSON.parse(response);
		console.log('loaded', actual_JSON);

		pixels = actual_JSON;
 });

window.onload = function() {
	paper.setup("canvas")

	// Create a raster item using the image tag with id='mona'
	var raster = new Raster(new Size(60, 40), view.center);

	// Move the raster to the center of the view
	// raster.position = view.center;

	// The size of our grid cells:
	var gridSize = 10;

	// Space the cells by 120%:
	var spacing = 1.2;

	// As the web is asynchronous, we need to wait for the raster to load
	// before we can perform any operation on its pixels.
	raster.on('load', function() {
		// Since the example image we're using is much too large,
		// and therefore has way too many pixels, lets downsize it to
		// 40 pixels wide and 30 pixels high:
		raster.size = new Size(60, 40);

		let i = 0;

		//! Saving for later
		// pixels.sort(compare);

		for (var y = 0; y < raster.height; y++) {
			for(var x = 0; x < raster.width; x++) {
				dots[i] = new Path.Rectangle(x * gridSize, y * gridSize, gridSize / spacing, gridSize / spacing);
				// Set the fill color of the path to the color
				// of the pixel:
				dots[i].fillColor = new Color(pixels[i][1], pixels[i][2], pixels[i][3]);
		
				i++;
			}
		}

		// Move the active layer to the center of the view, so all 
		// the created paths in it appear centered.
		project.activeLayer.position = view.center;

	});

	// Move the active layer to the center of the view:
	project.activeLayer.position = view.center;
}

function compare(a, b) {
	let comparison = 0;
	
  if (a.hue > b.hue) {
    comparison = 1;
  } else if (a.hue < b.hue) {
    comparison = -1;
  }
  return comparison;
}