function sumAnArray(a){
       let sum = 0;
       for(let i = 0; i<a.length; i++){
           const index = i ;
           const element = a[index];
           sum = sum + element;
           console.log(index, element, sum);
       }

       return sum;
   }
   
   const myNumber =[5, 8, 9, 6, 2, 9, 32];
   sumAnArray(myNumber);