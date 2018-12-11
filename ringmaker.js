// Programmer: Ben Matson
// Created on: December 10, 2018
// Purpose: Handles the logic to manipulate an array that will aid in the
//   3D print Cryptex design.

var app = new Vue({
  el: '#app',
  data: {
    secretLength: 1,
    cryptexWordCount: 1,
    cryptexWord: '',
    cryptexArray: [],
  },
  created: function() {
    // Initialize cryptex array to have a specified number of words.
    this.reset();
  },
  methods: {
    update: function() {
      // Capitalize the word
      this.cryptexWord = this.cryptexWord.toUpperCase();

      // Separate each character of the word and insert it into each array
      // inside the Cryptex array
      for (var i=0; i<this.secretLength; i++) {
        this.cryptexArray[i].push(this.cryptexWord[i]);
      }

      // Now reset for the next cryptex word.
      this.cryptexWord = '';
    },
    reset: function() {
      // Throw away the built array and re-initialize it
      this.cryptexArray = [];
      for (var i=0; i<this.secretLength; i++) {
        this.cryptexArray.push([]);
      }
      this.cryptexWord = '';
    }
  }
});
