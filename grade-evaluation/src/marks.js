// Define a function to calculate the total marks and return a promise
const calculateTotalMarks = (math, english, science, social, language) => {
  return new Promise((resolve, reject) => {
    if (math && english && science && social && language) {
     let totalMarks = math + english + science + social + language;
      resolve(totalMarks);
    }else{
        reject("Null values for marks")
    }
  });
};
// Define a function to calculate average marks and return a promise
const calculateAverageMarks = (totalMarks) => {
  return new Promise((resolve, reject) => {
    if(totalMarks){
      let  averageMarks = totalMarks/5;
        resolve(averageMarks);
    }else{
        reject(totalMarks)
    }
  });
};
// Define a function to calculate grade and return a promise
const calculateGrade = (averageMarks) => {
  return new Promise((resolve, reject) => {
    if (averageMarks >= 90) {
      resolve("A+");
    } else if (averageMarks >= 80 && averageMarks <= 89) {
      resolve("A");
    } else if (averageMarks >= 70 && averageMarks <= 79) {
      resolve("B");
    } else if (averageMarks >= 60 && averageMarks <= 69) {
      resolve("C");
    } else if (averageMarks >= 60 && averageMarks <= 69) {
      resolve("D");
    } else if (averageMarks >= 50 && averageMarks <= 59) {
      resolve("E");
    } else if (averageMarks < 50) {
      resolve("F");
    }else{
        reject("Null values for marks")
    }
  });
};

module.exports = {
  calculateAverageMarks,
  calculateGrade,
  calculateTotalMarks,
};
