Vue.component('review-stars', {
  template : `<div class="star-rating">
  <label class="star-rating-star" v-for="rating in ratings" 
  :class="{'is-selected': ((value >= rating) && value != null), 'is-disabled': disabled}" 
  v-on:click="updateValue(rating)" v-on:mouseover="updateValue(rating)" v-on:mouseout="updateValue(rating)">
  <input class="star-rating star-rating-checkbox" type="radio" :value="rating" 
  v-model="value" :disabled="disabled">★</label></div>`,
  props : ['value', 'disabled'],
  data : () => {
    return {
      ratings : [1, 2, 3, 4, 5]
    }
  },
  methods : {
    updateValue: (value) => {
      if(!this.disabled) {
        this.$emit('input', value)
      }
    }
  }
})


var myVideoApp = {

  movieReviews(data, reviews){
    data.forEach(review => {
      myVideoApp.vm.reviews.push(review);
    })
  },


  vm : new Vue ({
    delimiters : ["${", "}"],
    el : "#video",
    data : {
      reviews : [],
      numStars : 0,
      review : "",
    },
    methods : {
      // do a post with all the new review stuff
      addReview(){
        //fetch here
        let movieId = document.querySelector('.movId').textContent;

        axios.post('/user', {
          id : movieId,
          starts : this.numStars,
          comment : this.review
        })
        .then(function (response) {
          console.log(response)
        })
        .catch(function (error) {
          console.log(error)
        });

        this.reviews.push({
          comments_copy : this.review,
          comments_rating : this.numStars,
          comments_date : `${new Date()}`
        })

        this.review = "",
        this.numStars = 0
        }
      }
    })
};
myVideoApp.movieReviews(appData.movies);
