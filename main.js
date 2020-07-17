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


