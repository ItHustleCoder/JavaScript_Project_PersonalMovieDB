"use strict";
// Create variable "nubmerOfFilms" and put some answer form users - "How many film you have been watched?"
let numberOfFilms;

// Create object personalMovieDb and put the properties :
// - count - here will be signed answer of the first question
// - movies - this properties will put an empty object
// - actors - same put an empty object
// - geners - here will put empty array 
// - privat - this properties will put boolean - 'false'

function start() {
     numberOfFilms = +prompt('How many film you have been watched?', '');

     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('How many film you have been watched?');
     }
}

start();


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

    function rememberMyFilms() {
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
        }
    }
    
    rememberMyFilms();    

    
    function detecPersonalLevel () {
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
    detecPersonalLevel ();
        
        function showMyDB (hidden){
            if(!hidden) {
                console.log(personalMovieDB);
            }
        }

        showMyDB(personalMovieDB.privat);
   
console.log(personalMovieDB); 

function writeYoureGeneres () {
    for (let i = 1; i <= 3;i++) {
        /* const gener = prompt (`Your favorite genre ${i}`);
        personalMovieDB.geners[i-1] = gener; */
        personalMovieDB.geners[i-1] = prompt(`Your favorit genre ${i}`);
    }
}
writeYoureGeneres();