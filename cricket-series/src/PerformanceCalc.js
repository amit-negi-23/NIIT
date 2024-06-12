
const PerformanceCalculator=(runs,balls)=>{
      let average = runs/balls;

      if(runs>30 && balls<15){
            average+=0.01*average;
      }else if(runs>50 && balls <20){
            average+=0.1*average;
      }else if(runs>100 && balls <50){
            average +=0.2*average;
      }

      return average;
}

module.exports={PerformanceCalculator}
