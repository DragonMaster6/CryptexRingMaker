// Programmer: Ben Matson
// Created on: December 10, 2018
// Purpose: Handles the logic to manipulate an array that will aid in the
//   3D print Cryptex design.

var app = new Vue({
  el: '#app',
  data: {
    cryptexSecretWord: 'bright',
    cryptexNewWord: '',
    newWordError: '',
    cryptexArray: [],
  },
  created: function() {
    // Initialize cryptex array to have a specified number of words.
    this.resetCryptex();
  },
  methods: {
    updateCryptex: function() {
      // Capitalize the new word
      var newWord = this.cryptexNewWord.toUpperCase();

      // Do some quick validations before inserting the new word.
      // Check if the field is empty or has incorrect length
      if (newWord.length != this.cryptexSecretWord.length) {
        return false;
      }

      // Check that the new word doesn't conflict with the rings.
      for (var i=0; i<this.cryptexArray.length; i++) {
        // console.log(this.cryptexArray[i][0]);
        if (this.cryptexArray[i][0] == newWord[i]) {
          console.log("There was an error");
          this.newWordError = "Ring " + (i+1) + ": Secret letter conflicts with the " + (i+1) + " letter of this word. Please try another.";
          return;
        }
      }

      // If all went well, insert the word into the cryptex.
      this.insertWord(newWord);

    },
    insertWord: function(newWord) {
      // Clear any error messages.
      this.newWordError = '';

      var updatedArray = this.cryptexArray;
      // Iterate through the new word and append each letter to each array in the cryptex
      for (var i=0; i<this.cryptexSecretWord.length; i++) {
        updatedArray[i].push(newWord[i]);
      }

      // Reset the new word and update the display
      this.cryptexNewWord = '';
      this.cryptexArray = updatedArray;
    },
    resetCryptex: function() {
      this.cryptexArray = [];

      // Populate the cryptexArray with empty arrays equal to the length of the secret word.
      // for (var i=0; i<this.cryptexSecretWord.length; i++) {
      //   // If a secret word is present, add the letters to the array
      //   this.cryptexArray.push([this.cryptexSecretWord[i].toUpperCase()]);
      // }
      // TODO: Remove this and uncomment the above
      this.cryptexArray = [ [ "B", "H", "P", "A", "L", "W" ], [ "R", "O", "I", "R", "I", "O" ], [ "I", "N", "R", "T", "V", "O" ], [ "G", "E", "A", "F", "E", "D" ], [ "H", "S", "T", "U", "L", "E" ], [ "T", "T", "E", "L", "Y", "N" ] ];

      // Reset the new word as well
      this.cryptexNewWord = '';
    },
    shuffleRing: function(index) {
      // Apply the yates-fisher shuffle while maintaining the secret letter position - aka the first letter.
      var shuffledRing = this.cryptexArray[index];

      for (var i=shuffledRing.length-1; i > 1; i--){
        // Add one to the random index to make sure to skip the first letter.
        var randIndex = Math.floor(Math.random() * i + 1);

        // swap the values now.
        var temp = shuffledRing[i];
        shuffledRing[i] = shuffledRing[randIndex];
        shuffledRing[randIndex] = temp;
      }

      // Apply the newly shuffled ring to the cryptex array.
      // this.cryptexArray[index] = shuffledRing;
      this.$set(this.cryptexArray, index, shuffledRing);
      // console.log(shuffledRing);
    }
  }
});
