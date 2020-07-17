let planet1 = {
    radius: 100,
    name: "Earth",
    area: function() {
        return 4 * Math.PI * this.radius**2;
    }
};

function Planet(name, radius) {
    this.name = name;
    this.radius = radius;
    this.area = function() {
        return 4 * Math.PI * this.radius**2;
    }
};

const planet1 = new Planet('Earth', 20000);


function Planet(name, radius) {
    this.name = name;
    this.radius = radius;
};

Planet.prototype.area = function() {
    return 4 * Math.PI * this.radius**2;
}

const planet1 = new Planet('Earth', 20000);



function Star(name, radius, temperature) {
    Planet.call(this, name, radius);

    this.temperature = temperature;
};

Star.prototype = Object.create(Planet.prototype);






const planet1 = {
    name: "Earth",
    radius: 20000,
    area: function() {
        return 4 * Math.PI * this.radius ** 2
    }
};

const planet2 = {
    name: "Mars",
    radius: 10000,
    area: function() {
        return 4 * Math.PI * this.radius ** 2
    }
};



console.log(planet1);
console.log(planet2);


