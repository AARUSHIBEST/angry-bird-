class SlingShot {
    constructor(body1, point2) {
        var options = {
            bodyA: body1,
            pointB: point2,
            length: 10,
            stiffness: 1
        }
        this.pointB = point2;
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
        World.add(world, this.sling);
    }
    display() {
        image(this.sling1, 200, 20);
        image(this.sling2, 170, 20);
        if (this.sling.bodyA) {
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            stroke(48, 22, 8);
            if (pointA.x < 220) {
                strokeWeight(8);// To give thickness to line
                //To draw line between constrained body
                line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y);
                image(this.sling3, pointA.x - 30, pointA.y - 10, 15, 30);
            }
            else {
                strokeWeight(4);// To give thickness to line
                //To draw line between constrained body
                line(pointA.x + 25, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x + 25, pointA.y, pointB.x + 40, pointB.y);
                image(this.sling3, pointA.x + 20, pointA.y - 10, 15, 30);
            }
            pop();
        }
    }

    fly() {
        this.sling.bodyA = null;
    }
    attach(body) {
        this.sling.bodyA = body;
    }
}