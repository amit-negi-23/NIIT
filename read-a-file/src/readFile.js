const fs = require("fs");
// import the lodash library
const lodash = require("lodash");

// Read the file data and return the data in the resolved Promise
const read = (fileName) => {
  return new Promise((resolve, reject) => {
      fs.readFile(fileName, (err, data) => {
        if (err){
          reject(err);
        }
        resolve(data);
      });
    } 
  );
};
// Define a function to Convert the file content to upper case and return the result in the resolved Promise
const convertToUpperCase = (fileContents) => {
  return new Promise((resolve, reject) => {
    try {
      let upCasefileContent = lodash.toUpper(fileContents);
      let resArry = upCasefileContent.toString().split(",")
      resolve(resArry)
    } catch (error) {
      reject("Encountered error while reading file contents..!")
    }
    
  });
};
// Define a function to read and convert the file contents, use the then and catch blocks here
const readAndConvertFileContents = async (fileName, cb) => {
  if(fs.existsSync(fileName)){
    let fileContents = await read(fileName);
    let result = await convertToUpperCase(fileContents);
    // console.log("aa",result);
    cb(null, result)
  }
  else{
    cb("Encountered error while reading file contents..!",null)
  }
  
};

module.exports = {
  readAndConvertFileContents,
};
