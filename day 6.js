
//1.
class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }   static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}
var m1 = new Movie("Casino Royale", "Eon Productions", "PG-13");
var movies = [
    new Movie("Movie 1", "Studio A", "PG"),
    new Movie("Movie 2", "Studio B", "PG-13"),
    new Movie("Movie 3", "Studio C", "PG"),
    new Movie("Movie 4", "Studio D", "R"),];
let pgMovies = Movie.getPG(movies);
console.log(pgMovies);

//2.
class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }
    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    toString() {
        return `"Circle[radius=${this.radius},color=${this.color}]"`;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getCircumference() {
        return 2 * Math.PI * this.radius;
    }
}
const circle1 = new Circle();
console.log(circle1.toString()); 
console.log("Area:", circle1.getArea());
console.log("Circumference:", circle1.getCircumference());



//3.Write a "person" class to hold all the details.

class person{
 constructor(name,age,gender,email,qualification,location)
 {
    this.name=name;
    this.age=age;
    this.gender=gender;
    this.email=email;
    this.qualification=qualification;
    this.location=location;
 }
}var p1=new person("Megavardhini",23,"Female","megavardhini1958@gmail.com","CSE","Chennai");
console.log(p1.name);
console.log(p1.age);
console.log(p1.gender);
console.log(p1.email);
console.log(p1.qualification);
console.log(p1.location);

//4.write a class to calculate the Uber price.
class UberPrice {
    constructor(baseFare, costPerMinute, costPerMile) {
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
    }

    getPrice(distance, time) {
        const fare = this.baseFare +
                     (time* this.costPerMinute) +
                     (distance* this.costPerMile);
        return fare;
    }
}
const uber = new UberPrice(2,1,3);
const distance = 10; 
const time = 20;
const totalPrice = uber.getPrice(distance, time);
console.log("Total price for the ride: Rs",totalPrice);
