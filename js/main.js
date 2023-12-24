// string-1

// function printAlphabet(n) {
//     if (n < 1 || n > 26) {
//       console.log("Noto'g'ri qiymat! N 1 dan 26 gacha bo'lishi kerak.");
//       return;
//     }
  
//     const startCharCode = 'A'.charCodeAt(0);
  
//     for (let i = 0; i < n; i++) {
//       const currentChar = String.fromCharCode(startCharCode + i);
//       console.log(currentChar);
//     }
//   }
//   printAlphabet(5);
  




//   string-2

// function identifyCharacter(char) {
//     if (char >= '0' && char <= '9') {
//       console.log("digit");
//     } else if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
//       console.log("lotin");
//     } else {
//       console.log("Nol");
//     }
//   }
  
//   identifyCharacter('5');

//   identifyCharacter('A');

//   identifyCharacter('@');





// string-3

// function getUTF16Codes(str) {
//     if (str.length > 0) {
//       const firstCharCode = str.charCodeAt(0);
//       const lastCharCode = str.charCodeAt(str.length - 1);
  
//       console.log(`Birinchi belgi UTF-16 kodi: ${firstCharCode}`);
//       console.log(`Oxirgi belgi UTF-16 kodi: ${lastCharCode}`);
//     } else {
//       console.log("Satr bo'sh!");
//     }
//   }
  
//   getUTF16Codes("Hello");
 
  



// string-4

// function createString(N, char) {
//     if (N > 0) {
//       const result = char.repeat(N);
//       console.log(result);
//     } else {
//       console.log("N musbat butun son bo'lishi kerak!");
//     }
//   }
  
//   createString(5, 'A');




// string-5

// function reverseString(inputString) {
//     const reversedString = inputString.split('').reverse().join('');
//     console.log(reversedString);
//   }
  
//   reverseString('Hello');

  



// string-6

// function getStringStars(inputString, N) {
//     const strArray = inputString.split('');
    
//     for (let i = N; i < strArray.length; i += N + 1) {
//       strArray.splice(i, 0, '*');
//     }
  
//     return strArray.join('');
//   }
  
//   const result = getStringStars('HelloWorld', 2);
//   console.log(result);
 
  


// string-7

// function findNumberCount(inputString) {
//     let digitCount = 0;
  
//     for (const char of inputString) {
//       if (!isNaN(char)) {
//         digitCount++;
//       }
//     }
  
//     return digitCount;
//   }
  
//   const result = findNumberCount('Hello123World45');
//   console.log(result);

  




// string-8

// function countLowerCaseLetters(inputString) {
//     let lowercaseCount = 0;
  
//     for (const char of inputString) {
//       if (/[a-zа-я]/.test(char)) {
//         lowercaseCount++;
//       }
//     }
  
//     return lowercaseCount;
//   }
  
//   const result = countLowerCaseLetters('Hello 123 Привет');
//   console.log(result);





// string-9

// function convertToLowerCase(inputString) {
//     let resultString = '';
  
//     for (const char of inputString) {
//       if (/[A-Z]/.test(char)) {
//         resultString += char.toLowerCase();
//       } else {
//         resultString += char;
//       }
//     }
  
//     return resultString;
//   }
  
//   const result = convertToLowerCase('Hello World');
//   console.log(result);
 
  




// string-10

// function swapCase(inputString) {
//     let resultString = '';
  
//     for (const char of inputString) {
//       if (/[A-Z]/.test(char)) {
//         resultString += char.toLowerCase();
//       } else if (/[a-z]/.test(char)) {
//         resultString += char.toUpperCase();
//       } else {
//         resultString += char;
//       }
//     }
  
//     return resultString;
//   }
  
//   const result = swapCase('Hello World');
//   console.log(result);
  
  



// string-12

// function getInverseNumber(n) {
//     const reversedNumber = parseInt(n.toString().split('').reverse().join(''));
//     return reversedNumber;
//   }
  
//   const result = getInverseNumber(12345);
//   console.log(result);

  
  



// string-14

// function concatenateStrings(N1, N2, S1, S2) {
//     const newString = S1.slice(0, N1) + S2.slice(-N2);
//     return newString;
//   }
  
//   const result = concatenateStrings(3, 2, "abcdef", "12345");
//   console.log(result);
  
  




// string-15

// function duplicateChar(char, str) {
//     const result = str.split(char).join(char + char);
//     return result;
//   }
  
//   const result = duplicateChar("a", "abc");
//   console.log(result);

  



