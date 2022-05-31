// How can you make this more scalable and reusable later?

exports.findArmstrongNumbers = function(numbers) {

    armstrongNumberlist = [];
    let singleNumberToArray;
    let numArray = [];
    let sum = 0;
    for(let i=0; i < numbers.length; i++) {
        if(numbers[i] < 10) {
            armstrongNumberlist.push(numbers[i]);
        }else if(numbers[i] >= 10) {
            //console.log(numbers[i])
            //conversion of one number 370 to [3,7,0]
            singleNumberToArray = Array.from(String(numbers[i]), Number);
            numArray.push(singleNumberToArray);
            
            //console.log(numArray); [ [ 3, 7, 1 ], [ 4, 0, 7 ] ]
            for(let j= 0; j < numArray.length; j++) {
                    //console.log((singleNumberToArray[j]**3))
                    for(let k= 0; k < numArray[j].length; k++) {
                        //console.log(numArray[j][k])
                        //sum += (numArray[j][k])**3;
                        sum = ((numArray[j][0])**3) + ((numArray[j][1])**3) +((numArray[j][2])**3)
                        //console.log(sum === numbers[i]); 
                    }
                    if(sum === numbers[i]){
                        armstrongNumberlist.push(sum);
                    }
              
            }
        }
        
    }
    // console.log(armstrongNumberlist)
    // armstrongNumberlist.join().split(',').map(Number);
    return armstrongNumberlist;
};
//153, 370, 371, 407
// let numbers = [0,1,2,3,4,5,6,7,8,9, 153, 370, 371, 407]
// exports.findArmstrongNumbers(numbers);
// [0, 1, 2, 3, 4, 5, 6, 7]));