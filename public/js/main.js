const myApp = {
  // some non-VM functionality would go here


  vm : new Vue({
    el : "#app",

    data : {
      message : "Welcome to my Netflix ripoff!"
    },

    methods : {

    },

    delimiters : ["${", "}"]
  })
}
