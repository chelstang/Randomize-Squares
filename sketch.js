function setup() {
	createCanvas(640, 640);
	boolDoRefresh = true;
}

function draw() {
	strokeWeight(0);
	if (boolDoRefresh) {
		background(240);
		let space = 60;
		let border = 50;
		for(let i = border; i < 640; i+=space){
			for(let j = border; j < 640; j+=space){
				let rando = int(random(0,20));
				if (rando == 0){
					fill('pink');
					rectMode(CENTER);
					square(i, j, 50);
				} else {
					fill('black');
					circle(i, j, 50);
				}
			}
		}
		boolDoRefresh = false;
	}
}

function mousePressed() {
  boolDoRefresh = true;
}