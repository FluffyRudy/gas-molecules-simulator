const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');


function Circle(x, y, r) {
	this.x      = x;
	this.y      = y;
	this.r      = r;
	this.color  = randomColor();
	this.dirX   = choice([1, -1]);
	this.dirY   = choice([-1, 1]); 
	this.speedX = choice([3, 4, 2, 1]);
	this.speedY = choice([3, 4, 2, 1]);

	this.draw = function() {
		ctx.beginPath();
		ctx.strokeStyle = this.color;
		ctx.lineWidth   = 5;
		ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
		ctx.stroke();
		ctx.closePath();
	}

	this.update = function(group) {
		this.x += (this.speedX * this.dirX);
		this.y += (this.speedY * this.dirY);
		if (this.x >= canvas.width || this.x <= 0)
			this.dirX *= -1;
		if (this.y >= canvas.height || this.y <= 0)
			this.dirY *= -1;
		this.checkCollision(group);
	}

	this.checkCollision = function(group) {
		for (let elem of group) {
			if (elem && elem != this) {
				if (calculateDistance(this, elem) <= (this.r + elem.r)) {
					this.dirX *= -1;
					this.dirY *= -1;
				}
			}
		}
	}
}

const circles = [];
for (let i = 0; i < 1000; i++) {
	const circle = new Circle(randint(0, canvas.width), randint(0, canvas.height), 3);
	circles.push(circle);
}

function animate() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	for (let elem of circles) {
		elem.draw();
		elem.update(circles);
	}
    requestAnimationFrame(animate);
}

animate();

function calculateDistance(obj1, obj2) {
	return Math.sqrt((obj1.x - obj2.x) ** 2 + (obj1.y - obj2.y) ** 2);
}

function choice(array) {
	return array[randint(0, array.length-1)];
}

function randint(start, end) {
	return Math.floor(Math.random() * (end - start + 1) + start);
}

function randomColor() {
	return `rgb(${randint(0, 255)}, ${randint(0, 255)}, ${randint(0, 255)})`;
}