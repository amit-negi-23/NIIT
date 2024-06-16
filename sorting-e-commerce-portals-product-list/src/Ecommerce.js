//import all the require modules
const fs = require("fs");
const readline = require("readline");
const lodash = require("lodash");

//write try catch to hanlde the exceptions

//More userdefined methods can be written if required to write the logical stuff

//return the callback with appropriate data where ever require in all the methods

//This method will read the file it takes two parameters first the fileName
//and second the callback
const readFileContents = (fileName, cb) => {
  try {
    if (fs.existsSync(fileName)) {
      const rl = readline.createInterface({
        input: fs.createReadStream(fileName),
        output: process.stdout,
        terminal: false,
      });
      let fileContents = [];
      rl.on("line", function (line) {
        fileContents.push(line);
        if (fileContents.length === 19922) {
          cb(null, fileContents);
        }
      });
    } else cb("Encountered error while reading file contents..!", null);
  } catch (err) {
    console.log(err);
  }
};

//This method will sortDataonprice it will take two parameters one is fileContent
//second the callback
const sortDataOnPrice = (fileContents, cb) => {
  //use lodash.sortBy()
  let sortedData = lodash.sortBy(fileContents, file => "retail_price");
  let reverseSortedData = lodash.reverse(sortedData);
  cb(null, reverseSortedData);
};

//This method will sortDataonRating
const sortDataOnRating = (fileContents, cb) => {
  //use map where ever required
  fileContents.shift();
  let sortedData = lodash.sortBy(fileContents, file => "product_rating");
  //use lodash sortBy() and compact() if required

  //use lodash.reverse() if required
  cb(null, lodash.reverse(sortedData));
};

//This method will write the sortedData in the output file
const writeSortedDataToFile = (outputFileName, sortedData, cb) => {};

module.exports = {
  readFileContents,
  sortDataOnPrice,
  sortDataOnRating,
};
