const swapDigits = (number) => {
    if (number < 0) {
        swappedNumber = 0;
        return swappedNumber;
    }else{
        let numStr = number.toString();
        let length = numStr.length;
        let swappedNumber = "";
    
        if (length % 2 == 0) {
            for (let i = 0; i < length; i += 2) {
                swappedNumber += numStr[i + 1] + numStr[i]
            }
            return parseInt(swappedNumber);
        } else if(length ==1){
            swappedNumber = 0;
            return swappedNumber;
        }else if (length % 2 !== 0 && number > 0) {
            swappedNumber = numStr[0]
            for (let i = 1; i < length; i += 2) {
                swappedNumber += numStr[i + 1] + numStr[i]
            }
            return parseInt(swappedNumber);
        }
    }
    

}

module.exports = swapDigits
