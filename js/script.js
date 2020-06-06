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

/* const a = prompt('One of the last watched movies?',''),
      b = prompt('How much do you rate it?', ''),
      c = prompt('One of the last watched movies?',''),
      d = prompt('How much do you rate it?', '');
      
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;  */       

for (let i=0; i < 2; i++ ){
    const a = prompt('One of the last watched movies?',''),
          b = prompt('How much do you rate it?', '');

    if(a != null && b != null && a != '' && b != '' && a.length < 50 ){
       personalMovieDB.movies[a] = b;
       console.log('done');

    } else {
        console.log('errore');
        i--;
    }
    
    if (personalMovieDB.count < 10) {
        console.log('Pretty few movies watched');

    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('You are classic viewer');

    } else if (personalMovieDB.count >= 30) {
        console.log('You are movie fun');
    } else {
        console.log('Something wrong!!!');
    }

    
}

console.log(personalMovieDB); 