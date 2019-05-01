let particles = [];
let intensity = 36;

function setup() {
  createCanvas(displayWidth, displayHeight);

  // Add an initial set of boids into the system
  for (let i = 0; i < 200; i++) {
    particles[i] = new Particle(random(width), random(height));
  }
}

function draw() {
  background(255);
  // Run all the boids
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].render();
    particles[i].borders();
  }
}

// Boid class
// Methods for Separation, Cohesion, Alignment added
class Particle {
  constructor(x, y) {
    this.speed = random(8, 16);
    this.randomness = random (0.5, 1);
    this.position = createVector(x, y);
    this.lastPosition = this.position;
    this.angle = 0.1;
    this.r = 3.0;
  }


  // Method to update location
  update() {
    this.speed = intensity * this.randomness;
    this.lastPosition = this.position;
    this.position.x += this.speed * sin (this.angle);
    this.position.y += this.speed * cos (this.angle);
  }

  // Draw boid as a circle
  render() {
    fill(127, 127);
    stroke(127);
    strokeWeight(1);
    //ellipse(this.position.x, this.position.y, 16, 16);
    line (this.position.x, this.position.y, this.position.x + this.speed * sin (this.angle), this.position.y + this.speed  * cos (this.angle));
      //(this.positon.x + this.speed * sin (this.angle)), (this.position.y + this.speed * cos (this.angle)));
  }

  // Wraparound
  borders() {
    if (this.position.x < -this.r) this.position.x = width + this.r;
    if (this.position.y < -this.r) this.position.y = height + this.r;
    if (this.position.x > width + this.r) this.position.x = -this.r;
    if (this.position.y > height + this.r) this.position.y = -this.r;
  }


}
