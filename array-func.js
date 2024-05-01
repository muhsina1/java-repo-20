function getSum(array){
  const  findNum = array!=0

   for(var i=0; i<findNum.lenght; i++){
      const sum =sum+ findNum[i]
      return sum
   }
}

const myNumber =[3, 5, 8, 2, 0, 1]
const sumOdd =getSum(myNumber)
console.log(sumOdd)