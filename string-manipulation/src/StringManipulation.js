//count the number of Characters in the given String and return the value
const countCharacters = (str) => {
  let num = 0;
  if(str){
    for(let i=0; i<str.length; i++){
      num+=1;
    }
    return num;
  }else{
    return num;
  }
}
//count the number of vowels in the given String and return the value
const countVowels = (str) => {
  let num =0;
  if(str){
    for(let s of str){
      if(s=='a' || s=='e' || s=='i' || s =='o' ||s =='u'){
        num+=1;
      }
    }
    return num;
  }else{
    return num;
  }
}

//Check the existence of the given String in the Specified String and return the value
const checkExistenceOfStr = (str, checkStr) => {
  if(str.includes(checkStr)){
    return true;
  }else{
    return false;
  }
}

//replace a word and return the value
const replaceWord = (str, wordToBeReplaced, replaceWord) => {
  return str.replace(wordToBeReplaced, replaceWord);
}

//convert the specified string into Title Case and return the value
const titleCaseConversion = (str) => {
 return str.split(" ").map((e)=>(e.charAt(0).toUpperCase()+e.slice(1))).join(" ");
}

// find the largest word (in terms of length) in the specified string and return the value
const findLongestWord = (str) => {
  let lgWord = ""
  let lgWordLength = 0;
  if(str){
    let wordArry= str.split(" ");
    for(let word of wordArry){
      if(lgWordLength<word.length){
        lgWordLength = word.length;
        lgWord = word;
      }
    }
    return lgWord;

  }else{
    return lgWord;
  }
}


module.exports = {
  countCharacters,
  countVowels,
  checkExistenceOfStr,
  replaceWord,
  titleCaseConversion,
  findLongestWord
}