window.onload = function() {
	paper.setup("canvas")

	// Create a raster item using the image tag with id='mona'
	var raster = new Raster('terras');

	// Move the raster to the center of the view
	raster.position = view.center;

	// The size of our grid cells:
	var gridSize = 10;

	// Space the cells by 120%:
	var spacing = 1.2;

	// copy pixels (for sorting later on)
	let pixels = [];
	let dots = [];

	// As the web is asynchronous, we need to wait for the raster to load
	// before we can perform any operation on its pixels.
	raster.on('load', function() {
		// Since the example image we're using is much too large,
		// and therefore has way too many pixels, lets downsize it to
		// 40 pixels wide and 30 pixels high:
		raster.size = new Size(60, 40);

		let i = 0;

		for (var y = 0; y < raster.height; y++) {
			for(var x = 0; x < raster.width; x++) {
				// Get the color of the pixel:
				var color = raster.getPixel(x, y);

				pixels[i] = color;

				// Create a circle shaped path:
				// dots[i] = new Path.Circle({
				// 	center: new Point(x * gridSize, y * gridSize),
				// 	radius: gridSize / 2 / spacing
				// });

				dots[i] = new Path.Rectangle(x * gridSize, y * gridSize, gridSize / spacing, gridSize / spacing);

				i++;
			}
		}

		i = 0;

		pixels.sort(compare);

		for (var y = 0; y < raster.height; y++) {
			for(var x = 0; x < raster.width; x++) {
				// Set the fill color of the path to the color
				// of the pixel:
				dots[i].fillColor = pixels[i];

				i++;
			}
		}

		// Move the active layer to the center of the view, so all 
		// the created paths in it appear centered.
		project.activeLayer.position = view.center;

		console.log(pixels);
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