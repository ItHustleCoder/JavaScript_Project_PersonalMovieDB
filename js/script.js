"use strict";
// Create variable "nubmerOfFilms" and put some answer form users - "How many film you have been watched?"
const numberOfFilms = +prompt('How many film you have been watched?', '');

// Create object personalMovieDb and put the properties :
// - count - here will be signed answer of the first question
// - movies - this properties will put an empty object
// - actors - same put an empty object
// - geners - here will put empty array 
// - privat - this properties will put boolean - 'false'
const personalMovieDB={
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

//  Ask the user two questions.
// One of the last watched movies?
// How much do you rate it?
// Put the answer in separate variables

const a = prompt('One of the last watched movies?',''),
      b = prompt('How much do you rate it?', ''),
      c = prompt('One of the last watched movies?',''),
      d = prompt('How much do you rate it?', '');
      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;        

console.log(personalMovieDB);