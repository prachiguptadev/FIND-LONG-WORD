const findLongestWord = (inputString) => {
    //   Split input string into words
    const words = inputString.split(" ");
    //   nitialize a variable
    let longestWord = "";
    // Iterate each word in the list of words
    for (let word of words) {
      //Compare the length of current word with longest word
      if (word.length > longestWord.length) {
        longestWord = word;
      }
    }
    //   console.log(longestWord)
    //   Return the longest word
    return longestWord;
  };
  const longestWord = prompt("Provide a sentence.");
  const finalOutput = findLongestWord(longestWord)
  document.getElementById("app").innerHTML = finalOutput;
  console.log(finalOutput);
  