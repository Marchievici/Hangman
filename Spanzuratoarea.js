var word_init = "";
function addWord() {
  word_init = $('#inputWord').val();
  var word = "", aux_word = "";
  var word = word_init.toLowerCase();
  for (var i = 0; i < word.length; ++i) {
    if (i == 0 || word.charAt(i) == word.charAt(0)) {
      aux_word += word.charAt(i);
    } else {
      aux_word += "_";
    } 
  }
  document.getElementById("output").innerHTML = aux_word.toUpperCase();
  document.getElementById("list").innerHTML = "Wrong letters tried:";
  checks_left = 10;
  $('#inputWord').val("");
}

function searchWordForLetter(letter) {
  var word = word_init;
  var foundLetter = 0;
  aux_word = document.getElementById("output").innerHTML;
  for (var i = 1; i < word.length; ++i) {
    if (letter == word.charAt(i)) {
      aux_word = setCharAt(aux_word, i, letter);
      foundLetter = 1;
    } 
  } 
  if (foundLetter == 0) {
    --checks_left;
    console.log("You have " + checks_left + " attempts remaining");
    $('#list').append(letter + ",");
  }
  if (checks_left == 0) {
    console.log("You Lost, add another word and try again! :)");;
  } else if (word.toUpperCase().localeCompare(aux_word.toUpperCase()) == 0) {
    console.log("You won, Congratulations!!!");  
  }
  document.getElementById('output').innerHTML = aux_word.toUpperCase();
}

function setCharAt(str, index, chr) {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}

function clearInputLetter() {
  $('#letter').val("");
  return false;
}