// stirng-16

// function addStringAfterChar(char, mainString, appendString) {
//     const result = mainString.split(char).join(char + appendString);
//     return result;
//   }
  
//   const result = addStringAfterChar("a", "abc", "123");
//   console.log(result);





// string-17

// function countRepetitions(mainString, subString) {
//     const regex = new RegExp(subString, 'g');
//     const repetitions = (mainString.match(regex) || []).length;
//     return repetitions;
//   }
  
//   const repetitions = countRepetitions("ababab", "ab");
//   console.log(repetitions);
 



// string-18

// function removeFirstOccurrence(mainString, subString) {
//     const index = mainString.indexOf(subString);
//     if (index !== -1) {
//       const newString = mainString.slice(0, index) + mainString.slice(index + subString.length);
//       return newString;
//     }
//     return mainString;
//   }
  
//   const result = removeFirstOccurrence("ababab", "ab");
//   console.log(result);

  





// string-19

// function removeAllOccurrences(mainString, subString) {
//   let index;
//   while ((index = mainString.indexOf(subString)) !== -1) {
//     mainString = mainString.slice(0, index) + mainString.slice(index + subString.length);
//   }
//   return mainString;
// }

// const result = removeAllOccurrences("ababab", "ab");
// console.log(result);






// string-20

// function replaceFirstOccurrence(mainString, searchString, replacementString) {
//     const index = mainString.indexOf(searchString);
//     if (index !== -1) {
//       mainString = mainString.slice(0, index) + replacementString + mainString.slice(index + searchString.length);
//     }
//     return mainString;
//   }
  
//   const result = replaceFirstOccurrence("ababab", "ab", "cd");
//   console.log(result);

  




// string-21

// function replaceLastOccurrence(mainString, searchString, replacementString) {
//     const index = mainString.lastIndexOf(searchString);
//     if (index !== -1) {
//       mainString = mainString.slice(0, index) + replacementString + mainString.slice(index + searchString.length);
//     }
//     return mainString;
//   }
  
//   const result = replaceLastOccurrence("ababab", "ab", "cd");
//   console.log(result);

  




// string-22

// function findStartAndEndWords(inputString) {
//     const words = inputString.split(' ');
  
//     let startWordsCount = 0;
//     let endWordsCount = 0;
  
//     for (const word of words) {
//       const firstChar = word.charAt(0);
//       const lastChar = word.charAt(word.length - 1);
  
//       if (firstChar === lastChar && firstChar === firstChar.toUpperCase()) {
//         startWordsCount++;
//       }
  
//       if (firstChar === lastChar && firstChar === firstChar.toLowerCase()) {
//         endWordsCount++;
//       }
//     }
  
//     console.log("Boshlanuvchi so'zlar soni:", startWordsCount);
//     console.log("Tugovchi so'zlar soni:", endWordsCount);
//   }
  
//   findStartAndEndWords("Doston do'stlar bilan Doston do'stlar bilan");
  

  

  

// string-23

// function findWordsWithTwoA(inputString) {
//     const words = inputString.split(' ');
//     let wordsWithTwoACount = 0;
  
//     for (const word of words) {
//       let countA = 0;
  
//       for (const char of word) {
//         if (char.toUpperCase() === 'A') {
//           countA++;
//         }
//       }
  
//       if (countA === 2) {
//         wordsWithTwoACount++;
//       }
//     }
  
//     console.log("2 ta 'A' harfi bor so'zlar soni:", wordsWithTwoACount);
//   }
  
//   findWordsWithTwoA("Asaka Aholi Asaka Aholi");
  






// string-24

// function getMaxOfString(str) {
//     const words = str.split(' ');
//     let maxLength = 0;
//     let longestWord = '';
  
//     for (const word of words) {
//       if (word.length > maxLength) {
//         maxLength = word.length;
//         longestWord = word;
//       }
//     }
  
//     return longestWord;
//   }
  
//   const exampleString = "Salom dunyo! Bu bir test matn.";
//   const result = getMaxOfString(exampleString);
//   console.log("Eng uzun so'z:", result);
  





// string-26

function capitalizeFirstLetter(str) {
    const words = str.split(' ');
    const capitalizedWords = words.map(word => {
      if (word.length > 0) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        return '';
      }
    });
  
    return capitalizedWords.join(' ');
  }
  
  const exampleString = "salom dunyo! bu bir test matn.";
  const result = capitalizeFirstLetter(exampleString);
  console.log("Natija:", result);
  