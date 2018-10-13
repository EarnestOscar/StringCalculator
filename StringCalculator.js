
function add(NumberStr) {

    var numbers = NumberStr.split(/,|\n/g);
    var sum = 0;
    var storage = [];
    
  	var negatives = numbers.filter(n => parseInt(n) < 0);
  
  	if(negatives.length) {
      throw `Negatives not allowed: ${negatives.join(',')}`;
    }

  for(var i = 0; i < numbers.length; i++){       

    if(parseInt(numbers[i]) > 1000 || parseInt(numbers[i]) < 0)
        {
            numbers[i] = 0;
            sum+= 0;
        }
        sum+= parseInt(numbers[i] || 0);
    }
  
    return sum;
}
 
module.exports = add; 