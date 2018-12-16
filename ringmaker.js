// Programmer: Ben Matson
// Created on: December 10, 2018
// Purpose: Handles the logic to manipulate an array that will aid in the
//   3D print Cryptex design.

var app = new Vue({
  el: '#app',
  data: {
    secretLength: 1,
    secretWord: '',
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
      this.cryptexArray = [ [ "B", "W", "F", "F", "S", "A", "A", "U", "L" ], [ "R", "O", "O", "A", "T", "C", "S", "N", "A" ], [ "I", "O", "R", "M", "R", "T", "L", "I", "T" ], [ "G", "D", "M", "O", "O", "U", "E", "T", "T" ], [ "H", "E", "E", "U", "N", "A", "E", "E", "E" ], [ "T", "N", "R", "S", "G", "L", "P", "D", "R" ] ];
      this.cryptexWord = '';
      this.secretWord = '';
    },
    shuffle: function() {
      // Loop through all the "rings" in the cryptexArray
      var cryptexCopy = this.cryptexArray;
      for (var i=0; i<cryptexCopy.length-1; i++) {
        // Perform a Fisher-Yates shuffle
        for (var j=cryptexCopy[i].length-1; j>0; j--) {
          // Retrieve an random index number.
          var randIndex = Math.floor(Math.random() * (j+1));
          // hot swap
          var temp = cryptexCopy[i][j];
          cryptexCopy[i][j] = cryptexCopy[i][randIndex];
          cryptexCopy[i][randIndex] = temp;
        }
      }
      this.$set(this.cryptexArray, cryptexCopy);
      // this.cryptexArray = cryptexCopy;
    }
  }
});
