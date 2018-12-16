// Programmer: Ben Matson
// Created on: December 10, 2018
// Purpose: Handles the logic to manipulate an array that will aid in the
//   3D print Cryptex design.

var app = new Vue({
  el: '#app',
  data: {
    cryptexSecretWord: 'bright',
    cryptexNewWord: '',
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
      var updatedArray = this.cryptexArray;
      // Iterate through the new word and append each letter to each array in the cryptex
      for (var i=0; i<this.cryptexSecretWord.length; i++) {
        updatedArray[i].push(newWord[i]);
      }

      // Reset the new word and update the display
      this.cryptexNewWord = '';
      // this.$set(this.cryptexArray, updatedArray);
      this.cryptexArray = updatedArray;
    },
    resetCryptex: function() {
      this.cryptexArray = [];

      // Populate the cryptexArray with empty arrays equal to the length of the secret word.
      for (var i=0; i<this.cryptexSecretWord.length; i++) {
        // If a secret word is present, add the letters to the array
        this.cryptexArray.push([this.cryptexSecretWord[i].toUpperCase()]);
      }

      // Reset the new word as well
      this.cryptexNewWord = '';
    },
    insertWord: function(word) {
      // NOTE: This function assumes that the word is the same length as the secret word.

    }
  }
});
