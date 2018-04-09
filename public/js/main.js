const myApp = { 
  movieGenres(data, genres){ 
    genres.forEach((genre, index) => { 
      myApp.vm.genres.push({ 
        name : genre, 
        movies : data.filter(movie => movie.genre_name === genre)
        }) 
      }) 
    },
vm : new Vue({ 
  el : '#app',
  data : { 
    message : "Welcome to Franflix!", 
    genres : [] },
  methods : { }, 
  delimiters : ["${", "}"] 
}) 
} 
myApp.movieGenres(appData.movies, ["Family", "Action", "Fantasy"])