"use strict";

// Festival
// In your IDE of choice, create a new JavaScript file named festival.js and make it so that all
// code written in the file follows strict mode.
// Create an anonymous immediately-invoking function that will hold the main execution of all
// program calls. Writing a simple command console.log(“Hi”) inside this function and running
// code should output “Hi“ in the console.
// Create constructor functions with properties representing the following:
// ● Genre - name
// ● Movie - title, genre (instance of Genre), length
// ● Program - date, list of movies (initially empty) and total number of movies
// ● Festival - name, list of programs (initially empty), and number of movies in all programs
// Add method getData to Genre which returns formatted string as first and last letter of genre
// name
// "Action" -> AN
// "Drama" -> DA
// "Comedy" -> CY
// Add getData method to Movie. It should return a formatted string consisting of the movie title,
// length and genre acronym.
// The Shawshank Redemption, 130min, AN
// Add addMovie method to Program. It should receive a Movie and add the movie to the movie
// list of a given program.
// Add addProgram method to Festival. It should receive a Program and add the program to the
// list of the given festival’s programs.
// Add getData method to Program. It should return a formatted string of all data related to the
// program. The string should contain date, program length (calculated from length of all movies in a
// list) and data about movies in a list (see the example below). To display movie data, use Movie’s
// getData method.
// Date, program length from all movies
// First movie title, length and genre
// Second movie title, length and genre
// Third movie title, length and genre
// Fourth movie name and length and genre

// Add method getData to Festival which return formatted string like festival name, number of
// movies in all programs and all programs listed. Use Programs getData method to list all
// programs. (example output is shown below)
// Weekend festival has 4 movie titles
// 28.10.2017, program duration 368min
// Spider-Man: Homecoming, 133min, AN
// War for the Planet of the Apes, 140min, DA
// The Dark Tower, 95min, WN
// 29.10.2017, program duration 108min
// Deadpool, 108min, CY

// Inside your immediately-invoking function, add createMovie function that receives a movie title,
// movie length and genre (as a string) as parameters and returns a created Movie.
// Inside your immediately-invoking function, add createProgram function that receives a date and
// returns a created Program.
// Start creating your movie festival.
// In your main program function, create an instance of the Festival object.
// Create two instances of Program using createProgram function.
// Create four instances of Movie object using createMovie function. Add all created movies to
// both programs using the addMovie method.
// Add the created program instances to the created festival instance using festival’s addProgram
// method.
// Display festival’s data using getData method.
// Hints
// ● List is a synonym for array, so when we say a list of movies, it’s actually an array of movie
// objects
// ● Use JS built-in Date()object to create Date object
// ● Use \t and \n special strings to format output
// ● Use built-in String methods to transform text from lowercase to uppercase
// ● Use Array’s built-in methods to add and remove elements from an array
// ----------------------------------------------------------------------------------------
// ako se radi preko klasa, konstruktor ce biti u klasi.
// ----------------------------------------------------------------------------------------
//kreni od konstruktora za svaku klasu pa implementiraj logiku.

// Konstruktorska funkcija za Genre:

function Genre(name) {
  this.name = name;
  this.getData = function () {
    return (this.name[0] + this.name[this.name.length - 1]).toUpperCase();
  };
}
// test |
const actionGenre = new Genre("Action");
console.log(actionGenre.getData());
// test |

// Konstruktorska funkcija za Movie:

function Movie(title, genre, leng) {
  this.title = title;
  this.genre = genre; //instance of genre
  this.leng = leng;
  this.getData = function () {
    return this.title + ", " + this.leng + ", " + this.genre;
  };
}
// test |
const moviee = new Movie("The Shawshank Redemption", actionGenre, "130min");
console.log(moviee.getData());
// test |

// Konstruktorska funkcija za Program:

function Program(date) {
  this.date = date;
  this.listOfMovies = [];
  this.totalNumOfMovies = 0;
  this.addMovie = function (movie) {
    this.listOfMovies.push(movie);
    this.totalNumOfMovies++;
    return this.listOfMovies;
  };
  this.getData = function () {};
}

const programm = new Program("Terminator");
console.log(programm.addMovie());

// Konstruktorska funkcija za Festival:

function Festival(name) {
  this.name = name;
  this.listOfProgram = [];
  this.numOFmovies = 0;
}
// ---------------------------------------------------------------------------------------------
